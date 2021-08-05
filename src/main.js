import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";

import Authenticated from "./layouts/Authenticated";
import Unauthenticated from "./layouts/Unauthenticated";

Vue.config.productionTip = false;

Vue.component("authenticated-layout", Authenticated);
Vue.component("unauthenticated-layout", Unauthenticated);

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      router.push({ name: "Login" });
    }
    return Promise.reject(error);
  }
);

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
