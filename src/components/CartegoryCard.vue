<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="px-2 py-3">
    <router-link :to="{name: 'home'}">
      <div class="img-container bg-[#F3F3F3] p-6 w-32 h-auto md:w-full">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="w-full h-full lg:w-[80%] mx-auto mix-blend-darken duration-500">
      </div>
      <p class="py-3 font-semibold">{{ title }}</p>
    </router-link>
  </div>
</template>

<style scoped>
.img-container:hover img {
  transform: scale(1.05);
}
</style>
