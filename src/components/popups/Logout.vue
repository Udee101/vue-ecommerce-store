<script setup>
  import SiteButton from '../SiteButton.vue';

  const props = defineProps({ 
    action: String, 
    question: String 
  })
  const emits = defineEmits(['action', 'close'])
</script>

<template>
  <div class="w-full h-[100vh] fixed z-[3] bg-[#b8b7b7c0]">
    <div class="w-full h-[85vh] flex justify-center items-center p-4">
      <div class="relative flex flex-col gap-4 z-[4] w-full max-w-md min-h-[25%] justify-center items-center bg-white rounded-md shadow-md p-4">
        <p class="text-xl">{{ question }} ?</p>
        <div class="flex gap-4">
          <SiteButton @click-event="$emit('action')" :title="action" class="py-2 px-4 rounded-3xl bg-green-600 text-white capitalize hover:bg-green-500" />

          <SiteButton @click-event="$emit('close')" title="Cancel" class="py-2 px-4 rounded-3xl bg-secondary text-white hover:bg-secondary-100" />
        </div>
      </div>
    </div>
  </div>
</template>
