import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/pages/PageHome.vue';
import PageNotFound from '@/pages/PageNotFound.vue';
import PageDj from '@/pages/PageDj.vue';
import PageBugInvader from '@/pages/PageBugInvader.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
  {
    path: '/dj',
    name: 'dj',
    component: PageDj,
    props: true,
  },
  {
    path: '/phasergame/buginvader',
    name: 'buginvader',
    component: PageBugInvader,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: PageNotFound,
  },

];

// export new router instance
export default createRouter({
  // Provide the history implementation to use. We are using the no-hash history for simplicity here.
  base: window.location.origin,
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },

});
