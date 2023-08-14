import HomePage from '../pages/Home.vue';
import Product from '../pages/Product.vue';

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
  }
]

export default routes;
