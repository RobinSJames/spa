<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="p-1/12 border">
      <div class="flex flex-col md:flex-row py-2">
        <label class="text-medium-gray w-24">email</label>
        <input v-model="email" type="text" class="border-b border-teally" />
      </div>
      <div class="flex flex-col md:flex-row py-2">
        <label class="text-medium-gray w-24">password</label>
        <input
          v-model="password"
          type="password"
          class="border-b border-teally"
        />
      </div>
      <!-- <button @click="loginUser">submit</button> -->
      <AppButton
        label="LOGIN"
        variant="teally"
        class="mt-4"
        @clicked="loginUser"
      />
      <div class="flex justify-between text-sm pt-1/12">
        <nuxt-link to="/passwordreset"><p>Forgot password?</p></nuxt-link>
        <nuxt-link to="/signup"><p>Sign up</p></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
export default {
  components: { AppButton },
  layout: 'authform',
  data: () => ({
    email: 'admin@admin.com',
    password: 'admin123456'
  }),
  methods: {
    loginUser() {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
    }
  }
}
</script>

<style></style>
