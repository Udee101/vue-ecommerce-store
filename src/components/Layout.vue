<script setup>
import { computed } from 'vue';
import Footer from './global/Footer.vue';
import NavBar from './global/NavBar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isNoNavRoute = computed(() => {
  return [ "login", "register" ].includes(route.name)
})

</script>

<template>
  <div>
    <template v-if="!isNoNavRoute">
      <NavBar />
    </template>
    <main class="pt-4 pb-[30rem] md:pb-80 min-h-screen ">
      <slot />
    </main>
    <template v-if="!isNoNavRoute">
      <Footer />
    </template>
  </div>
</template>
