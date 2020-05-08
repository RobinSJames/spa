<template>
  <div class="pt-10 px-4 md:px-1/12">
    <div class="">
      <p class="text-sm font-bold text-teally uppercase mb-4">Categories</p>
      <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <div
          class="relative col-span-1 grid-span-1 w-full h-32 sm:h-40 md:h-56 lg:h-64 bg-black cursor-pointer"
        >
          <img
            src="/images/categories/category4.png"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
          <div
            class="absolute w-full h-full bg-black opacity-50 hover:opacity-25"
          ></div>
          <h3 class="absolute bottom-0 pb-2 pl-4 text-xl text-white font-bold">
            All Products
          </h3>
        </div>
        <div
          class="relative col-span-1 grid-span-1 w-full h-full bg-black cursor-pointer"
        >
          <img
            src="/images/categories/category1.jpg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
          <div
            class="absolute w-full h-full bg-black opacity-50 hover:opacity-25"
          ></div>
          <h3 class="absolute bottom-0 pb-2 pl-4 text-xl text-white font-bold">
            Oils
          </h3>
        </div>
        <div
          class="relative col-span-1 grid-span-1 w-full h-full bg-black cursor-pointer"
        >
          <img
            src="/images/categories/category2.jpg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
          <div
            class="absolute w-full h-full bg-black opacity-50 hover:opacity-25"
          ></div>
          <h3 class="absolute bottom-0 pb-2 pl-4 text-xl text-white font-bold">
            Salts
          </h3>
        </div>
        <div
          class="relative col-span-1 grid-span-1 w-full h-full bg-black cursor-pointer"
        >
          <img
            src="/images/categories/category3.jpeg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
          <div
            class="absolute w-full h-full bg-black opacity-50 hover:opacity-25"
          ></div>
          <h3 class="absolute bottom-0 pb-2 pl-4 text-xl text-white font-bold">
            Creams
          </h3>
        </div>
      </div>
      <div class="h-x-tiny bg-black my-8"></div>
      <p class="text-sm font-bold text-teally uppercase my-4">All products</p>
    </div>
    <ProductList class="flex flex-wrap">
      <ProductItem
        v-for="product in products"
        :key="product._id"
        :img-src="'https://mockspa-api.herokuapp.com/' + product.productImage"
        :title="product.title"
        :cost="product.cost"
        :is-on-sale="product.isOnSale"
        :sale-price="product.salePrice"
        class="pr-2 md:pr-4 lg:pr-8 md:mb-8 lg:mb-10"
        @view-action="setViewRoute(product._id)"
        @cart-action="addToCart(product._id, 1)"
      />
    </ProductList>
  </div>
</template>

<script>
import ProductList from '~/components/ProductList'
import ProductItem from '~/components/ProductItem'
export default {
  components: { ProductList, ProductItem },
  async fetch({ store }) {
    await store.dispatch('products/fetchItems')
  },
  data: () => ({
    orders: []
  }),
  computed: {
    products() {
      return this.$store.state.products.all
    }
  },
  methods: {
    setViewRoute(x) {
      this.$router.push(`/shop/${x}`)
    }
  }
}
</script>

<style></style>
