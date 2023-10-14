import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";


export const useCartStore = defineStore('cartStore', () => {
  const cart = ref([])

  if (localStorage.getItem("cart")) {
    cart.value = JSON.parse(localStorage.getItem("cart"))
  }
  watch(
    cart, (cartVal) => {
      localStorage.setItem("cart", JSON.stringify(cartVal))
    }, { deep: true }
  )

  const getCartItemsCount = computed(() => {
    return cart.value.length
  })

  const addToCart = (payload) => {
    const itemIsInCart = cart.value.find((item) => payload.id === item.id )
    if (itemIsInCart) {
      itemIsInCart.quantity += payload.quantity;
    } else {
      cart.value.push(payload)
    }
  }
  const removeFromCart = (product) => {
    cart.value = cart.value.filter((item) => item.id != product.id)
  }
  const emptyCart = () => {
    cart.value = []
  }

  return {
    cart,
    getCartItemsCount,
    addToCart,
    removeFromCart,
    emptyCart
  }
})
