<script setup>
import { computed, ref } from 'vue';
import { logoText } from '../../assets';
import { useCartStore } from '../../stores/cartStore'
import { useUserStore } from '../../stores/userStore'
import SiteButton from '../SiteButton.vue';
import Logout from '../popups/Logout.vue'

const cartStore = useCartStore();
const numberOfItems = computed(() => {
  return cartStore.getCartItemsCount;
})

const isdropDownOpen = ref(false)
const showLogoutPopUp = ref(false)

const userStore = useUserStore();
const getBtnTitle = computed(() => {
  return userStore.isLoggedIn === true ? userStore.userFirstName : 'Account'
});
// const logOut = () => {
//   userStore.signOut
//   showLogoutPopUp.value = false
// } 
</script>

<template>
  <Logout 
    v-if="showLogoutPopUp"
    @close="showLogoutPopUp = false"
    @action="userStore.signOut"
    action="Sign out"
    question="Are you sure you want to Sign Out"
  />

  <header class="p-4 h-20 w-full border border-b-black bg-white fixed top-0 z-[2]">
    <div class="max-w-[1200px] mx-auto h-full flex items-center justify-between">
      <div class="w-32">
        <router-link :to="{name: 'home'}">
          <img :src="logoText" alt="vue ecommerce logo" class=" border border-black p-1">
        </router-link>
      </div>

      <div class="flex space-x-4 items-center">
        <div class="relative">
          <SiteButton
            :title="getBtnTitle"
            @click-event="isdropDownOpen = !isdropDownOpen"
            class="border rounded-3xl flex items-center p-1 gap-1 bg-grey hover:opacity-80"
          > 
            <img v-if="userStore.isLoggedIn" :src="userStore.user.image" alt="" class="w-6 h-6 rounded-full -order-1">
            <i v-else class="material-icons-outlined -order-1">account_circle</i>
            <i class="material-icons-outlined">{{ isdropDownOpen ? 'expand_less' : 'expand_more' }}</i>
          </SiteButton>

          <div
            v-if="isdropDownOpen"
            @click="isdropDownOpen = false"
            class="absolute z-[1] right-0 w-44 mt-2 p-2 overflow-hidden bg-white rounded-md border"
          >
            <SiteButton
              v-if="userStore.isLoggedIn"
              @click-event="showLogoutPopUp = true"
              class="w-full px-4 py-3 text-sm duration-100 text-left rounded-md hover:text-white hover:bg-primary"
              title="Sign Out"
            />
            <div v-else class="p-2 divide-y w-full flex flex-col">
              <router-link :to="{name: 'register'}" class="w-full duration-200 p-2 hover:bg-primary hover:text-white rounded-md">Sign Up</router-link>
             <router-link :to="{name: 'login'}" class="w-full duration-200 p-2 hover:bg-primary hover:text-white rounded-md">Login</router-link>
            </div>
          </div>
        </div>

        <router-link :to="{name: 'cart'}" class="relative cursor-pointer hover:opacity-75 duration-200">
          <i class="material-icons-outlined">shopping_cart</i>
          <p class="absolute flex items-center justify-center left-3 -top-1 text-xs text-center bg-red-400 rounded-full min-w-[0.75rem] min-h-[0.75rem]"><span class="text-white">{{ numberOfItems }}</span></p>
        </router-link>
      </div>
    </div>
  </header>
</template>
