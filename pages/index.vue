<template>
  <div class="flex flex-col w-full h-full">
    <div class="relative w-full h-120 lg:h-screen">
      <img
        src="/images/spaimage.jpeg"
        class="w-full h-full absolute object-cover object-top md:object-center top-0 left-0 z-0"
      />
      <div class="w-full h-full bg-black opacity-50"></div>
      <div class="w-full absolute top-0 mt-10">
        <h3
          class="text-xl md:text-3xl xl:text-4xl text-white p-1/12 font-medium leading-loose"
        >
          Recharge your senses.<br />
          <span class="tracking-widest">With the right</span>
          <span class="font-bold text-teally uppercase tracking-widest">
            ambiance </span
          >.
        </h3>
      </div>
      <div class="w-full absolute bottom-0 mb-2 pb-10 sm:pb-20 lg:pb-40">
        <div
          class="w-full h-full flex flex-col sm:flex-row items-center sm:justify-around text-xs sm:text-lg px-1/12 sm:px-0"
        >
          <AppButton
            to="/packages"
            label="MAKE BOOKING"
            variant="teally"
            class="w-full sm:w-1/4 lg:w-56 mb-8 sm:mb-0"
          />
          <AppButton
            to="/shop"
            label="VISIT STORE"
            variant="teally"
            class="w-full sm:w-1/4 lg:w-56"
          />
        </div>
      </div>
    </div>
    <div
      class="relative flex flex-col justify-center border-teally border-2 m-1/12 mt-20 sm:mt-24 lg:mt-20 md:mx-1/6 lg:mx-1/5 p-1/12"
    >
      <h1 class="text-5xl text-center z-10">Heading 1</h1>
      <h5 class="text-xl text-center">Subheading</h5>
      <div class="w-full flex justify-center py-4">
        <div class="w-40 h-tiny bg-teally"></div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit,
        voluptatibus doloribus magnam doloremque voluptas. Nesciunt, nobis
        autem. At quo odit placeat voluptatem natus tenetur nihil magni
        consequuntur pariatur? Autem.
      </p>
      <img
        class="absolute top-0 right-0 w-64 -mt-20"
        src="/images/branch.png"
        alt
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-4 px-1/12 md:px-1/6 lg:px-1/5"
    >
      <div
        class="relative bg-black row-span-2 md:row-span-4 cursor-pointer"
        @click="$router.push('/shop')"
      >
        <img
          src="/images/eye-plant.jpg"
          alt
          class="absolute object-cover h-full w-full"
        />
        <div class="absolute bottom-0 w-full text-white px-2">
          <p class="tracking-widest">SHOP</p>
          <h3 class="text-3xl font-bold">Find what you're looking for</h3>
        </div>
      </div>
      <div
        class="relative bg-teally md:row-span-2 cursor-pointer"
        @click="$router.push('/blog')"
      >
        <img
          src="/images/fruit.jpg"
          alt
          class="absolute object-cover h-full w-full cursor-pointer"
        />
        <div class="absolute bottom-0 w-full text-white px-2">
          <p class="tracking-widest">BLOG</p>
          <h3 class="text-3xl font-bold">
            Trade secrets, exposed for the greater good
          </h3>
        </div>
      </div>
      <div
        class="relative bg-dominat md:row-span-2 h-64 cursor-pointer"
        @click="$router.push('/treatments')"
      >
        <img
          src="/images/woman-yoga.jpg"
          alt
          class="absolute object-cover object-top h-full w-full"
        />
        <div class="absolute bottom-0 w-full text-white px-2">
          <p class="tracking-widest">TREATMENTS</p>
          <h3 class="text-3xl font-bold">Let us help you embrace peace</h3>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center border-teally border-2 m-1/12 sm:mt-24 lg:mt-20 md:mx-1/6 lg:mx-1/5 p-1/12"
    >
      <h1 class="text-5xl text-center">Heading 1</h1>
      <h5 class="text-xl text-center">Subheading</h5>
      <div class="w-full flex justify-center py-4">
        <div class="w-40 h-tiny bg-teally"></div>
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit,
      voluptatibus doloribus magnam doloremque voluptas. Nesciunt, nobis autem.
      At quo odit placeat voluptatem natus tenetur nihil magni consequuntur
      pariatur? Autem.
    </div>
    <div>
      <div class="relative my-10 text-white h-screen">
        <img
          src="/images/nutrition.jpg"
          alt="This is an image"
          class="object-cover object-top h-full w-full"
        />
        <div
          class="absolute inset-y-0 w-full h-full py-10 md:py-20 px-1/12 pr-1/6 md:pr-4/12"
        >
          <h4 class="text-4xl md:mb-10">This is the title</h4>
          <div class="w-40 h-tiny bg-teally mb-10"></div>
          <p class="leading-loose mb-8 md:mb-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quo
            cum aliquam. Provident, impedit minima. Soluta et molestiae
            corporis! Quasi aliquid ipsa ab tempore, expedita qui eum minima
            facere quo.
          </p>
          <AppButton
            to="/shop"
            label="VISIT STORE"
            variant="teally"
            class="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        </div>
      </div>
    </div>
    <!-- {{ products }} -->
    <CustomerFavourites
      :orders="favourites"
      :products="products"
      class="px-1/12 sm:px-1/6 md:px-1/12 lg:px-1/6"
    />
  </div>
</template>

<script>
import CustomerFavourites from '~/components/CustomerFavourites'
import AppButton from '~/components/AppButton'
export default {
  components: { CustomerFavourites, AppButton },
  async fetch({ store }) {
    await store.dispatch('orders/fetchFavourites')
    await store.dispatch('products/fetchItems')
  },
  data: () => ({}),
  computed: {
    // user() {
    //   return this.$store.user.state.all
    // },
    favourites() {
      return this.$store.state.orders.favourites
    },
    products() {
      return this.$store.state.products.all
    }
  },
  mounted() {
    this.getUser()
    // console.log(this.$auth)
  },
  methods: {
    getUser() {
      if (this.$auth) {
        // console.log(this.$auth)
      } else {
        // console.log('Not logged in')
      }
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
