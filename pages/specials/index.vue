<template>
  <div class="px-1/12 pt-1/12">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Specials</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <ProductList class="flex flex-wrap pt-1/12">
      <ProductItem
        v-for="product in filterSaleProducts(products)"
        :key="product._id"
        :img-src="'https://mockspa-api.herokuapp.com/' + product.productImage"
        :title="product.title"
        :cost="product.cost"
        :is-on-sale="product.isOnSale"
        :sale-price="product.salePrice"
        class="pr-2 md:pr-4 lg:pr-8 md:mb-8 lg:mb-10"
        @view-action="$router.push(`/shop/${product._id}`)"
        @cart-action="addToCart(product._id, 1)"
      />
    </ProductList>
  </div>
</template>

<script>
import ProductList from '~/components/ProductList'
import ProductItem from '~/components/ProductItem'
export default {
  components: { ProductItem, ProductList },
  async fetch({ store, params }) {
    await store.dispatch('products/fetchItems')
  },
  computed: {
    products() {
      return this.$store.state.products.all
    }
  },
  methods: {
    filterSaleProducts(x) {
      const copied = [...x]
      // console.log(copied)
      const filtered = copied.filter((copy) => copy.isOnSale === true)
      return filtered
    }
  }
}
</script>

<style></style>
