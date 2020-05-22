<template>
  <div class="group w-full h-full md:w-1/2 rounded-lg">
    <div class="h-half overflow-hidden rounded-tr-lg rounded-tl-lg">
      <img
        :src="packageImage"
        alt=""
        class="transform group-hover:scale-150 transition duration-1000 ease-in-out h-full w-full object-fit object-cover"
      />
    </div>
    <div class="p-1/12 bg-mrgray text-center rounded-br-lg rounded-bl-lg">
      <h1 class="font-serif text-3xl py-2 leading-tight">
        {{ title }}
      </h1>
      <p class="text-sm text-medium-gray">{{ body }}</p>
      <h1 class="font-serif text-2xl font-bold pt-6">R {{ price }}</h1>
      <p class="font-bold text-sm text-teally py-2 uppercase hover:underline">
        I'm interested
      </p>
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
