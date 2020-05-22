<template>
  <section
    class="bg-white w-full flex flex-col justify-center px-4 mt-1/12 border-t py-4"
  >
    <div
      class="flex flex-col text-sm text-medium-gray text-center tracking-widest uppercase"
    >
      <p class="py-2">My Account</p>
      <p class="py-2">FAQ</p>
      <p class="py-2">Contact</p>
    </div>
    <div class="mt-6 mb-10 w-full flex flex-col py-1 justify-center">
      <h3 class="font-serif text-center text-2xl my-2">Join our news letter</h3>
      <div class="flex justify-center">
        <InputFields
          class="w-8/12 md:w-4/12"
          type="text"
          placeholder="myemail@example.com"
        ></InputFields>
        <AppButton class="" variant="teally" label="SUBSCRIBE" />
      </div>
    </div>
    <div
      class="flex flex-col text-sm text-medium-gray text-center tracking-widest uppercase"
    >
      <p class="py-2">Tm ambiance spa</p>
      <p class="py-2">Terms</p>
      <p class="py-2">1978 De Beer Street, Kagiso, 2102</p>
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/AppButton'
import InputFields from '~/components/InputFields'
export default {
  components: { AppButton, InputFields }
}
</script>

<style></style>
