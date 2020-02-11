<template>
  <div class="w-full h-full absolute top-0 left-0 h-20 bg-white z-50">
    <div class="w-full h-screen flex flex-col items-stretch">
      <div class="flex justify-between items-center">
        <img src="../assets/images/spa2.jpg" alt="logo" class="w-16" />
        <p
          @click="toggle"
          class="w-12 h-full text-5xl hover:text-green-600 cursor-pointer"
        >
          &times;
        </p>
      </div>
      <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">HOME</span>
      </div>
      <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">SERVICES</span>
      </div>
      <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">PRODUCTS</span>
      </div>
      <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">SPECIALS</span>
      </div>
      <!-- <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">SHOP</span>
      </div> -->
      <div
        class="flex flex-1 relative items-center border border-b pl-8 text-black font-semibold hover:text-gray-900 cursor-pointer"
      >
        <div class="absolute left-0 w-1/6 h-3 mt-3 mx-8 bg-teally"></div>
        <div class="absolute bottom-0 w-full h-1 mb-6 mx-10 bg-black"></div>
        <span class="z-10">GIFT CARDS</span>
      </div>
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
