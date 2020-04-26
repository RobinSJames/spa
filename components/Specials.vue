<template>
  <div
    v-if="specials"
    class="flex flex-col items-center bg-sale-red text-xs sm:text-sm leading-tight"
  >
    <div class="text-center text-white font-bold">
      {{ specials_heading }}
    </div>
    <div class="text-center text-white font-bold">
      {{ specials_subheading }}
    </div>
    <nuxt-link to="/shop">
      <button
        class="bg-red-800 hover:bg-white text-white font-bold hover:text-red-600 px-2 py-1 mt-2"
      >
        SHOP NOW
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Specials',
  data: () => ({
    specials: true,
    specials_heading: 'Join us for our Xmas Sale',
    specials_subheading:
      'Get 10% off all gift card purchases this season with us this Xmas'
  })
}
</script>

<style></style>
