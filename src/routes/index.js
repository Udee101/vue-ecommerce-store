import { createRouter, createWebHistory } from "vue-router";
import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const invalidateToken = () => {
  if (localStorage.getItem("token_creation_time") === null) {
    localStorage.removeItem("user_token");
  }

  const createdAt = parseInt(localStorage.getItem("token_creation_time"));
  const elapsedTimeInSeconds = (Date.now() - createdAt) / 1000;

  if (elapsedTimeInSeconds > 600) {
    localStorage.removeItem("user_token");
  }
}

router.beforeEach((to, from, next) => {

  invalidateToken();

  const authenticated = localStorage.getItem("user_token");

  if (to.matched.some((record) => record.meta.guest)) {
    if (authenticated) {
      next({
        name: 'home',
      })
    } else {
      next()  
    }
  } else {
    next()
  }
})

export default router;
