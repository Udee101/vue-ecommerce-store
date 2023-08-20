<script setup>
	defineProps({
		product: Object,
	});
</script>

<template>
	<div class="py-3 md:w-[30%]">
		<router-link :to="{ name: 'home' }">
			<div class="img-container bg-grey p-6 w-44 h-[72%] md:w-full">
				<img
					:src="product.image"
					alt=""
					class="w-full h-full lg:w-[80%] mx-auto mix-blend-darken duration-500"
				/>
			</div>
			<p class="pt-2 font-semibold w-full text-left">{{ product.title }}</p>
			<p class="text-sm font-light w-full text-left">
				&dollar;{{ product.price }}
			</p>
		</router-link>
	</div>
</template>
