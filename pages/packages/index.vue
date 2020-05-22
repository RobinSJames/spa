<template>
  <div class="px-1/12 pt-1/12">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Packages</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <PackageList class="flex flex-wrap mt-1/12">
      <PackageItem
        v-for="object in objects"
        :key="object"
        :package-image="object.packageImage"
        :title="object.title"
        :body="object.body"
        :price="object.price"
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
  data: () => ({
    objects: [
      {
        id: 1,
        title: 'This is the heading',
        body:
          'This is a very short body but what if it were longer how would it look when rendered',
        price: 1100
      },
      {
        id: 2,
        title: 'This is the heading',
        body: 'This is a very short body',
        price: 1100
      },
      {
        id: 3,
        title: 'This is the heading',
        body: 'This is a very short body',
        price: 1100
      }
    ]
  })
}
</script>

<style></style>
