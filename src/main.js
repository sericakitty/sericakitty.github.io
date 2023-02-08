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

//test
// GitHub Pages redirect hack for crawler-friendly SPAs
const { redirect } = window.sessionStorage;
delete window.sessionStorage.redirect;
if (redirect && redirect !== window.location.pathname) {
  router.replace(redirect);
}

// import './set-public-path';
// import { h, createApp } from 'vue';
// import singleSpaVue from 'single-spa-vue';

// import App from '@/App.vue';
// import router from '@/router';
// import store from '@/store';

// const vueLifecycles = singleSpaVue({
//   createApp,
//   appOptions: {
//     render() {
//       return h(App, {
//         props: {
//           name: this.name,
//           mountParcel: this.mountParcel,
//           singleSpa: this.singleSpa,
//         }
//       });
//     },
//   }

// });

// export const { bootstrap, unmount } = vueLifecycles;
// export const mount = (props) => vueLifecycles.mount(props).then((instance) => {
//   instance.use(router);
//   instance.use(store);
// });
