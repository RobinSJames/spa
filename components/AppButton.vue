<template>
  <transition name="fadebutton">
    <component
      :is="tag"
      v-if="!loading"
      :to="to"
      :class="setVariant"
      class="appButton btn px-5 text-sm font-bold flex justify-center items-center cursor-pointer select-none"
      @click="disabled ? false : $emit('clicked')"
    >
      <!-- <div v-if="icon" class="appButton__icon mr-2 fill-current w-4">
        <slot name="icon">
          <Icon></Icon>
        </slot>
      </div> -->
      {{ label }}
    </component>
    <!-- <loading v-else></loading> -->
  </transition>
</template>

//
<script>
// import Icon from '~/assets/icons/info.svg'
// import Loading from '~/components/Loading'
export default {
  components: {
    // Icon,
    // Loading
  },
  props: {
    label: { type: String, required: true },
    // icon: {
    //   type: Boolean,
    //   default: false
    // },
    variant: {
      type: String,
      default: ''
    },
    to: {
      type: [Object, String],
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setVariant() {
      const className = {}
      const variant = this.disabled
        ? `bg-moss-green border border-moss-green text-white cursor-not-allowed`
        : `bg-${this.variant} text-white hover:bg-${this.variant}-hover`
      className[variant] = true
      return className
    },
    tag() {
      return this.to ? 'nuxt-link' : 'div'
    }
  }
}
</script>

<style scoped lang="scss">
.appButton {
  // border-radius: 3px;
  height: 42px;
  .appButton__icon > svg {
    width: 15px;
    height: 15px;
  }
}
</style>
<style>
.fadebutton-enter-active,
.fadebutton-leave-active {
  transition: opacity 0.5s;
  transform: translateX(-10px);
}
.fadebutton-enter,
.fadebutton-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
