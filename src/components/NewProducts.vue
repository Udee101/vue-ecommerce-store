<script setup>
	import { computed } from "vue";
	import HeaderText from "./HeaderText.vue";
	import ProductCard from "./ProductCard.vue";
	import { useProductStore } from "../stores/productStore";

	const productStore = useProductStore()
	productStore.fetchProducts()
	
	const products = computed(() => {
		return productStore.getNewProducts;
	})
</script>

<template>
	<section class="w-full p-4">
		<div class="max-w-site mx-auto pb-32">
			<div class="flex flex-col gap-y-8 place-items-center text-center">
				<HeaderText
					:first-text="'New '"
					:second-text="'Products'"
				/>

				<div class="overflow-x-auto w-full my-2">
					<div class="flex justify-items-center gap-x-6">
						<ProductCard
							v-for="item in products"
							:key="item.id"
							:product="item"
              :img-container-width="'w-44'"
						/>
					</div>
				</div>

				<div>
					<router-link
						:to="{ name: 'products' }"
						class="text-white text-sm font-bold border border-primary bg-primary py-3 px-4 rounded-md duration-300 hover:bg-primary-100"
						>Shop All Products</router-link
					>
				</div>
			</div>
		</div>
	</section>
</template>
