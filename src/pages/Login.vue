<script setup>
	import { googleIcon } from "../assets";
	import SiteButton from "../components/SiteButton.vue";
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { useUserStore } from '../stores/userStore'
	import { useRoute, useRouter } from "vue-router";

  const userStore = useUserStore();
	const router = useRouter();
	const route = useRoute();
	const handleGoogleLogin = () => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				const user = res.user;
				const userStoreData = {
          id: user.uid,
          full_name: user.displayName,
          email: user.email,
          image: user.photoURL
        }
        userStore.addUser(userStoreData)

				localStorage.setItem("user", JSON.stringify(userStoreData))
				localStorage.setItem("user_token", JSON.stringify(user.accessToken))
				localStorage.setItem("token_creation_time", Date.now())

				if (route.query.nextUrl !== null) {
					router.push(route.query.nextUrl)
				} else {
					router.push({ name: 'products' })
				}
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
					<h3 class="text-3xl font-semibold text-center">Login to your account</h3>
					<div class="space-y-4">
						<div class="grid gap-1">
							<label for="" class="text-gray-600">Email</label>
							<input
								type="email"
								placeholder="Enter email"
								class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm text-gray-600"
							/>
						</div>

						<div class="grid gap-1">
							<label for="" class="text-gray-600">Password</label>
							<input
								type="password"
								placeholder="Enter your password"
								class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
							/>
						</div>
					</div>
            
          <button class="my-4 p-4 w-full rounded-md bg-primary text-white font-bold duration-200 hover:bg-primary-100">Login</button>
				</form>

        <SiteButton
          @click-event="handleGoogleLogin"
          title="Continue with Google"
          class="flex gap-2 py-3 px-4 my-6 font-semibold border border-gray-300 items-center rounded-md duration-200 hover:bg-grey mx-auto w-full justify-center"
        >
          <img :src="googleIcon" alt="google icon" class="-order-1" />
        </SiteButton>

        <p class="text-center text-gray-400">Don't have an account ? <router-link :to="{name: 'register'}" class="text-primary-100">Sign Up</router-link></p>
			</div>
		</div>
	</div>
</template>
