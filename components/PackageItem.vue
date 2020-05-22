<template>
  <div class="w-full h-full md:w-1/2 mt-1/12">
    <div class="h-half">
      <img
        :src="packageImage"
        alt=""
        class="h-full w-full object-fit object-cover"
      />
    </div>
    <div class="p-1/12 bg-mrgray text-center">
      <h1 class="font-serif text-3xl leading-tight py-2">{{ title }}</h1>
      <p class="text-sm text-medium-gray">{{ body }}</p>
      <h1 class="font-serif text-2xl font-bold pt-6">R {{ price }}</h1>
      <p class="font-bold text-sm text-teally py-2 uppercase">I'm interested</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packageImage: {
      type: String,
      default: '/images/eye-plant.jpg'
    },
    title: {
      type: String,
      default: 'This is the title'
    },
    body: {
      type: String,
      default: 'This is the body of the package item.'
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
