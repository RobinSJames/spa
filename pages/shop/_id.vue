<template>
  <div class="flex flex-col p-1/12">
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
      <h1 class="text-5xl capitalize">{{ product.title }}</h1>
      <p v-if="product.availability">{{ product.availability }}</p>
      <p>{{ product.description }}</p>
      <p class="text-3xl font-bold">{{ product.description }}</p>
      <p>{{ product.description }}</p>
      <InputField label="Selection" type="select" />
      <h3 class="text-xl">R {{ priceByQuantity }}</h3>
      <InputField v-model="quantity" label="Quantity" type="number" :min="0" />
      <AppButton label="Add to cart" variant="teally" />
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
  },
  data: () => ({
    quantity: 1
  }),
  computed: {
    product() {
      return this.$store.state.products.single
    },
    priceByQuantity() {
      return this.product.cost * this.quantity
    }
  }
}
</script>

<style></style>
