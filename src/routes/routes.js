import HomePage from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import AllProducts from '../pages/AllProducts.vue';
import Cart from '../pages/Cart.vue';

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
]

export default routes;
