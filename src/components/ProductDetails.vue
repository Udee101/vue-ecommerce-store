<script setup>
	import { computed } from "vue";

	const props = defineProps({ 
		product: Object
	 });

	const showSize = computed(() => {
		return props.product.category === "men's clothing" || props.product.category === "women's clothing"
	})
	const getRating = computed(() => {
		return props.product.rating?.rate < '2.5' ? 'star_half' : 'star' 
	})
</script>

<template>
	<div class=" w-full mx-auto flex justify-center items-center bg-grey rounded-lg">
		<div class="md:w-72 p-4">
			<img
				:src="product.image"
				alt="product image"
				class="mix-blend-darken mx-auto duration-500 w-[80%] md:w-full"
			/>
		</div>
	</div>
	<div class="space-y-4">
		<div class="space-y-4">
			<h3 class="text-2xl font-semibold">{{ product.title }}</h3>
			<p class="font-semibold text-secondary text-lg">&dollar;{{ product.price }}</p>
			<p class="text-sm">{{ product.description }}</p>
		</div>

		<div class="rating text-sm flex items-center">
			<p><i class="material-icons text-yellow-300">{{ getRating }}</i></p>
			<p class="text-gray-500">{{ product.rating?.rate }}</p>
			<p class="text-yellow-600 bg-yellow-100 py-1 px-2 rounded-md ml-2">{{ product.rating?.count }} verified ratings</p> 
		</div>

		<div v-if="showSize" class="space-y-1">
			<p class="text-sm text-gray-500">Size</p>
			<ul class="flex">
				<li class="border py-1 px-3">S</li>
				<li class="border py-1 px-3">M</li>
				<li class="border py-1 px-3">L</li>
			</ul>
		</div>

		<button
			class="p-3 w-full bg-primary rounded-lg duration-300 text-white text-center font-semibold hover:bg-primary-100"
		>
			Add to Cart
		</button>
	</div>
</template>
