<template>
  <div class="group w-full h-full md:w-1/2 rounded-lg">
    <div class="h-half overflow-hidden rounded-tr-lg rounded-tl-lg">
      <img
        :src="'https://mockspa-api.herokuapp.com/' + packageImage"
        alt=""
        class="transform group-hover:scale-150 transition duration-1000 ease-in-out h-full w-full object-fit object-cover"
      />
    </div>
    <div
      class="p-1/12 text-center rounded-br-lg rounded-bl-lg"
      :class="background === 'teally' ? 'bg-mrgray' : 'bg-lightest-green'"
    >
      <h1 class="font-serif text-3xl py-2 leading-tight capitalize">
        {{ title }}
      </h1>
      <p class="text-sm text-medium-gray">{{ body }}</p>
      <h1 class="font-serif text-2xl font-bold pt-6">R {{ price }}</h1>
      <p
        class="font-bold text-sm text-teally py-2 uppercase hover:underline cursor-pointer"
        @click="$router.push(`/packages/${id}`)"
      >
        I'm interested
      </p>
      <AppButton
        label="MAKE BOOKING"
        variant="teally"
        class="my-2"
        :to="
          packages === true
            ? `/packages/${id}/booking`
            : `/treatments/${id}/booking`
        "
      />
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
export default {
  components: { AppButton },
  props: {
    packageImage: {
      type: String,
      default: '/images/eye-plant.jpg'
    },
    title: {
      type: String,
      default: 'This is the title'
    },
    body: {
      type: String,
      default: 'This is the body of the package item.'
    },
    price: {
      type: Number,
      default: 0
    },
    id: {
      type: [String, Number],
      default: '1'
    },
    background: {
      type: String,
      default: 'teally'
    },
    package: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style></style>
