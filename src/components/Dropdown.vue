<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: String,
  tabs: Array,
  categories: Array,
})
const isdropDownOpen = ref(false)
</script>

<template>
	<div class="flex justify-center">
		<div class="relative inline-block">
			<button
				@click="isdropDownOpen = !isdropDownOpen"
				class="relative flex items-center p-2 text-sm bg-white border rounded-md"
			>
				<span class="mx-1 text-gray-500">{{ placeholder }}</span>
				<svg
					:class="[
						isdropDownOpen === true ? ' rotate-0' : ' -rotate-90',
						'w-5 h-5 mx-1',
					]"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
						fill="currentColor"
					></path>
				</svg>
			</button>

			<div
				v-if="isdropDownOpen"
				@click="isdropDownOpen = false"
				class="absolute z-[2] left-0 w-52 mt-2 overflow-hidden bg-white rounded-md shadow-x border"
			>
				<button
					v-for="(tab, index) in tabs"
					v-bind:key="index"
					@click="$emit('changeTab')"
					class="w-full px-4 py-3 text-sm capitalize duration-100 text-left focus:bg-primary-100 hover:text-white hover:bg-primary-100"
				>
					{{ categories[index] }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
