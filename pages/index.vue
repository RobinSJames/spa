<template>
  <div class="flex flex-col w-full h-full">
    <div class="relative w-full h-100 lg:h-screen pt-20">
      <img
        src="../assets/images/image.jpg"
        class="w-full h-100 sm:h-120 md:h-160 absolute object-cover object-top md:object-center  top-0 left-0 z-0"
      />
      <div class="w-full absolute bottom-0 mb-2 pb-24 sm:pb-0 lg:pb-64">
        <div class="w-full h-full flex justify-around text-xs sm:text-lg">
          <button
            class="w-2/5 sm:w-1/3 md:w-2/6 lg:w-1/6 flex justify-center items-center border-2 border-dominant text-dominant font-bold bg-mrgray hover:bg-teally hover:border-teally hover:text-white hover:font-bold px-3 py-2 sm:px-4 rounded"
          >
            <span class="opacity-100">MAKE BOOKING</span>
          </button>
          <button
            class="w-2/5 sm:w-1/3 md:w-2/6 lg:w-1/6 flex justify-center items-center border-2 border-dominant text-dominant font-bold bg-mrgray hover:bg-teally hover:border-teally hover:text-white hover:font-bold px-3 py-2 sm:px-4 rounded"
          >
            VISIT STORE
          </button>
        </div>
      </div>
    </div>
    <div
      class="relative flex flex-col justify-center border-teally border-2 m-10 sm:mt-80 md:mt-80 lg:mt-10 p-10"
    >
      <h1 class="text-5xl text-center z-10">Heading 1</h1>
      <h5 class="text-xl text-center">Subheading</h5>
      <div class="w-full flex justify-center py-4">
        <div class="w-40 h-tiny bg-teally"></div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit,
        voluptatibus doloribus magnam doloremque voluptas. Nesciunt, nobis
        autem. At quo odit placeat voluptatem natus tenetur nihil magni
        consequuntur pariatur? Autem.
      </p>
      <img
        class="absolute top-0 right-0 w-64 -mt-20"
        src="/images/branch.png"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-center border-teally border-2 m-10 p-10">
      <h1 class="text-5xl text-center">Heading 1</h1>
      <h5 class="text-xl text-center">Subheading</h5>
      <div class="w-full flex justify-center py-4">
        <div class="w-40 h-tiny bg-teally"></div>
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit,
      voluptatibus doloribus magnam doloremque voluptas. Nesciunt, nobis autem.
      At quo odit placeat voluptatem natus tenetur nihil magni consequuntur
      pariatur? Autem.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-4 p-10">
      <div class="bg-black md:row-span-4">
        <img src="/images/branch.png" alt="" />
      </div>
      <div class="bg-teally md:row-span-2">
        <img src="/images/branch.png" alt="" />
      </div>
      <div class="bg-dominat md:row-span-2">
        <img src="/images/branch.png" alt="" />
      </div>
    </div>
    <div>
      <div>
        <img src="" alt="This is an image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
