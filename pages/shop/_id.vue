<template>
  <div class="flex flex-col">
    <div class="flex flex-col sm:flex-row p-1/12">
      <div class="w-full sm:w-1/2 pl-4">
        <div>
          <img
            :src="'https://mockspa-api.herokuapp.com/' + product.productImage"
            alt=""
          />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div class="w-full sm:w-1/2 px-4">
        <h1 class="text-3xl md:text-5xl capitalize pb-4">
          {{ product.title }}
        </h1>
        <p v-if="product.availability" class="pb-4">
          {{ product.availability }}
        </p>
        <p class="pb-4">{{ product.excerpt }}</p>
        <p class="text-xl md:text-2xl text-dark-gray font-bold pb-4">
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
    <div class="bg-mrgray p-1/12">
      <div class="mb-10">
        <h3 class="tracking-widest mb-1">CUSTOMER REVIEWS</h3>
        <p class="text-sm mb-2">Based on {{ reviews.length }} reviews</p>
        <button
          class="border border-teally text-medium-gray text-sm font-bold hover:bg-teally hover:text-white py-2 px-4 focus:bg-teally focus:text-white focus:outline-none"
          @click="showFields = !showFields"
        >
          WRITE A REVIEW
        </button>
      </div>
      <div v-if="showFields" class="mb-8">
        <div>
          <InputField type="textarea" label="Review" class="my-4" />
          <AppButton label="SUBMIT" variant="teally" />
        </div>
        <div>
          Please
          <span class="hover:text-teally hover:underline cursor-pointer"
            >login</span
          >
          or
          <span class="hover:text-teally hover:underline cursor-pointer"
            >register</span
          >
          to leave a review.
        </div>
      </div>
      <ReviewList>
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :title="review.title"
          :reviewed-by="review.reviewedBy"
        />
      </ReviewList>
    </div>
    <CustomerFavourites
      :orders="favourites"
      :products="products"
      class="px-1/12"
    />
  </div>
</template>

<script>
import InputField from '~/components/InputFields'
import AppButton from '~/components/AppButton'
import ReviewItem from '~/components/ReviewItem'
import ReviewList from '~/components/ReviewList'
import CustomerFavourites from '~/components/CustomerFavourites'
export default {
  components: {
    InputField,
    AppButton,
    ReviewItem,
    ReviewList,
    CustomerFavourites
  },
  async fetch({ store, params }) {
    await store.dispatch('products/fetchItem', { id: params.id })
    await store.dispatch('orders/fetchLocal')
    await store.dispatch('orders/fetchFavourites')
    await store.dispatch('products/fetchItems')
  },
  data: () => ({
    showFields: false,
    quantity: 1,
    orders: [],
    reviews: [
      {
        id: 1,
        title: 'Awesome',
        reviewedBy: 'Jackson',
        createdAt: Date.now,
        body: 'This is a minimum viable product for sure'
      },
      {
        id: 2,
        title: 'Awesome',
        reviewedBy: 'Jackson',
        createdAt: Date.now,
        body: 'This is a minimum viable product for sure'
      },
      {
        id: 3,
        title: 'Awesome',
        reviewedBy: 'Jackson',
        createdAt: Date.now,
        body: 'This is a minimum viable product for sure'
      }
    ]
  }),
  computed: {
    product() {
      return this.$store.state.products.single
    },
    priceByQuantity() {
      return this.product.cost * this.quantity
    },
    favourites() {
      return this.$store.state.orders.favourites
    },
    products() {
      return this.$store.state.products.all
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
