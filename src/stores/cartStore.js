import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { toast } from "vue3-toastify";


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
      toast.warn("Item already added to cart")
    } else {
      cart.value.push(payload)
      toast.success("Item added to cart")
    }
  }
  const removeFromCart = (product) => {
    cart.value = cart.value.filter((item) => item.id != product.id)
    toast.success("Item removed from cart")
  }
  const emptyCart = () => {
    cart.value = []
    toast.info("Your cart is now empty")
  }

  return {
    cart,
    getCartItemsCount,
    addToCart,
    removeFromCart,
    emptyCart
  }
})
