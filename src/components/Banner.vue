<script setup>
	import { ref } from "vue";
	import { img1, img2, img4 } from "../assets";

	const bannerImgs = [img1, img2, img4];
	const paginationBtn =
		"border border-slate-50 p-1 h-10 w-16 bg-slate-50 cursor-pointer text-gray-600 text-lg flex place-content-center rounded-md duration-[0.3s] hover:opacity-75 ";

	const currentSlide = ref(0);

	const prevSlide = () => {
		currentSlide.value === 0 ? 2 : currentSlide.value--;
	};
	const nextSlide = () => {
		currentSlide.value === 2 ? 0 : currentSlide.value++;
	};
</script>

<template>
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

			<div
				class="absolute -left-3 w-full h-[90%] top-0 flex items-center justify-center"
			>
				<div
					class="bg-slate-50 opacity-70 w-64 h-56 flex justify-center items-center rounded-md"
				>
					<h1 class="font-bold text-3xl text-center text-[#3A408C]">
						We are <br />
						<span class="text-[#E2342D] text-6xl">Open!</span>
					</h1>
				</div>
			</div>

			<div class="absolute bottom-5 -left-3 flex w-full justify-center">
				<div class="flex space-x-12 items-center">
					<div
						@click="prevSlide"
						:class="[
							paginationBtn,
							currentSlide === 0
								? 'pointer-events-none cursor-not-allowed bg-transparent text-slate-50'
								: '',
						]"
					>
						&larr;
					</div>
					<div
						@click="nextSlide"
						:class="[
							paginationBtn,
							currentSlide === 2
								? 'pointer-events-none cursor-not-allowed bg-transparent text-slate-50'
								: '',
						]"
					>
						&rarr;
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
