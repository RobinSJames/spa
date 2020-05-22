<template>
  <section class="p-1/12">
    <h1 class="text-5xl text-center">{{ post.title }}</h1>
    <div class="text-center text-medium-gray tracking-eidest">
      {{ post.author }} | {{ post.createdAt }}
    </div>
    <div>
      <div>
        <img
          :src="'https://mockspa-api.herokuapp.com/' + post.blogImage"
          alt=""
        />
      </div>
      <div class="text-medium-gray py-6 leading-loose">
        {{ post.body }}
      </div>
      <p
        class="text-teally text-center py-6 underline cursor-pointer"
        @click="$router.push('/shop')"
      >
        SHOP AMBIANCE
      </p>
    </div>
    <LatestBlog class="mt-10" :blog-items="posts" />
  </section>
</template>

<script>
import LatestBlog from '~/components/LatestBlog'
export default {
  components: { LatestBlog },
  async fetch({ store, params }) {
    await store.dispatch('posts/fetchItem', { id: params.id })
    await store.dispatch('posts/fetchItems')
  },
  data: () => ({
    title: 'This is the title',
    author: 'Jane Doe',
    date: '12/04/2020',
    blogImage: '/images/branch.png',
    body:
      'This is the body of the blog post. It is also expected to be very long. This is a just a Lorem dummy text.',
    latest: [
      {
        id: 1,
        title: 'This is title 1',
        blogImage: '/images/branch.png',
        date: '12/04/2020',
        body: 'This is the body of the latest post.'
      },
      {
        id: 2,
        title: 'This is title 1',
        blogImage: '/images/eye-plant.jpg',
        date: '12/04/2020',
        body: 'This is the body of the latest post.'
      },
      {
        id: 3,
        title: 'This is title 1',
        blogImage: '/images/branch.png',
        date: '12/04/2020',
        body: 'This is the body of the latest post.'
      }
    ]
  }),
  computed: {
    post() {
      return this.$store.state.posts.single
    },
    posts() {
      return this.$store.state.posts.all
    }
  }
}
</script>

<style></style>
