<template>
  <div>
    ID booking page
    <div class="w-1/2">
      <InputFields v-model="date" type="date" class="" />
      <AppButton label="BOOK NOW" variant="teally" />
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import InputFields from '~/components/InputFields'
export default {
  components: { InputFields, AppButton },
  data: () => ({
    date: null
  })
}
</script>

<style></style>
