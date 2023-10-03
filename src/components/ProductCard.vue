<script setup>
import { formatTitle } from '../helpers';

	const props = defineProps({
		product: Object,
    imgContainerWidth: String
	});
</script>

<template>
	<div class="w-full">
		<router-link :to="{ name: 'product', params: {id : product.id} }">
			<div :class="`img-container bg-grey p-6 ${imgContainerWidth} h-[72%] md:w-full`">
				<img
					:src="product.image"
					alt="product image"
					class="w-full h-full lg:w-[80%] mx-auto mix-blend-darken duration-500 object-contain"
				/>
			</div>
      <p class="pt-2 text-sm font-semibold w-full text-left">{{ formatTitle(product.title, 16) }}</p>
      <p class="text-sm font-light w-full text-left">
        &dollar;{{ product.price.toFixed(2) }}
      </p>
		</router-link>
	</div>
</template>
