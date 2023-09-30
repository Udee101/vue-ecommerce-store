<script setup>
import Footer from './global/Footer.vue';
import NavBar from './global/NavBar.vue';

</script>

<template>
  <div>
    <NavBar />
    <main class="pt-4 pb-[30rem] md:pb-80 min-h-screen ">
      <slot />
    </main>
    <Footer />
  </div>
</template>
