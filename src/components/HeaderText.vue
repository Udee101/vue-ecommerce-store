<script setup>
  defineProps({
    firstText: String,
    secondText: String,
  })
</script>

<template>
  <header class="text-2xl mt-6">
    <h2 class="font-bold text-primary uppercase"><span class="text-secondary">{{ firstText }} </span>{{ secondText }}</h2>
  </header>
</template>
