<template>
  <div class="flex flex-col w-1/2 md:w-1/3 px-2 mb-4">
    <img :src="imgSrc" alt="This is an image" class="w-full" />
    <p class="text-base md:text-lg font-medium leading-tight py-2">
      {{ title }}
    </p>
    <p v-if="salePrice" class="text-sale-red text-sm font-bold py-1">
      R {{ salePrice }}
    </p>
    <p
      :class="salePrice ? 'line-through' : 'font-bold'"
      class="text-teally text-sm py-1"
    >
      R {{ cost }}
    </p>
    <div class="flex flex-col md:flex-row justify-between">
      <button
        @click="$emit('view-action')"
        class="w-full bg-teally uppercase text-white text-xs font-bold py-2 mb-2 md:mr-2 md:mb-0"
      >
        view product
      </button>
      <button
        @click="$emit('cart-action')"
        class="w-full bg-teally uppercase text-white text-xs font-bold py-2"
      >
        add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '../assets/images/image.jpg'
    },
    title: {
      type: String,
      default: 'This is the product title'
    },
    cost: {
      type: Number,
      default: 90
    },
    salePrice: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
