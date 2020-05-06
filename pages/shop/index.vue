<template>
  <div class="pt-10 px-4 md:px-1/12">
    <div class="">
      <p class="text-sm font-bold text-teally uppercase mb-4">Categories</p>
      <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <div
          class="relative col-span-1 grid-span-1 w-full h-32 sm:h-40 bg-black"
        >
          <img
            src="/images/categories/category4.png"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
        </div>
        <div class="relative col-span-1 grid-span-1 w-full h-full bg-black">
          <img
            src="/images/categories/category1.jpg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
        </div>
        <div class="relative col-span-1 grid-span-1 w-full h-full bg-black">
          <img
            src="/images/categories/category2.jpg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
        </div>
        <div class="relative col-span-1 grid-span-1 w-full h-full bg-black">
          <img
            src="/images/categories/category3.jpeg"
            alt=""
            class="absolute w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div class="h-x-tiny bg-black my-8"></div>
      <p class="text-sm font-bold text-teally uppercase my-4">All products</p>
    </div>
    <ProductList class="flex flex-wrap">
      <ProductItem
        v-for="product in products"
        :key="product._id"
        :img-src="'http://localhost:5000/' + product.productImage"
        :sale-price="5"
        class="pr-2"
        @view-action="setViewRoute(product._id)"
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
    api: process.env.API_HOST
  }),
  computed: {
    products() {
      return this.$store.state.products.all
    }
  },
  mounted() {
    // this.getProducts()
  },
  methods: {
    // async getProducts() {
    //   await this.$axios
    //     .$get('http://localhost:5000/api/v1/products')
    //     .then((res) => {
    //       return {
    //         data: res
    //       }
    //     })
    // }
    setViewRoute(x) {
      this.$router.push(`/shop/${x}`)
    }
  }
}
</script>

<style></style>
