import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import vuetify from "./plugins/vuetify";
import store from "./store"
import router from "./router";


/*
 * vue-svgicon
 * Refs: https://mmf-fe.github.io/svgicon/en/guide/#installation
 * */
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.component('icon', VueSvgIcon)

Vue.config.productionTip = false;

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {id: 'UA-203301687-1'})

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
