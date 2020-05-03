<template>
  <div class="flex">
    <div class="w-1/2">
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
    <div class="w-1/2 px-4">
      <h1 class="text-5xl capitalize">{{ product.title }}</h1>
      <p v-if="product.availability">{{ product.availability }}</p>
      <p>{{ product.description }}</p>
      <p class="text-3xl font-bold">{{ product.description }}</p>
      <p>{{ product.description }}</p>
      <InputField label="Selection" type="select" />
      <InputField label="Quantity" type="number" />
      <AppButton label="Add to cart" variant="teally" />
      {{ product }}
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
  computed: {
    product() {
      return this.$store.state.products.single
    }
  }
}
</script>

<style></style>
