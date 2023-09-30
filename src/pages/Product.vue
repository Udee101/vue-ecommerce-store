<script setup>
	import { computed, onMounted, ref } from "vue";
	import { getOneProduct } from "../api/products";
	import { useRoute } from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";

	const route = useRoute();
	const product = ref({});
	onMounted(() => {
		getOneProduct(route.params.id).then((res) => {
      product.value = res.data;
			console.log(product.value);
		});
	});

</script>

<template>
	<section class="w-full p-4">
		<div class="max-w-site mx-auto pb-32">
			<div class="grid w-full mt-20 gap-8 md:grid-cols-2 py-10 px-4 shadow-md border-grey border">
				<ProductDetails :product="product" />
			</div>
		</div>
	</section>
</template>
