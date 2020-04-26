<template>
  <div>
    <div>
      <label>email</label>
      <input v-model="email" type="text" class="border" />
    </div>
    <div>
      <label>password</label>
      <input v-model="password" type="password" class="border" />
    </div>
    <button @click="loginUser">submit</button>
  </div>
</template>

<script>
export default {
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
