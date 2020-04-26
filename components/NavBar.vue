<template>
  <nav
    class="w-full flex items-center justify-between sm:justify-center flex-wrap px-3 bg-white sm:static border-gray-400 border-t sm:border-b sm:border-t-0"
  >
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <img src="../assets/images/spa2.jpg" alt="logo" class="w-20" />
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-2 py-2 border rounded-full hover:text-green-600 hover:border-green-600"
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
      class="w-full sm:flex sm:items-center sm:w-auto"
    >
      <div
        :class="open ? '' : 'w-1/2'"
        class="text-sm flex sm:flex-grow justify-between"
      >
        <nuxt-link to="/">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            HOME
          </p>
        </nuxt-link>
        <nuxt-link to="/about">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            ABOUT
          </p>
        </nuxt-link>
        <a
          class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
        >
          PACKAGES & TREATMENTS
        </a>
        <a
          class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
        >
          SPECIALS
        </a>
        <nuxt-link to="/shop">
          <p
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer testing"
          >
            SHOP
          </p>
        </nuxt-link>
        <div v-if="$auth.loggedIn">
          <a
            class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
          >
            LOGOUT
          </a>
        </div>
        <div v-else>
          <nuxt-link to="/login">
            <a
              class="no-underline block mt-4 sm:inline-block sm:mt-0 hover:text-green-600 mr-4 sm:mr-4 md:mr-6 lg:mr-8 cursor-pointer"
            >
              REGISTER/LOGIN
            </a>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    open: {
      type: Boolean,
      default: false
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
