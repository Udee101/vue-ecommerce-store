<script setup>
	import { computed, ref } from "vue";
	import { useCartStore } from "../stores/cartStore";

	const props = defineProps({
		product: Object,
	});

	const showSize = computed(() => {
		return (
			props.product.category === "men's clothing" ||
			props.product.category === "women's clothing"
		);
	});
	const getRating = computed(() => {
		return props.product.rating?.rate < "2.5" ? "star_half" : "star";
	});

	const baseQty = ref(1);
	const increment = () => {
		baseQty.value++;
	};
	const decrement = () => {
		baseQty.value === 1 ? baseQty.value : baseQty.value--;
	};

	const btnClass = "border px-3 hover:bg-black hover:text-white hover:border-black duration-200";

	const cartStore = useCartStore();
	const addToCart = (payload) => {
		cartStore.addToCart(payload);
		baseQty.value = 1;
	};
</script>

<template>
	<div
		class="w-full mx-auto flex justify-center items-center bg-grey rounded-md"
	>
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
			<p class="font-semibold text-secondary text-lg">
				&dollar;{{ product.price }}
			</p>
			<p class="text-sm">{{ product.description }}</p>
		</div>

		<div class="rating text-sm flex items-center">
			<p>
				<i class="material-icons text-yellow-300">{{ getRating }}</i>
			</p>
			<p class="text-gray-500">{{ product.rating?.rate }}</p>
			<p class="text-yellow-600 bg-yellow-100 py-1 px-2 rounded-md ml-2">
				{{ product.rating?.count }} verified ratings
			</p>
		</div>

		<div
			v-if="showSize"
			class="flex items-center justify-between border border-grey p-1 gap-1 w-40"
		>
			<p class="text-sm text-gray-500">Size</p>
			<div class="inline-flex">
				<button :class="btnClass">S</button>
				<button :class="btnClass">M</button>
				<button :class="btnClass">L</button>
			</div>
		</div>

		<div class="flex justify-between gap-2 w-full">
			<div
				class="flex items-center justify-between border border-grey p-1 gap-1"
			>
				<p class="text-sm text-gray-500">Quantity</p>
				<div class="inline-flex">
					<button @click="decrement" :class="btnClass">-</button>
					<span class="px-3">{{ baseQty }}</span>
					<button @click="increment" :class="btnClass">+</button>
				</div>
			</div>
			<button
				@click="addToCart({
					id: product.id,
					title: product.title,
					image: product.image,
					price: product.price.toFixed(2),
					size: product.size,
					quantity: baseQty,
					description: product.description
				})"
				class="w-full text-sm bg-primary duration-200 text-white text-center font-bold hover:bg-primary-100 py-2 rounded-md"
			>
				Add to Cart
			</button>
		</div>
	</div>
</template>
