<template>
  <div>
    <div v-if="type === 'select'">
      <label class="tracking-widest">{{ label }}</label>
      <select type="select" class="w-full border p-2" :class="inputClass">
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          >{{ option }}</option
        >
      </select>
    </div>
    <div v-else-if="type === 'textarea'">
      <label v-if="label" class="tracking-widest">{{ label }}</label>
      <textarea
        v-model="inputValue"
        :placeholder="placeholder"
        :cols="cols"
        :rows="rows"
        class="w-full p-2"
        :class="inputClass"
      ></textarea>
    </div>
    <div v-else-if="type === 'date'">
      <label v-if="label" class="tracking-widest">{{ label }}</label>
      <FlatPickr
        :config="config"
        class="w-full border p-2"
        :class="rounded ? 'rounded-lg' : ''"
      />
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
        :placeholder="placeholder"
        :class="inputClass"
      />
    </div>
  </div>
</template>

<script>
import FlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
  components: { FlatPickr },
  props: {
    inputClass: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String, Object, Array, Date],
      default: ''
    },
    label: {
      type: String,
      default: ''
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
    },
    placeholder: {
      type: String,
      default: 'This is a placeholder'
    },
    cols: {
      type: Number,
      default: 10
    },
    rows: {
      type: Number,
      default: 5
    },
    rounded: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {
        return {
          altFormat: 'j M, Y',
          altInput: true,
          dateFormat: 'd-m-Y',
          minDate: 'today'
        }
      }
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
