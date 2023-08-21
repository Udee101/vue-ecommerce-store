import HomePage from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import AllProducts from '../pages/AllProducts.vue';

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
    path: '/product',
    name: 'product',
    component: Product,
    // props: true
  },

  {
    path: '/products',
    name: 'products',
    component: AllProducts,
  }
]

export default routes;
