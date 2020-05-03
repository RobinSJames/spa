<template>
  <div>
    <div v-if="type === 'select'">
      <label class="tracking-widest">{{ label }}</label>
      <select type="select" class="w-full border p-2">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          >{{ option }}</option
        >
      </select>
    </div>
    <div v-else>
      <label class="tracking-widest">{{ label }}</label>
      <input :type="type" class="w-full border p-2" />
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
    },
    max: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style></style>
