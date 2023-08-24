<script setup>
	import { computed } from "vue";
	import { useProductStore } from "../../stores/productStore";
	import ProductCard from "../ProductCard.vue";

	const productStore = useProductStore();
	productStore.fetchProducts();

	const products = computed(() => {
		return productStore.getElectronics;
	});
</script>

<template>
	<div
		class="pt-4 grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4"
	>
		<ProductCard v-for="item in products" :key="item.id" :product="item" />
	</div>
</template>

<style scoped></style>
