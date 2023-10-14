// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVHi6q63IubCtOsHAtI8TirbmkK8ODcxM",
  authDomain: "vue-ecommerce-app-39e23.firebaseapp.com",
  projectId: "vue-ecommerce-app-39e23",
  storageBucket: "vue-ecommerce-app-39e23.appspot.com",
  messagingSenderId: "553509673408",
  appId: "1:553509673408:web:74bdc47c7389d05dde1025"
};

// Initialize Firebase
export const setup = () => { initializeApp(firebaseConfig) }
