<template>
  <div class="flex flex-col w-1/2 md:w-1/3 mb-4">
    <img :src="imgSrc" alt="This is an image" class="w-full" />
    <p class="text-base md:text-xlg font-bold leading-tight py-2">
      {{ title }}
    </p>
    <p v-if="isOnSale" class="text-sale-red text-base font-bold py-1">
      R {{ salePrice }}
    </p>
    <p
      :class="isOnSale ? 'line-through text-sm' : 'font-bold text-base'"
      class="text-teally py-1"
    >
      R {{ cost }}
    </p>
    <div
      class="flex flex-col md:flex-row justify-end md:justify-between items-end h-full"
    >
      <button
        class="w-full bg-teally uppercase text-white text-xs font-bold py-2 mb-2 md:mr-2 md:mb-0"
        @click="$emit('view-action')"
      >
        view product
      </button>
      <button
        class="w-full bg-teally uppercase text-white text-xs font-bold py-2"
        @click="$emit('cart-action')"
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
    isOnSale: {
      type: Boolean,
      default: false
    },
    salePrice: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
