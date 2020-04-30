<template>
  <div class="pt-10">
    <div class="px-4">
      <p class="text-sm font-bold text-teally uppercase mb-4">Categories</p>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 h-64">
        <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
        <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
        <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
        <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
      </div>
      <div class="h-x-tiny bg-black my-8"></div>
      <p class="text-sm font-bold text-teally uppercase my-4">All products</p>
    </div>
    <ProductList class="flex flex-wrap px-2">
      <ProductItem
        v-for="product in products"
        :key="product._id"
        :img-src="'../../assets/images/image.jpg'"
        :sale-price="5"
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
  computed: {
    products() {
      return this.$store.state.products.all
    }
  },
  async fetch({ store }) {
    await store.dispatch('products/fetchItems')
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
