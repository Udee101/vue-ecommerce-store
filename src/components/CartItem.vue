<script setup>
import { computed } from 'vue';
import { formatTitle } from '../helpers'
import { useCartStore } from '../stores/cartStore';
import SiteButton from './SiteButton.vue';

const props = defineProps({
  product: Object
})

const cartStore = useCartStore();

const btnClass = "border px-3 hover:bg-black hover:text-white hover:border-black duration-200";

const increment = () => {
  props.product.quantity++;
};
const decrement = () => {
  props.product.quantity === 1 ? props.product.quantity = 1 : props.product.quantity--;
};
const totalPrice = computed(() => {
	return props.product.price * props.product.quantity
})
</script>

<template>
	<div class="inline-grid gap-4 md:grid-cols-2 py-4">
		<div class="grid grid-cols-2">
			<div class="w-32 h-32 p-2 bg-grey rounded-md">
				<img :src="product.image" alt="product image" class="mix-blend-darken w-full h-full object-contain" />
			</div>
			<div class="space-y-2">
				<p class="font-semibold">{{ formatTitle(product.title, 40) }}</p>
				<p class="text-gray-500 font-semibold">&dollar;{{ product.price }}</p>
			</div>
		</div>

		<div class="grid items-center grid-cols-2 md:grid-cols-1">
			<div class="inline-flex w-52 justify-self-end gap-8 items-center justify-evenly">
				<div class="inline-flex">
					<SiteButton @click-event="decrement()" title="-" :class="btnClass"></SiteButton>
					<span class="px-3">{{ product.quantity }}</span>
					<SiteButton @click-event="increment()" title="+" :class="btnClass"></SiteButton>
				</div>
				<p class="font-semibold">&dollar;{{ totalPrice.toFixed(2) }}</p>
			</div>
			<button
        @click="cartStore.removeFromCart(product)"
				class="bg-red-100 text-secondary text-sm flex items-center rounded-lg -order-1 place-self-start px-1 md:order-1 md:justify-self-end md:self-center hover:opacity-80"
			>
        <i class="material-icons-outlined text-base">delete</i>
				Remove
			</button>
		</div>
	</div>
</template>
