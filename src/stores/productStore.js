import { defineStore } from "pinia";
import { getProducts, getProductsCategories } from "../api/products";

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    categories: []
  }),

  getters: {
    getNewProducts(state){
      return state.products.slice(0, 4)
    },
    getElectronics(state){
      return state.products.filter(el => el.category === 'electronics')
    },
    getJewelries(state){
      return state.products.filter(el => el.category === 'jewelery')
    },
    getMensClothing(state){
      return state.products.filter(el => el.category === "men's clothing")
    },
    getWomensClothing(state){
      return state.products.filter(el => el.category === "women's clothing")
    }
  },

  actions: {
    async fetchProducts(limit){
      try {
        const response = await getProducts(limit)
        this.products = response.data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories(){
      try {
        const response = await getProductsCategories()
        this.categories = response.data
      } catch (error) {
        console.log(error);
      }
    }
  }
})
