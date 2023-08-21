<script setup>
import { computed } from 'vue';

	const props = defineProps({
		product: Object,
    imgContainerWidth: String
	});

  const formatTitle = computed(() => {
    let text = props.product.title.slice(0, 16)
    return `${text}...`
  })
</script>

<template>
	<div class="w-full">
		<router-link :to="{ name: 'home' }">
			<div :class="`img-container bg-grey p-6 ${imgContainerWidth} h-[72%] md:w-full`">
				<img
					:src="product.image"
					alt=""
					class="w-full h-full lg:w-[80%] mx-auto mix-blend-darken duration-500"
				/>
			</div>
      <p class="pt-2 text-sm font-semibold w-full text-left">{{ formatTitle }}</p>
      <p class="text-sm font-light w-full text-left">
        &dollar;{{ product.price }}
      </p>
		</router-link>
	</div>
</template>
