<template>
  <div class="px-1/12 md:px-1/6 lg:px-1/4 pt-1/12 md:pt-16">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Treatments</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <PackageList class="flex flex-wrap mt-1/12">
      <PackageItem
        v-for="object in treatments"
        :id="object._id"
        :key="object._id"
        :package-image="object.treatmentImage"
        :title="object.title"
        :body="object.excerpt"
        :price="object.cost"
        class="md:pr-4 lg:pr-8 md:mb-8 lg:mb-10"
      />
    </PackageList>
  </div>
</template>

<script>
import PackageItem from '~/components/PackageItem'
import PackageList from '~/components/PackageList'
export default {
  components: { PackageItem, PackageList },
  async fetch({ store }) {
    await store.dispatch('treatments/fetchItems')
  },
  computed: {
    treatments() {
      return this.$store.state.treatments.all
    }
  }
}
</script>

<style></style>
