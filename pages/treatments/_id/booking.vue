<template>
  <div>
    ID booking page
    <div class="w-1/2">
      <InputFields v-model="date" type="date" class="" rounded />
      <AppButton label="ADD TO CART" variant="teally" class="rounded-lg" />
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
