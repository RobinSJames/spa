<template>
  <div class="flex flex-col sm:flex-row p-1/12">
    <div class="w-full sm:w-1/2 pl-4">
      <div>
        <img :src="'http://localhost:5000/' + product.productImage" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
    <div class="w-full sm:w-1/2 px-4">
      <h1 class="text-3xl md:text-5xl capitalize pb-4">{{ product.title }}</h1>
      <p v-if="product.availability" class="pb-4">{{ product.availability }}</p>
      <p class="pb-4">{{ product.excerpt }}</p>
      <p class="text-xl md:text-2xl font-bold pb-4">
        {{ product.description }}
      </p>
      <p class="pb-4">{{ product.additionalDescription }}</p>
      <InputField label="Selection" type="select" class="pb-4" />
      <h3 v-if="priceByQuantity >= 0" class="text-xl pb-4">
        R {{ priceByQuantity }}
      </h3>
      <InputField
        v-model="quantity"
        label="Quantity"
        type="number"
        :min="0"
        :max="10"
        class="pb-4"
      />
      <AppButton
        :label="verifyCartContents() ? 'UPDATE CART' : 'ADD TO CART'"
        variant="teally"
        :disabled="quantity > 9 || quantity < 1 ? true : false"
        @clicked="addToCart(product._id, quantity)"
      />
    </div>
  </div>
</template>

<script>
import InputField from '~/components/InputFields'
import AppButton from '~/components/AppButton'
export default {
  components: { InputField, AppButton },
  async fetch({ store, params }) {
    await store.dispatch('products/fetchItem', { id: params.id })
    await store.dispatch('orders/fetchLocal')
  },
  data: () => ({
    quantity: 1,
    orders: []
  }),
  computed: {
    product() {
      return this.$store.state.products.single
    },
    priceByQuantity() {
      return this.product.cost * this.quantity
    }
  },
  methods: {
    async setLocalStorage(x, y) {
      const obj = {
        product: x,
        quantity: y
      }
      await this.$store
        .dispatch('orders/addLocal', { obj })
        .then(this.$router.push('/cart'))
      // const getCart = localStorage.getItem('cart')
      // if (!getCart) {
      //   this.orders.push(obj)
      //   localStorage.setItem('cart', JSON.stringify(this.orders))
      //   this.$router.push('/cart')
      // } else if (getCart.length > 0) {
      //   const parseCart = JSON.parse(getCart)
      //   parseCart.forEach((element, i) => {
      //     if (element.product === x) {
      //       match = !match
      //       const obj = { product: element.product, quantity: y }
      //       parseCart.splice(i, 1)
      //       parseCart.push(obj)
      //       localStorage.setItem('cart', JSON.stringify(parseCart))
      //       this.$router.push('/cart')
      //     } else {
      //       parseCart.push(obj)
      //       localStorage.setItem('cart', JSON.stringify(parseCart))
      //       this.$router.push('/cart')
      //     }
      //   })
      // }
    },
    addToCart(x, y) {
      this.setLocalStorage(x, y)
    },
    verifyCartContents() {
      const getCart = localStorage.getItem('cart')
      if (getCart) return true
      else return false
    }
  }
}
</script>

<style></style>
