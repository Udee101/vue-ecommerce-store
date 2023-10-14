import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";


export const useUserStore = defineStore('userStore', () => { 
  const user = ref({})
  const isLoggedIn = ref(false)


  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"))
    isLoggedIn.value = true
  }
  watch(
    user, (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal))
    },
    { deep: true }
  )

  const userFirstName = computed(() => {
    if (user.value.displayName !== "") {
      let name = user.value.full_name.split(" ")
      let firstName = name[0]
      return firstName
    }
    return ""
  })

  const addUser = (payload) => {
    user.value = payload
    isLoggedIn.value = true
  }

  const signOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("user_token")
    isLoggedIn.value = false
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return {
    user,
    isLoggedIn,
    userFirstName,
    addUser,
    signOut
  }
})
