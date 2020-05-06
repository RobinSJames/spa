<template>
  <div class="w-full h-full fixed top-0 left-0 h-20 bg-white z-50">
    <div class="w-full h-screen flex flex-col items-stretch">
      <div class="flex justify-between items-center">
        <nuxt-link to="/">
          <img
            src="../assets/images/spa2.jpg"
            alt="logo"
            class="w-16"
            @click="toggle"
          />
        </nuxt-link>
        <p
          class="w-12 h-full text-5xl hover:text-green-600 cursor-pointer"
          @click="toggle"
        >
          &times;
        </p>
      </div>
      <nuxt-link
        to="/blog"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/6 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">BLOG</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/packages"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/4 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">PACKAGES</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/treatments"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/4 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">TREATMENTS</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/specials"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/5 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">SPECIALS</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/shop"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/6 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">SHOP</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/login"
        class="relative flex flex-1 items-center border border-b pl-8"
      >
        <div
          class="w-full h-full text-black font-semibold hover:text-gray-900 cursor-pointer"
          @click="toggle"
        >
          <div class="absolute left-0 h-full w-full">
            <div class="flex flex-col h-full pl-8 justify-center">
              <div class="w-1/6 h-3 pt-3 bg-teally"></div>
              <span class="z-10 -mt-6">LOGIN</span>
            </div>
          </div>
          <div class="absolute bottom-0 w-1/2 h-1 mb-6 mx-10 bg-black"></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarToggle',
  methods: {
    toggle() {
      this.$emit('notOpen')
    }
  }
}
</script>

<style></style>
