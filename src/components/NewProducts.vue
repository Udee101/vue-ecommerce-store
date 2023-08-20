<script setup>
	import { onMounted, ref } from "vue";
	import { getProducts } from "../api/products";
	import HeaderText from "./HeaderText.vue";
	import ProductCard from "./ProductCard.vue";

	const products = ref([]);
	const limit = ref(4);
	onMounted(() => {
		getProducts(limit.value).then((res) => {
			products.value = res.data;
		});
	});
</script>

<template>
	<section class="w-full">
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
						/>
					</div>
				</div>

				<div>
					<router-link
						:to="{ name: 'home' }"
						class="text-white text-sm font-bold border border-primary bg-primary py-3 px-4 rounded-md duration-300 hover:bg-primary-100"
						>Shop All Products</router-link
					>
				</div>
			</div>
		</div>
	</section>
</template>
