<script setup>
	defineProps({
		title: String,
	});
</script>

<template>
	<div class="py-3 md:w-[30%]">
		<router-link :to="{ name: 'home' }">
			<div class="img-container bg-grey p-6 w-44 h-auto md:w-full">
				<img
					src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
					alt=""
					class="w-full h-full lg:w-[80%] mx-auto mix-blend-darken duration-500"
				/>
			</div>
			<p class="py-3 font-semibold capitalize">{{ title }}</p>
		</router-link>
	</div>
</template>
