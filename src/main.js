import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// create app instance
const app = createApp(App);

// components
app.use(store);
app.use(router);

// Mount app
app.mount('#app');

// GitHub Pages redirect hack for crawler-friendly SPAs
const { redirect } = window.sessionStorage;
delete window.sessionStorage.redirect;
if (redirect && redirect !== window.location.pathname) {
  router.replace(redirect);
}
