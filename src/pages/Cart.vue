<script setup>
	import { computed } from "vue";
	import { useCartStore } from "../stores/cartStore";
	import CartItem from "../components/CartItem.vue";
	import CartTotal from "../components/CartTotal.vue";
	import EmptyCart from "../components/EmptyCart.vue";
import HeaderText from "../components/HeaderText.vue";

	const cartStore = useCartStore();
	const cartItems = computed(() => {
		return cartStore.cart;
	});

	const subTotal = computed(() => {
		let price = 0;
		cartStore.cart.map((item) => (price += item.price * item.quantity));
		return price;
	});
	const cartIsEmpty = computed(() => {
		return cartStore.cart.length === 0;
	});
</script>

<template>
	<section class="w-full p-4">
		<div class="max-w-site mx-auto pb-32">
			<div class="mt-20">
				<template v-if="!cartIsEmpty">
					<HeaderText 
						firstText="Your "
						secondText="cart"
					/>
					<p>
						Not ready to checkout?
						<router-link
							:to="{ name: 'products' }"
							class="underline text-primary-100"
							>Continue Shopping</router-link
						>
					</p>
					<div class="grid lg:grid-cols-3 gap-6 mt-6">
						<div
							class="grid p-4 divide-y rounded-md shadow-md border border-grey lg:col-span-2"
						>
							<CartItem
								v-for="(item, index) in cartItems"
								:key="index"
								:product="item"
							/>
						</div>

						<div class="-order-1 lg:order-1">
							<CartTotal :subTotal="subTotal" />
						</div>
					</div>
				</template>

				<template v-if="cartIsEmpty">
					<EmptyCart />
				</template>
			</div>
		</div>
	</section>
</template>
