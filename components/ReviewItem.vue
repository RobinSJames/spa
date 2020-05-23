<template>
  <div class="mb-6 border-b">
    <p class="mb-2">Rating</p>
    <h1 class="font-serif font-bold text-2xl text-dark-gray mb-2">
      {{ title }}
    </h1>
    <div class="flex flex-col">
      <p class="text-sm font-thin">{{ reviewedBy }} on {{ createdAt }}</p>
      <p class="font-serif mb-2 text-medium-gray">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'This is a review title'
    },
    reviewedBy: {
      type: String,
      default: 'Jane Doe'
    },
    createdAt: {
      type: String,
      default: Date.now
    },
    body: {
      type: String,
      default: 'This is the body of the review'
    }
  }
}
</script>

<style></style>
