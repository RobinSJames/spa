<template>
  <div class="px-1/12">
    <div class="w-full flex flex-col mb-20">
      <h3 class="text-3xl text-center mb-4">Shopping Cart</h3>
      <AppButton label="Continue Shopping" variant="teally" to="/shop" />
    </div>
    {{ products }}
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
export default {
  components: { AppButton },
  async fetch({ store }) {
    await store.dispatch('orders/fetchFavourites')
    await store.dispatch('products/fetchItems')
  },
  computed: {
    products() {
      return this.$store.state.products.all
    }
  }
}
</script>

<style></style>
