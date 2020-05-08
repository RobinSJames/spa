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
      <label v-if="label !== 'Label'" class="tracking-widest">{{
        label
      }}</label>
      <input
        v-model="inputValue"
        :type="type"
        class="w-full border p-2"
        :min="min"
        :max="max"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String, Object, Array, Date],
      default: ''
    },
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
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style></style>
