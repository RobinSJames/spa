<template>
  <div>
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Blog</h3>
      <div class="w-40 h-tiny bg-teally mb-10"></div>
    </div>
    <BlogList>
      <BlogItem
        v-for="blog in blogs"
        :key="blog.id"
        :blog-image="blog.blogImage"
        :title="blog.title"
        :author="blog.author"
        :date="blog.date"
        :body="blog.body"
        @clicked="$router.push(`/blog/${blog.id}`)"
      />
    </BlogList>
  </div>
</template>

<script>
import BlogItem from '~/components/ BlogItem'
import BlogList from '~/components/BlogList'
export default {
  components: { BlogItem, BlogList },
  data: () => ({
    blogs: [
      {
        id: 1,
        blogImage: '/images/eye-plant.jpg',
        title: 'This is title number 1',
        author: 'Jack Doe',
        Date: '12/02/2020',
        body:
          'This is the body of the text. This should also be limited to a specific number of characters...'
      },
      {
        id: 2,
        blogImage: '/images/eye-plant.jpg',
        title: 'This is title number 2',
        author: 'Jane Doe',
        Date: '12/02/2020',
        body:
          'This is the body of the text. This should also be limited to a specific number of characters...'
      }
    ]
  }),
  methods: {}
}
</script>

<style></style>
