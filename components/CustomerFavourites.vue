<template>
  <section class="px-10">
    <div class="grid grid-cols-3">
      <div
        v-for="order in orders"
        :key="order._id"
        class="pl-2 cursor-pointer"
        @click="toRouteId(order._id)"
      >
        <img :src="order.productImage" alt="" />
        <h4 class="text-4xl font-medium">{{ order.title }}</h4>
        <h4 class="text-teally text-3xl font-bold">R{{ order.cost }}</h4>
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
    }
  },
  methods: {
    toRouteId(x) {
      this.$router.push(`/shop/${x}`)
    }
  }
}
</script>

<style></style>
