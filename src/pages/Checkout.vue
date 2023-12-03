<script setup>
	import HeaderText from "../components/HeaderText.vue";
	import Paystack from "../components/Paystack.vue";
	import { checkoutSvg } from "../assets";
	import { ref, computed } from "vue";

	const props = defineProps({ amount: { type: String, required: true } });

	const checkoutForm = ref({
		first_name: "",
		last_name: "",
		phone: "",
		address: "",
		city: "",
		postal_code: "",
	});

	const reference = computed(() => {
		let text = "";
		let possible =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < 10; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	});
	const email = ref("example@email.com");
	const pk = ref("pk_test_eb066558607ca09c3022ea87d48e229de8f9b7d4");

	const paystackSubAccountCode = "";
	const paystackSplitCode = "";
	const processPayment = () => {
		window.alert("Payment recieved");
	};
	const close = () => {
		console.log("Payment closed");
		setTimeout(() => {
			window.location.reload()
		}, 2000)
	};
</script>

<template>
	<section class="w-full p-4">
		<div class="max-w-site mx-auto pb-32">
			<div class="mt-20">
				<HeaderText firstText="Check" secondText="Out" />
				<div class="flex w-full min-h-[15rem] items-center py-8">
					<div class="w-full grid md:grid-cols-2 gap-8 min-h-[50vh] items-center">
						<form action="" class="space-y-4">
							<h3 class="text-xl font-semibold">Shpping Information</h3>
							<div class="space-y-4">
								<div class="inline-grid grid-cols-2 gap-2 w-full">
									<input
										type="text"
										placeholder="First name"
										v-model="checkoutForm.first_name"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm text-gray-600"
									/>

									<input
										type="text"
										placeholder="Last name"
										v-model="checkoutForm.last_name"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm text-gray-600"
									/>
								</div>

								<div class="grid gap-1">
									<input
										type="text"
										placeholder="Phone number"
										v-model="checkoutForm.phone"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
									/>
								</div>

								<div class="grid gap-1">
									<input
										type="text"
										placeholder="Address"
										v-model="checkoutForm.address"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm"
									/>
								</div>

								<div class="inline-grid grid-cols-2 gap-2 w-full">
									<input
										type="text"
										placeholder="City"
										v-model="checkoutForm.city"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm text-gray-600"
									/>

									<input
										type="text"
										placeholder="Postal code"
										v-model="checkoutForm.postal_code"
										class="border border-gray-300 py-3 px-4 rounded-md focus:outline-blue-200 placeholder:text-sm text-gray-600"
									/>
								</div>
							</div>

							<Paystack
								:amount="parseInt(amount)"
								:email="email"
								:paystackkey="pk"
								:reference="reference"
								:callback="processPayment"
								:close="close"
								:subaccount="paystackSubAccountCode"
								:splitCode="paystackSplitCode"
								:channels="['card', 'bank']"
								:embed="false"
							>
							</Paystack>
						</form>

						<div class="hidden md:flex w-full items-center justify-center">
							<img
								:src="checkoutSvg"
								alt=""
								loading="lazy"
								class="w-[80%]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
