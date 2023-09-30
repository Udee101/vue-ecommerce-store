<script setup>
	import HeaderText from "../components/HeaderText.vue";
	import { computed, ref, shallowRef } from "vue";
	import { useProductStore } from "../stores/productStore";
	import Electronics from "../components/productFilters/Electronics.vue";
	import Jewelries from "../components/productFilters/Jewelries.vue";
	import MenClothes from "../components/productFilters/MenClothes.vue";
	import WomenClothes from "../components/productFilters/WomenClothes.vue";
	import AllAvailableProducts from "../components/productFilters/AllAvailableProducts.vue";
	import SiteButton from "../components/SiteButton.vue";
	import FilterButton from "../components/FilterButton.vue";

	const isdropDownOpen = ref(false);
	const isFilterOn = ref(false);
	const placeholder = ref("Filters");

	const productStore = useProductStore();
	productStore.fetchCategories();

	const categories = computed(() => {
		return productStore.categories;
	});

	const currentTab = shallowRef(AllAvailableProducts);
	const tabs = shallowRef([Electronics, Jewelries, MenClothes, WomenClothes]);
	const currentTabComponent = computed(() => {
		return currentTab.value;
	});
</script>

<template>
	<section class="w-full mt-16 p-4">
		<div class="max-w-site mx-auto pb-32">
			<div class="space-y-4 w-full">
				<HeaderText
					class="pt-4"
					:first-text="'All '"
					:second-text="'Products'"
				/>
				<div class="flex items-center gap-x-1">
					<p class="hidden md:block">Filters:</p>
					<div class="text-sm">
						<div class="md:hidden">
							<div class="flex justify-center">
								<div class="relative inline-block">
									<FilterButton
										:placeholder="placeholder"
										@toggle-dropdown="isdropDownOpen = !isdropDownOpen"
									/>
									<div
										v-if="isdropDownOpen"
										@click="isdropDownOpen = false"
										class="absolute z-[2] left-0 w-52 mt-2 overflow-hidden bg-white rounded-md shadow-x border"
									>
										<SiteButton
											v-for="(tab, index) in tabs"
											v-bind:key="index"
											@click-event="{currentTab = tab; isFilterOn = true}"
											class="w-full px-4 py-3 text-sm capitalize duration-100 text-left focus:bg-primary-100 hover:text-white hover:bg-primary-100"
											:title="categories[index]"
										/>
									</div>
								</div>
							</div>
						</div>

						<div class="md:flex ml-4 space-x-2 hidden">
							<SiteButton
								v-for="(tab, index) in tabs"
								v-bind:key="index"
								@click-event="{currentTab = tab; isFilterOn = true}"
								:class="[
									'bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white relative',
									{
										'before:absolute before:bg-primary-100 before:inset-0 before:':
											currentTab === tab,
									},
								]"
							>
								<p
									:class="[
										'relative z-[1]',
										{ 'text-white': currentTab === tab },
									]"
								>
									{{ categories[index] }}
								</p>
							</SiteButton>
						</div>
					</div>
					<template v-if="isFilterOn">
						<SiteButton
							@click="{currentTab = AllAvailableProducts; isFilterOn = false}"
							class="block text-white text-sm bg-secondary border border-secondary px-4 py-1 ml-4 rounded-3xl hover:opacity-80"
							>{{ 'Clear' }} &times;</SiteButton
						>
					</template>
				</div>
				<component v-bind:is="currentTabComponent"></component>
			</div>
		</div>
	</section>
</template>
