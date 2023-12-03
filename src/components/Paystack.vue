<template>
	<button
		v-if="!embed && !isLoading"
		class="uppercase w-full rounded-md bg-primary text-white p-2 font-semibold hover:bg-primary-100"
		@click="payWithPaystack"
	>
		Pay &#8358;{{ convertAmountFromKoboToNaira }}
	</button>
	<div v-else id="paystackEmbedContainer" />

  <div 
    v-if="isLoading" 
    class="w-full p-2 flex justify-center"
  >
    <Loader
      class="text-3xl text-primary-100"
    ></Loader>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import Loader from './Loader.vue';
  
  const props = defineProps({
    embed: {
      type: Boolean,
      default: false,
    },
    paystackkey: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    channels: {
      type: Array,
      default: function () {
        return ["card", "bank"];
      },
    },
    accessCode: {
      type: String,
      default: "",
    },
    callback: {
      type: Function,
      required: true,
      default: function (response) {},
    },
    close: {
      type: Function,
      required: true,
      default: function () {},
    },
    metadata: {
      type: Object,
      default: function () {
        return {};
      },
    },
    currency: {
      type: String,
      default: "NGN",
    },
    plan: {
      type: String,
      default: "",
    },
    quantity: {
      type: String,
      default: "",
    },
    subaccount: {
      type: String,
      default: "",
    },
    split: {
      type: Object,
      default: function () {
        return {};
      },
    },
    splitCode: {
      type: String,
      default: "",
    },
    transactionCharge: {
      type: Number,
      default: 0,
    },
    bearer: {
      type: String,
      default: "",
    },
  })
  
  const convertAmountFromKoboToNaira = computed(() => {
    return Intl.NumberFormat().format(props.amount / 100);
  })

  const loadScript = (callback) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    if (script.readyState) {
      // IE
      script.onreadystatechange = () => {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Others
      script.onload = () => {
        callback();
      };
    }
  }
  
  const isDynamicSplit = () => {
    return (
      props.split.constructor === Object && Object.keys(props.split).length > 0
    );
  }
  
  const scriptLoaded = ref(null)
  onMounted(() => {
    scriptLoaded.value = new Promise((resolve) => {
      loadScript(() => {
        resolve();
      });
    });

    if (props.embed) {
      payWithPaystack();
    }
  })
	
  const isLoading = ref(false)
  const payWithPaystack = () => {
    isLoading.value = true;
    scriptLoaded.value && scriptLoaded.value.then(() => {
      const paystackOptions = {
        key: props.paystackkey,
        email: props.email,
        firstname: props.firstname,
        lastname: props.lastname,
        channels: props.channels,
        amount: props.amount,
        access_code: props.accessCode,
        ref: props.reference,
        callback: (response) => {
          props.callback(response);
        },
        onClose: () => {
          props.close();
        },
        metadata: props.metadata,
        currency: props.currency,
        plan: props.plan,
        quantity: props.quantity,
        subaccount: isDynamicSplit() ? "" : props.subaccount,
        split: isDynamicSplit() ? props.split : props.null,
        split_code: isDynamicSplit() ? "" : props.splitCode,
        transaction_charge: isDynamicSplit() ? 0 : props.transactionCharge,
        bearer: isDynamicSplit() ? "" : props.bearer,
      };

      if (props.embed) {
        paystackOptions.container = "paystackEmbedContainer";
      }

      const handler = window.PaystackPop.setup(paystackOptions);
      if (!props.embed) {
        handler.openIframe();
      }
    });
  }
</script>
