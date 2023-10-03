<script setup>
	import { computed } from "vue";
	import CartegoryCard from "./CartegoryCard.vue";
	import HeaderText from "./HeaderText.vue";
	import { useProductStore } from "../stores/productStore";

	const productStore = useProductStore()

	productStore.fetchCategories()

	const categories = computed(() => {
		return productStore.categories
	})

	const imgs = [
		'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
		'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
		'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
		'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'
	]
</script>

<template>
	<section class="w-full p-4">
		<div class="max-w-site mx-auto pt-10 pb-32">
			<div class="flex flex-col place-items-center text-center">
				<HeaderText 
					:first-text="'Products '"
					:second-text="'Categories'"
					class="mb-8"
				/>

				<p class="max-w-[600px] mb-8">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					aspernatur modi facere provident quos. Distinctio quaerat.
				</p>

				<div class="overflow-x-auto w-full my-2">
					<div class="flex gap-x-6">
						<CartegoryCard
							v-for="(item, index) in categories"
							:key="index"
							:title="item"
							:image="imgs[index]"
						/>
					</div>
				</div>

				<div class="mt-4">
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
