<script setup>
import { computed } from 'vue';

	const props = defineProps({
		title: String,
		image: String,
	});

	const correctTitle = computed(() => {
		return props.title === "jewelery" ? "jewelry" : props.title
	})
</script>

<template>
	<div class="w-full">
		<div class="bg-grey p-6 w-44 h-[72%] md:w-full">
			<img
				:src="image"
				alt="category image"
				class="w-full h-full mx-auto mix-blend-darken duration-500 object-contain lg:w-[80%]"
			/>
		</div>
		<p class="pt-3 font-semibold capitalize">{{ correctTitle }}</p>
	</div>
</template>
