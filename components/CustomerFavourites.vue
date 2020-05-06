<template>
  <section class="px-10 mt-10">
    <div class="w-full flex flex-col items-center">
      <h4 class="text-4xl text-center">Best Sellers</h4>
      <div class="w-40 h-tiny bg-teally mb-10"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="order in setProductDetails()"
        :key="order._id"
        class="relative cursor-pointer text-center mb-16 md:mb-0 md:pl-2"
        @click="toRouteId(order._id)"
      >
        <img :src="'http://localhost:5000/' + order.productImage" alt="" />
        <h4 class="text-3xl font-medium">{{ order.title }}</h4>
        <h4 class="text-teally text-xl">R{{ order.cost }}</h4>
        <div class="absolute top-0 right-0 w-full sm:w-1/2 md:w-full xl:w-/12">
          <div
            style="clip-path: polygon(100% 0, 50% 0, 50% 45%, 100% 70%);"
            class="w-full h-20 lg:h-24 bg-sale-red z-10"
          >
            <p class="text-white text-right lg:text-lg font-bold pr-4 pt-2">
              On Sale Now!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    orders: {
      type: [Object, Array],
      default: () => []
    },
    products: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    computedFavourites() {
      return this.sliceFavourites()
    }
  },
  mounted() {
    this.setProductDetails()
  },
  methods: {
    toRouteId(x) {
      this.$router.push(`/shop/${x}`)
    },
    sliceFavourites() {
      const arr = [...this.orders]
      const sliced = arr.slice(0, 3)
      return sliced
    },
    setProductDetails() {
      const details = []
      this.products.forEach((element) => {
        const elemId = element._id
        this.computedFavourites.forEach((attr) => {
          // console.log(attr)
          if (attr.product === elemId) {
            details.push(element)
          }
        })
      })
      return details
    }
  }
}
</script>

<style></style>
