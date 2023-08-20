<script setup>
	const navLinks = [
		{
			name: "Home",
			link: "home",
		},
		{
			name: "Collections",
			link: "home",
		},
		{
			name: "Products",
			link: "home",
		},
	];

	const otherLinks = [
		{
			name: "About",
			link: "home",
		},
		{
			name: "Contact",
			link: "home",
		},
		{
			name: "FAQ",
			link: "home",
		},
	];
</script>

<template>
	<footer class="absolute bottom-0 w-full">
		<div class="max-w-[1200px] mx-auto p-4">
			<div
				class="grid space-y-8 items-center border-t border-black pt-6 md:grid-cols-4 md:gap-x-8"
			>
				<div class="md:col-span-2">
					<form action="" class="space-y-4">
						<h3 class="text-2xl font-bold">Sign up for our newsletter</h3>
						<p class="text-sm">
							Be the first to know about our special offers, news, and updates.
						</p>
						<div class="border border-black p-2 w-[85%] md:w-[80%]">
							<input
								class="w-[70%] focus:outline-none"
								type="email"
								placeholder="Email Address"
							/>
							<button class="border-l border-black w-[30%] text-sm font-bold">
								Sign Up
							</button>
						</div>
					</form>
				</div>

				<div>
					<ul>
						<li class="mb-2" v-for="(item, i) in navLinks" :key="i">
							<router-link
								class="text-sm text-gray-500 hover:text-black"
								:to="{ name: `${item.link}` }"
								>{{ item.name }}</router-link
							>
						</li>
					</ul>
				</div>

				<div>
					<ul>
						<li class="mb-2" v-for="(item, i) in otherLinks" :key="i">
							<router-link
								class="text-sm text-gray-600 hover:text-black"
								:to="{ name: `${item.link}` }"
								>{{ item.name }}</router-link
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="p-3 bg-black text-white text-sm text-center uppercase mt-12">
			Copyrights VE-Store.com. All Rights Reserved
		</div>
	</footer>
</template>

<style scoped></style>
