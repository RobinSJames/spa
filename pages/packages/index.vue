<template>
  <div class="px-1/12 md:px-1/6 lg:px-1/4 pt-1/12 md:pt-16">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Packages</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <PackageList class="flex flex-wrap mt-1/12">
      <PackageItem
        v-for="object in packages"
        :id="object._id"
        :key="object._id"
        :package-image="object.packageImage"
        :title="object.title"
        :body="object.excerpt"
        :price="object.cost"
        class="md:pr-4 lg:pr-8 md:mb-8 lg:mb-10"
        background="lightest-green"
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
    await store.dispatch('packages/fetchItems')
  },
  computed: {
    packages() {
      return this.$store.state.packages.all
    }
  }
}
</script>

<style></style>
