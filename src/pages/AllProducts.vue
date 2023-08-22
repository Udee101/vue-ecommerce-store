<script setup>
	import HeaderText from "../components/HeaderText.vue";
	import ProductCard from "../components/ProductCard.vue";
	import { computed, ref } from "vue";
	import { useProductStore } from "../stores/productStore";

	const productStore = useProductStore();

	productStore.fetchProducts();
	productStore.fetchCategories();

	const products = computed(() => {
		return productStore.products;
	});
	const categories = computed(() => {
		return productStore.categories;
	});

	const isdropDownOpen = ref(false);
</script>

<template>
	<section class="w-full mt-16">
		<div class="max-w-site mx-auto pb-32">
			<div class="space-y-4 w-full">
				<HeaderText
					class="pt-4"
					:first-text="'All '"
					:second-text="'Products'"
				/>

				<div class="flex items-center space-x-5">
					<p>Filters:</p>
					<div class="text-sm">
						<div class="md:hidden">
							<div class="flex justify-center">
								<div class="relative inline-block">
									<!-- Dropdown toggle button -->
									<button
										@click="isdropDownOpen = !isdropDownOpen"
										class="relative flex items-center p-2 text-sm bg-white border rounded-md"
									>
										<span class="mx-1 text-gray-500">choose....</span>
										<svg
											:class="[
												isdropDownOpen === true ? ' rotate-0' : ' -rotate-90',
												'w-5 h-5 mx-1',
											]"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
												fill="currentColor"
											></path>
										</svg>
									</button>

									<!-- Dropdown menu -->
									<div
										v-if="isdropDownOpen"
										class="absolute z-[2] left-0 w-52 mt-2 overflow-hidden bg-white rounded-md shadow-x border"
									>
										<button
											v-for="(category, index) in categories"
											:key="index"
											class="w-full px-4 py-3 text-sm capitalize duration-100 text-left hover:text-white hover:bg-primary-100"
										>
											{{ category }}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div class="md:flex gap-x-1 hidden">
							<button
								v-for="(category, index) in categories"
								:key="index"
								class="bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white"
							>
								{{ category }}
							</button>
						</div>
					</div>
				</div>

				<div
					class="pt-4 grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4"
				>
					<ProductCard
						v-for="item in products"
						:key="item.id"
						:product="item"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
