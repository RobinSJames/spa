<template>
  <div class="flex flex-col sm:flex-row p-1/12">
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
      <h1 class="text-3xl md:text-5xl capitalize pb-4">{{ product.title }}</h1>
      <p v-if="product.availability" class="pb-4">{{ product.availability }}</p>
      <p class="pb-4">{{ product.excerpt }}</p>
      <p class="text-xl md:text-2xl font-bold pb-4">
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
