<template>
  <div class="font-sans">
    <specials />
    <nav-bar
      :open="open"
      :cart-contents="local.length"
      class="z-40"
      @isOpen="toggleNav"
    />
    <nav-bar-toggle v-if="open" class="md:hidden" @notOpen="toggleNav" />
    <div v-if="loading" class="logo-container">
      <logo class="w-40 h-40" />
    </div>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Specials from '@/components/Specials'
import NavBar from '@/components/NavBar'
import NavBarToggle from '@/components/NavBarToggle'
import Logo from '@/components/icons/Logo'
import Footer from '~/components/Footer'
export default {
  components: {
    Specials,
    NavBar,
    NavBarToggle,
    Logo,
    Footer
  },
  data: () => ({
    loading: false,
    windowWidth: null,
    open: false
  }),
  computed: {
    local() {
      return this.$store.state.orders.local
    }
  },
  methods: {
    toggleNav() {
      this.open = !this.open
      if (this.open === true) this.disableScrolling()
      else this.enableScrolling()
    },
    disableScrolling() {
      const x = window.scrollX
      const y = window.scrollY
      window.onscroll = function() {
        window.scrollTo(x, y)
      }
    },
    enableScrolling() {
      window.onscroll = function() {}
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  color: #060707;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.logo-container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 7;
}
</style>
