<script setup>
	import { ref } from "vue";
	import { img1, img2, img4 } from "../assets";

	const bannerImgs = [img1, img2, img4];
	const paginationBtn = "bg-grey p-4 rounded-full cursor-pointer hover:opacity-80 duration-200";
	
	const currentSlide = ref(0);
	const prevSlide = () => {
		currentSlide.value === 0 ? (currentSlide.value = 2) : currentSlide.value--;
	};
	const nextSlide = () => {
		currentSlide.value === 2 ? (currentSlide.value = 0) : currentSlide.value++;
	};
</script>

<template>
	<section>
		<div class="w-full h-auto overflow-hidden">
			<div class="w-screen h-[60vh] relative">
				<div
					:style="`transform: translateX(-${currentSlide * 100}vw)`"
					class="h-full flex w-[400vw] duration-[500ms]"
				>
					<img
						v-for="(imgSrc, index) in bannerImgs"
						:key="index"
						class="w-screen h-full object-cover"
						:src="imgSrc"
						alt="Banner image"
						loading="priority"
					/>
				</div>

				<div class="absolute h-[90%] top-0 flex items-center w-full">
					<div class="flex w-[95%] justify-between gap-2 mx-auto items-center">
						<i @click="prevSlide" :class="`material-icons-outlined ${paginationBtn}`">arrow_back_ios</i>

						<div class="bg-grey-100 w-64 h-56 flex flex-col justify-center items-center md:w-[35%]">
							<h1 class="font-bold text-6xl text-center text-secondary uppercase md:text-7xl lg:text-8xl">
								Sale
							</h1>
							<p class="uppercase font-bold md:text-lg lg:text-xl">Up to 50% off</p>
							<router-link :to="{name: 'products'}" class="bg-primary py-2 px-4 rounded-md text-white font-semibold mt-2 hover:bg-primary-100 duration-200">Shop Now</router-link>
						</div>

						<i @click="nextSlide" :class="`material-icons-outlined ${paginationBtn}`">arrow_forward_ios</i>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
