<script setup>
const props = defineProps({
  title: String,
})
const emits = defineEmits(['clickEvent'])
</script>

<template>
  <button
    @click="$emit('clickEvent')"
  >
    {{ title }}
    <slot />
  </button>
</template>

<style scoped>
</style>
