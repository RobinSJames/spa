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
        @click="$router.push(`/blog/${blogItem._id}`)"
      >
        <div class="h-40">
          <img
            :src="'https://mockspa-api.herokuapp.com/' + blogItem.blogImage"
            alt=""
            class="h-full w-full object-left object-cover"
          />
        </div>
        <p class="text-medium-gray py-4">{{ blogItem.createdAt }}</p>
        <h1 class="font-serif text-3xl">{{ blogItem.title }}</h1>
        <p class="text-medium-gray mt-2">{{ createExcerpt(blogItem.body) }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blogItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    createExcerpt(w, x = 55, y = w.length, z = '...') {
      const text = w.split('')
      text.splice(x, y, z)
      return text.join('')
    }
  }
}
</script>

<style></style>
