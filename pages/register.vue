<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="p-1/12 border rounded">
      <ValidationObserver v-slot="{ invalid }">
        <ValidationProvider v-slot="{ errors }" name="name" rules="required">
          <div class="relative flex flex-col py-2">
            <div class="relative flex flex-col md:flex-row py-2">
              <label class="text-medium-gray w-24">name</label>
              <input
                v-model="name"
                type="text"
                class="border-b"
                :class="errors.length > 0 ? 'border-sale-red' : 'border-teally'"
              />
            </div>
            <span class="w-full text-xs text-sale-red text-right">{{
              errors[0]
            }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <div class="relative flex flex-col py-2">
            <div class="relative flex flex-col md:flex-row py-2">
              <label class="text-medium-gray w-24">email</label>
              <input
                v-model="email"
                type="text"
                class="border-b"
                :class="errors.length > 0 ? 'border-sale-red' : 'border-teally'"
              />
            </div>
            <span class="w-full text-xs text-sale-red text-right">{{
              errors[0]
            }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required|min:8"
        >
          <div class="flex flex-col py-2">
            <div class="flex flex-col md:flex-row py-2">
              <label class="text-medium-gray w-24">password</label>
              <input
                v-model="password"
                type="password"
                class="border-b"
                :class="errors.length > 0 ? 'border-sale-red' : 'border-teally'"
              />
            </div>
            <span class="w-full text-xs text-sale-red text-right">{{
              errors[0]
            }}</span>
          </div>
        </ValidationProvider>
        <AppButton
          label="SIGN UP"
          variant="teally"
          class="mt-4"
          :disabled="invalid ? true : false"
        />
      </ValidationObserver>
      <div class="flex justify-between text-sm pt-1/12">
        <p>Privacy policy</p>
        <p>
          Already have an account?
          <nuxt-link to="/login"
            ><span class="hover:text-teally">Login</span></nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AppButton from '~/components/AppButton'
export default {
  components: { AppButton, ValidationObserver, ValidationProvider },
  layout: 'authform',
  data: () => ({
    name: '',
    email: '',
    password: ''
  }),
  methods: {}
}
</script>

<style></style>
