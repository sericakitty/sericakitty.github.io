import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(store).use(router).mount('#app');

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
