<template>
  <section class="flex flex-col">
    <div class="flex flex-col items-center">
      <h3 class="text-5xl">Latest Blog Posts</h3>
      <div class="w-40 h-tiny bg-teally mb-10"></div>
    </div>
    <div class="flex">
      <div
        v-for="blogItem in blogItems"
        :key="blogItem.id"
        class="w-full md:w-1/3 px-1 cursor-pointer"
        @click="$router.push(`/blog/${blogItem.id}`)"
      >
        <div class="h-40">
          <img
            :src="blogItem.blogImage"
            alt=""
            class="h-full w-full object-left object-cover"
          />
        </div>
        <p class="text-medium-gray py-4">{{ blogItem.date }}</p>
        <h1 class="font-serif text-3xl">{{ blogItem.title }}</h1>
        <p class="text-medium-gray mt-2">{{ blogItem.body }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // blogImage: {
    //   type: String,
    //   default: '/images/branch.png'
    // },
    // title: {
    //   type: String,
    //   default: 'This is the title'
    // },
    // date: {
    //   type: String,
    //   default: '12/04/2020'
    // },
    // body: {
    //   type: String,
    //   default: 'This is a body of test that needs to be truncated.'
    // }
    blogItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
