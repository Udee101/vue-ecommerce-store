<script setup>
const props = defineProps({ subTotal: Number })
</script>

<template>
	<div class="p-4 rounded-md shadow-md border border-grey">
		<h3 class="text-xl font-semibold mb-5">Order Summary</h3>
		<div class="flex justify-between items-center mb-2">
			<p>Subtotal</p>
			<p class="font-semibold text-lg">&dollar;{{ subTotal.toFixed(2) }}</p>
		</div>
    <p class="text-sm text-gray-500 mb-1">Delivery fees not included yet</p>
		<button
			class="uppercase w-full rounded-md bg-primary text-white p-2 font-semibold hover:bg-primary-100"
		>
			Checkout
		</button>
	</div>
</template>
