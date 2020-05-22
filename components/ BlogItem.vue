<template>
  <div class="mt-1/12">
    <div class="h-half overflow-y-hidden rounded-tl-lg rounded-tr-lg">
      <img
        :src="blogImage"
        alt=""
        class="h-full w-full object-right md:object-center object-cover"
      />
    </div>
    <div
      class="flex flex-col md:flex-row border border-t-0 rounded-bl-lg rounded-br-lg py-2 px-3"
    >
      <div
        class="w-full md:w-1/2 flex flex-col justify-between mb-4 md:mb-0 md:pr-4"
      >
        <h3 class="font-serif text-4xl leading-tight">
          {{ title }}
        </h3>
        <p class="text-medium-gray tracking-widest font-thin">
          {{ author }} | {{ date }}
        </p>
      </div>
      <div class="flex flex-col w-full md:w-1/2">
        <p class="mb-6">
          {{ body }}
        </p>
        <AppButton
          variant="teally"
          label="READ MORE"
          class="w-1/2 rounded-md"
          @clicked="$emit('clicked')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
export default {
  components: { AppButton },
  props: {
    blogImage: {
      type: String,
      default: '/images/branch.png'
    },
    title: {
      type: String,
      default: 'Heading to make sure that things are working'
    },
    author: {
      type: String,
      default: 'Author'
    },
    date: {
      type: String,
      default: 'Date'
    },
    body: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dicta distinctio cumque eius sapiente asperiores architecto eligendi quaerat similique quidem. Accusantium provident adipisci numquam molestias illum a molestiae eaque error!'
    }
  }
}
</script>

<style></style>
