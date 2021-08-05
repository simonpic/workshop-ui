import userService from "../../services/UserService";

const state = {
  users: [],
};

const getters = {
  users: (state) => state.users,
};

const actions = {
  getUsers({ commit }) {
    userService.getUsers().then((users) => commit("setUsers", users));
  },

  createUser({ commit }, user) {
    userService.createUser(user).then((user) => commit("addUser", user));
  },
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },

  addUser(state, user) {
    state.users.push(user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
