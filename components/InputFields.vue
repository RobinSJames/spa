<template>
  <div>
    <div v-if="type === 'text'">
      <label>{{ label }}</label>
      <input type="text" class="" />
    </div>
    <div v-if="type === 'password'">
      <label>{{ label }}</label>
      <input type="password" class="" />
    </div>
    <div v-if="type === 'text-area'">
      <label>{{ label }}</label>
      <input type="textarea" class="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style></style>
