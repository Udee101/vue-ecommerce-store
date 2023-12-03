import HomePage from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import AllProducts from '../pages/AllProducts.vue';
import Cart from '../pages/Cart.vue';
import Login from '../pages/Login.vue';
import SignUp from '../pages/Register.vue';
import Checkout from '../pages/Checkout.vue';

const routes = [
  {
    path: '/',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },

  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guest: true }
  },

  {
    path: '/register',
    name: 'register',
    component: SignUp,
    meta: { guest: true }
  },

  {
    path: '/products',
    name: 'products',
    component: AllProducts,
  },

  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },

  {
    path: '/cart/checkout/:amount',
    name: 'checkout',
    component: Checkout,
    props: true,
    meta: { requiresAuth: true }
  },
]

export default routes;
