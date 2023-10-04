import { defineStore } from "pinia";


export const useCartStore = defineStore('cartStore', {
  state: () => {
    if (localStorage.getItem("cartStore")) {
      return JSON.parse(localStorage.getItem("cartStore")) 
    }
    return {
      cart: []
    }
  },

  getters: {
    getCartItemsCount(state){
      return state.cart.length
    }
  },

  actions: {
    addToCart(payload){
      const itemIsInCart = this.cart.find((item) => payload.id === item.id )
      if (itemIsInCart) {
        itemIsInCart.quantity += payload.quantity;
      } else {
        this.cart.push(payload)
      }
    },
    removeFromCart(product){
      this.cart = this.cart.filter((item) => item.id != product.id)
    },
    emptyCart(){
      this.cart = []
    }
  }
})
