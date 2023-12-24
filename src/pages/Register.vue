<script setup>
	import { googleIcon } from "../assets";
	import SiteButton from "../components/SiteButton.vue";
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

	const handleGoogleLogin = () => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				const user = res.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<template>
	<div class="max-w-site mx-auto pb-32">
		<div
			class="mt-20 flex flex-col gap-6 w-full min-h-[15rem] items-center justify-center px-4 py-8"
		>
			<div class="w-full max-w-lg">
				<form action="" class="space-y-8">
					<h3 class="text-3xl font-semibold text-center">Create an account</h3>
					<div class="space-y-4">
						<div class="grid gap-1">
							<label for="" class="">Full Name</label>
							<input
								type="text"
								placeholder="Enter your full name"
								class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
							/>
						</div>

            <div class="grid gap-1">
							<label for="" class="">Email</label>
							<input
								type="email"
								placeholder="Enter email"
								class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
							/>
						</div>

						<div class="grid gap-1">
							<label for="" class="">Password</label>
							<input
								type="password"
								placeholder="Enter your password"
								class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
							/>
						</div>
					</div>
            
          <button class="my-4 p-4 w-full rounded-md bg-primary text-white font-bold duration-200 hover:bg-primary-100">Create account</button>
				</form>

        <SiteButton
          @click-event="handleGoogleLogin"
          title="Continue with Google"
          class="flex gap-2 py-3 px-4 my-6 font-semibold border border-gray-300 items-center rounded-md duration-200 hover:bg-grey mx-auto w-full justify-center"
        >
          <img :src="googleIcon" alt="google icon" class="-order-1" />
        </SiteButton>

        <p class="text-center text-gray-500">Already have an account ? <router-link :to="{name: 'login'}" class="text-primary-100">Login</router-link></p>

				<p class="text-center"> <router-link :to="{name: 'home'}" class="text-primary-100 underline">Back Home</router-link></p>
			</div>
		</div>
	</div>
</template>
