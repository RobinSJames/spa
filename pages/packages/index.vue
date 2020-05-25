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
        :id="object.id"
        :key="object.id"
        :package-image="object.packageImage"
        :title="object.title"
        :body="object.body"
        :price="object.price"
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
  data: () => ({
    objects: [
      {
        id: 1,
        title: 'The four musketeers',
        body:
          'Good things come in threes, so why not award yourself and three friends a breakfast buffet and our full treatment package.',
        price: 3300
      },
      {
        id: 2,
        title: 'Couples therapy',
        body:
          "We aren't certified therapists but we've yet to have a couple denounce our methods",
        price: 1500
      },
      {
        id: 3,
        title: 'Hands Solo',
        body:
          'It is said that solace can only be achieved alone and we simply offer a helping hand',
        price: 750
      }
    ]
  })
}
</script>

<style></style>
