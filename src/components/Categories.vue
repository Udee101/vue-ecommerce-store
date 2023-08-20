<script setup></script>

<template>
	<section class="w-full">
		<div class="max-w-[1200px] mx-auto pt-10 pb-32">
			<div class="flex flex-col gap-y-8 place-items-center text-center">
				<header class="max-w-[16rem] mt-6 text-2xl">
					<h2 class="bg-black text-white py-2 px-4">Product Categories</h2>
				</header>

				<p class="max-w-[600px]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					aspernatur modi facere provident quos. Distinctio quaerat.
				</p>

        <div>
          <div class="grid grid-cols-2 gap-5 justify-items-center lg:grid-cols-4">
            <div class="md:w-[80%] lg:w-full px-2 py-3">
              <div class="img-container w-full h-[90%] bg-[#F3F3F3] p-6">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="w-full h-full mx-auto mix-blend-darken duration-500">
              </div>
              <p class="py-3 font-semibold">Electronics</p>
            </div>

            <div class="md:w-[80%] lg:w-full px-2 py-3">
              <div class="img-container w-full h-[90%] bg-[#F3F3F3] p-6">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="w-full h-full mx-auto mix-blend-darken duration-500">
              </div>
              <p class="py-3 font-semibold">Electronics</p>
            </div>

            <div class="md:w-[80%] lg:w-full px-2 py-3">
              <div class="img-container w-full h-[90%] bg-[#F3F3F3] p-6">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="w-full h-full mx-auto mix-blend-darken duration-500">
              </div>
              <p class="py-3 font-semibold">Electronics</p>
            </div>

            <div class="md:w-[80%] lg:w-full px-2 py-3">
              <div class="img-container w-full h-[90%] bg-[#F3F3F3] p-6">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="w-full h-full mx-auto mix-blend-darken duration-500">
              </div>
              <p class="py-3 font-semibold">Electronics</p>
            </div>
            
          </div>
        </div>

				<div>
					<router-link
						:to="{ name: 'home' }"
						class="text-primary border border-primary p-2 duration-300 hover:bg-primary hover:text-white"
						>Shop All Products</router-link
					>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.img-container:hover img {
  transform: scale(1.05);
}
</style>
