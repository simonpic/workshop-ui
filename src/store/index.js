import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth";
import ticket from "./modules/ticket";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    ticket,
    user,
  },
  plugins: [createPersistedState()],
});
