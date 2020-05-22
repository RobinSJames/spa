<template>
  <div class="px-1/12 pt-1/12">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Blog</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <BlogList>
      <BlogItem
        v-for="blog in posts"
        :key="blog._id"
        :blog-image="'https://mockspa-api.herokuapp.com/' + blog.blogImage"
        :title="blog.title"
        :author="blog.author"
        :date="blog.date"
        :body="blog.body"
        @clicked="$router.push(`/blog/${blog._id}`)"
      />
    </BlogList>
  </div>
</template>

<script>
import BlogItem from '~/components/ BlogItem'
import BlogList from '~/components/BlogList'
export default {
  components: { BlogItem, BlogList },
  async fetch({ store }) {
    await store.dispatch('posts/fetchItems')
  },
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
  computed: {
    posts() {
      return this.$store.state.posts.all
    }
  },
  methods: {}
}
</script>

<style></style>
