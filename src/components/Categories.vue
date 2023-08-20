<script setup>
	import { onMounted, ref } from "vue";
	import { getProductsCategories } from "../api/products";
	import CartegoryCard from "./CartegoryCard.vue";
	import HeaderText from "./HeaderText.vue";

	const categories = ref([]);
	onMounted(() => {
		getProductsCategories().then((res) => {
			categories.value = res.data;
		});
	});
</script>

<template>
	<section class="w-full">
		<div class="max-w-site mx-auto pt-10 pb-32">
			<div class="flex flex-col gap-y-8 place-items-center text-center">
				<HeaderText 
					:first-text="'Products '"
					:second-text="'Categories'"
				/>

				<p class="max-w-[600px]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					aspernatur modi facere provident quos. Distinctio quaerat.
				</p>

				<div class="overflow-x-auto w-full">
					<div class="flex justify-items-center gap-x-2">
						<CartegoryCard
							v-for="(item, index) in categories"
							:key="index"
							:title="item"
							class="px-2 py-3"
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
