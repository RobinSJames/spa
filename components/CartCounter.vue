<template>
  <div :class="counter === null ? 'hidden' : ''">
    <div
      :class="counter > 9 ? 'w-5 h-5' : 'w-4 h-4'"
      class="flex justify-center items-center bg-sale-red rounded-full text-white text-xs"
    >
      {{ counter }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: null
    }
  }
}
</script>

<style></style>
