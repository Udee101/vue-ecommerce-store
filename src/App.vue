<script setup>
import Home from './pages/Home.vue';
import NavBar from './components/global/NavBar.vue';
import Footer from './components/global/Footer.vue';

</script>

<template>
  <NavBar />
  <main class="p-4">
    <RouterView></RouterView>
  </main>
  <Footer />
</template>

<style scoped>
</style>
