<template>
  <div class="pt-10">
    <p class="text-sm font-bold text-teally uppercase">Categories</p>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-64">
      <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
      <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
      <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
      <div class="col-span-1 grid-span-1 w-full h-full bg-black"></div>
    </div>
    <div class="h-x-tiny bg-black my-8"></div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style></style>
