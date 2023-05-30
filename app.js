import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import MenuPage from './views/MenuPage.vue';
import CartPage from './views/CartPage.vue';
import ShelfPage from './views/ShelfPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/menu', component: MenuPage },
  { path: '/cart', component: CartPage },
  { path: '/shelf', component: ShelfPage },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router
}).$mount('#app');
