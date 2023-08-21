<script setup>
import HeaderText from '../components/HeaderText.vue';
import ProductCard from '../components/ProductCard.vue';
import { onMounted, ref } from "vue";
	import { getProducts } from "../api/products";

	const products = ref([]);
	// const limit = ref(20);
	onMounted(() => {
		getProducts().then((res) => {
			products.value = res.data;
		});
	});

</script>

<template>
  <section class="w-full mt-16">
    <div class="max-w-site mx-auto pb-32">
      <div class="space-y-4 w-full">
        <div class="pt-4">
          <HeaderText 
            :first-text="'All '"
            :second-text="'Products'"
          />
        </div>

        <div class="flex items-center space-x-5">
          <p>Filters:</p>
          <div class="text-sm">
            <div class="md:hidden">
              <select name="" id="" class="p-2">
                <option value="">Choose...</option>
                <option value="">electronics</option>
                <option value="">jewelery</option>
                <option value="">men's clothing</option>
                <option value="">women's clothing</option>
              </select>
            </div>
            
            <div class="md:flex gap-x-1 hidden">
              <button class="bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white">electronics</button>
              <button class="bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white">jewelery</button>
              <button class="bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white">men's clothing</button>
              <button class="bg-grey py-2 px-4 hover:bg-primary-100 hover:text-white">women's clothing</button>
            </div>
          </div>
        </div>

        <div class="pt-4 grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
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

<style scoped>
</style>
