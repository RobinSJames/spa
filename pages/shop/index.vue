<template>
  <div>{{ products }}</div>
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
