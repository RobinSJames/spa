<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="">
      <label>email</label>
      <input v-model="email" type="text" class="border" />
    </div>
    <div>
      <label>password</label>
      <input v-model="password" type="password" class="border" />
    </div>
    <button @click="registerUser">submit</button>
  </div>
</template>

<script>
export default {
  layout: 'authform',
  methods: {}
}
</script>

<style></style>
