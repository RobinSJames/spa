<template>
  <nav
    class="w-full flex items-center justify-around md:justify-center flex-wrap px-3 bg-white sm:static border-gray-400 border-t border-b sm:border-t-0"
  >
    <nuxt-link to="/cart" class="outline-none">
      <div class="relative md:hidden">
        <CartIcon class="w-8 h-10" />
        <CartCounter
          class="absolute bottom-0 right-0"
          :counter="cartContents"
        />
      </div>
    </nuxt-link>
    <nuxt-link to="/" class="outline-none">
      <div
        class="w-full flex items-center justify-center flex-no-shrink text-black mr-6"
      >
        <img src="../assets/images/spa2.jpg" alt="logo" class="w-24" />
      </div>
    </nuxt-link>
    <div class="block md:hidden">
      <button
        class="flex items-center px-2 py-2 border rounded-full hover:text-green-600 hover:border-green-600"
        @click="toggle"
      >
        <svg
          class="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'hidden' : 'hidden'"
      class="w-full md:flex md:items-center md:w-auto"
    >
      <div
        :class="open ? '' : 'w-1/2'"
        class="text-xs flex sm:flex-grow justify-between"
      >
        <nuxt-link to="/blog" class="flex items-center outline-none">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            BLOG
          </p>
        </nuxt-link>
        <nuxt-link to="/packages" class="flex items-center outline-none">
          <a
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            PACKAGES
          </a>
        </nuxt-link>
        <nuxt-link to="/treatments" class="flex items-center outline-none">
          <a
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            TREATMENTS
          </a>
        </nuxt-link>
        <nuxt-link to="/specials" class="flex items-center outline-none">
          <a
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            SPECIALS
          </a>
        </nuxt-link>
        <nuxt-link to="/shop" class="flex items-center outline-none">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer testing"
          >
            SHOP
          </p>
        </nuxt-link>
        <nuxt-link v-if="$auth.loggedIn">
          <a
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer outline-none"
          >
            LOGOUT
          </a>
        </nuxt-link>
        <nuxt-link v-else to="/login" class="flex items-center">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer outline-none"
          >
            LOGIN
          </p>
        </nuxt-link>
        <nuxt-link to="/cart" class="flex items-center">
          <div class="relative">
            <CartIcon class="w-8 h-10" />
            <CartCounter
              :counter="cartContents"
              class="absolute bottom-0 right-0"
            />
          </div>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from '../assets/icons/shopping-cart-outline.svg'
import CartCounter from '~/components/CartCounter'
export default {
  name: 'NavBar',
  components: { CartIcon, CartCounter },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    cartContents: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggle() {
      this.$emit('isOpen')
    }
  }
}
</script>

<style>
ul {
  color: #060707;
}
</style>
