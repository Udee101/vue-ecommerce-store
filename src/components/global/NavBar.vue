<script setup>
import { logoText, cart } from '../../assets';
</script>

<template>
  <header class="p-4 h-20 w-full border border-b-black bg-white fixed top-0">
    <div class="max-w-[1200px] mx-auto h-full flex items-center justify-between">
      <div class="w-32">
        <router-link :to="{name: 'home'}">
          <img :src="logoText" alt="vue ecommerce logo" class=" border border-black p-1">
        </router-link>
      </div>

      <div class="flex space-x-10 items-center">
        <ul class="flex space-x-10 font-bold">
          <li>Blog</li>
          <li>Login</li>
        </ul>

        <div class="relative cursor-pointer">
          <img :src="cart" alt="cart icon" class="w-6">
          <span class="absolute flex items-center justify-center left-3 -top-1 text-xs text-center bg-slate-400 rounded-full min-w-[0.75rem] min-h-[0.75rem]">0</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
