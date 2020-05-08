<template>
  <div class="px-1/12">
    <div class="w-full flex flex-col mb-16 pt-10 items-center">
      <h3 class="font-serif text-5xl text-center mb-4">Shopping Cart</h3>
      <AppButton
        label="Continue Shopping"
        variant="teally"
        to="/shop"
        class="sm:w-1/3 lg:w-1/5"
      />
    </div>
    <div class="sm:hidden border-t">
      <div
        v-for="product in setProducts()"
        :key="product.id"
        class="my-2 pb-2 border-b"
      >
        <div class="flex">
          <p class="w-1/3 font-thin text-xs self-center">PRODUCT</p>
          <div class="w-2/3 flex items-center mb-4">
            <img
              :src="'https://mockspa-api.herokuapp.com/' + product.productImage"
              alt=""
              class="w-20 h-20 mr-4"
            />
            <div class="flex flex-col justify-between">
              <p
                class="font-serif font-bold text-xl hover:text-teally cursor-pointer"
                @click="$router.push(`shop/${product._id}`)"
              >
                {{ product.title }}
              </p>
              <p class="text-xs hover:text-teally cursor-pointers">Remove</p>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center my-2">
          <p class="w-1/3 font-thin text-xs">PRICE</p>
          <p class="font-serif font-bold">R {{ product.cost }}</p>
        </div>
        <div class="w-full flex">
          <p class="w-1/3 font-thin text-xs self-center">QUANTITY</p>
          <InputFields
            v-model="product.quantity"
            type="number"
            :min="1"
            :max="10"
            class="w-1/3"
          />
        </div>
        <div class="w-full flex items-center my-2">
          <p class="w-1/3 font-thin text-xs">TOTAL</p>
          <p class="font-serif font-bold">
            R {{ product.cost * product.quantity }}
          </p>
        </div>
      </div>
    </div>
    <table class="hidden sm:block w-full">
      <thead class="py-4">
        <tr class="border-t border-b text-xs">
          <th class="text-left font-thin py-2">PRODUCT</th>
          <th class="text-left text-center font-thin py-2">PRICE</th>
          <th class="text-left font-thin py-2">QUANTITY</th>
          <th class="text-left text-center font-thin py-2">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in setProducts()" :key="product.id" class="border-b">
          <td class="py-2">
            <div class="flex">
              <img
                :src="
                  'https://mockspa-api.herokuapp.com/' + product.productImage
                "
                alt=""
                class="w-20 h-20 mr-4"
              />
              <div class="flex flex-col justify-between">
                <p
                  class="font-serif font-bold text-xl hover:text-teally cursor-pointer"
                >
                  {{ product.title }}
                </p>
                <p class="text-xs hover:text-teally cursor-pointer">Remove</p>
              </div>
            </div>
          </td>
          <td class="font-serif font-bold text-center py-2 w-1/6">
            R {{ product.cost }}
          </td>
          <td class="w-1/5 py-2">
            <InputFields
              v-model="product.quantity"
              type="number"
              :min="1"
              :max="10"
            />
          </td>
          <td class="font-serif font-bold text-center py-2 w-1/6">
            R {{ product.cost * product.quantity }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="py-3">
      <p class="text-right">
        Subtotal
        <span class="font-serif font-bold text-3xl"
          >R {{ sumSubTotal(setProducts()) }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import InputFields from '~/components/InputFields'
export default {
  components: { AppButton, InputFields },
  async fetch({ store }) {
    await store.dispatch('orders/fetchLocal')
    await store.dispatch('products/fetchItems')
  },
  computed: {
    products() {
      return this.$store.state.products.all
    },
    local() {
      return this.$store.state.orders.local
    }
  },
  methods: {
    setProducts() {
      const arr = []
      const localStore = this.local
      this.products.forEach((element) => {
        localStore.forEach((attr) => {
          if (element._id === attr.product) {
            const obj = {
              _id: element._id,
              title: element.title,
              cost: element.cost,
              quantity: attr.quantity,
              productImage: element.productImage
            }
            arr.push(obj)
          }
        })
      })
      return arr
    },
    sumSubTotal(x) {
      let sum = 0
      x.forEach((element) => {
        sum = sum + element.cost * element.quantity
      })
      return sum
    }
  }
}
</script>

<style></style>
