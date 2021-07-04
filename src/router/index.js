import Vue from 'vue';
import Router from 'vue-router';
import Store from '@/components/cars/Store';
import ItemDetails from '@/components/cars/ItemDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Store',
      component: Store,
    },
    {
      path: '/view-details',
      name: 'ItemDetails',
      component: ItemDetails,
    },
  ],
});
