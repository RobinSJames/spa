<template>
  <div>
    <div v-if="type === 'text'">
      <label>{{ label }}</label>
      <input type="text" class="w-full border p-2" />
    </div>
    <div v-if="type === 'password'">
      <label>{{ label }}</label>
      <input type="password" class="w-full border p-2" />
    </div>
    <div v-if="type === 'text-area'">
      <label>{{ label }}</label>
      <input type="textarea" class="w-full border p-2" />
    </div>
    <div v-if="type === 'number'">
      <label>{{ label }}</label>
      <input type="number" :min="min" class="w-full border p-2" />
    </div>
    <div v-if="type === 'select'">
      <label>{{ label }}</label>
      <select type="select" class="w-full border p-2">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          >{{ option }}</option
        >
      </select>
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
    },
    options: {
      type: Array,
      default: () => ['This is an option']
    },
    min: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
