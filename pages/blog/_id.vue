<template>
  <section class="p-1/12">
    <h1 class="text-5xl text-center">{{ title }}</h1>
    <div class="text-center text-medium-gray tracking-eidest">
      {{ author }} | {{ date }}
    </div>
    <div>
      <div>
        <img :src="blogImage" alt="" />
      </div>
      <div>
        {{ body }}
      </div>
      <p
        class="text-teally text-center py-6 underline cursor-pointer"
        @click="$router.push('/shop')"
      >
        SHOP AMBIANCE
      </p>
    </div>
    <LatestBlog class="mt-10" :blog-items="latest" />
  </section>
</template>

<script>
import LatestBlog from '~/components/LatestBlog'
export default {
  components: { LatestBlog },
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
  })
}
</script>

<style></style>
