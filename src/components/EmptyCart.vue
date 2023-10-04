<script setup></script>

<template>
	<div
		class="rounded-md shadow-md border border-grey p-8 min-h-[15rem] flex items-center justify-center"
	>
		<div class="text-center">
			<i class="material-icons-outlined text-8xl text-primary">shopping_cart</i>
			<p>Your cart is empty!</p>
			<p>Discover our best deals!</p>
			<div class="mt-4">
				<router-link
					:to="{ name: 'products' }"
					class="bg-primary font-semibold text-white py-2 px-4 rounded-md hover:bg-primary-100 duration-200"
        >
          Start Shopping
        </router-link>
			</div>
		</div>
	</div>
</template>
