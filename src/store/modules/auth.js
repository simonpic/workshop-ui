import keycloack from "../../services/Keycloak";
import userService from "../../services/UserService";
import jwtUtils from "../../utils/JwtUtils";

const state = {
  tokens: null,
  user: null,
};

const getters = {
  isAuthenticated: (state) =>
    state.tokens &&
    !!state.tokens.access_token &&
    jwtUtils.isTokenStillValid(state.tokens.access_token),
  user: (state) => state.user,
  accessToken: (state) => state.tokens.access_token,
  idToken: (state) => state.tokens.id_token,
  userId: (state) => jwtUtils.getUserIdFromIdToken(state.tokens.id_token),
};

const actions = {
  async connectUser({ commit }, user) {
    return keycloack
      .connectUser(user)
      .then((resp) => commit("setTokens", resp.data))
      .then(() => userService.getUserProfile())
      .then((user) => commit("setUser", user));
  },

  async disconnectUser({ commit }) {
    commit("disconnectUser");
  },
};

const mutations = {
  setTokens(state, tokens) {
    state.tokens = tokens;
  },

  setUser(state, user) {
    state.user = user;
  },

  disconnectUser(state) {
    state.tokens = null;
    state.user = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
