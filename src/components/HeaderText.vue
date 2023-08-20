<script setup>
  defineProps({
    firstText: String,
    secondText: String,
    headerClass: String
  })
</script>

<template>
  <header :class="headerClass">
    <h2 class="font-bold text-primary uppercase"><span class="text-secondary">{{ firstText }} </span>{{ secondText }}</h2>
  </header>
</template>

<style scoped>
</style>
