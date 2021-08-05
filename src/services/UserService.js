import apiService from "./ApiService";
import store from "../store";

async function getUserProfile() {
  const client = apiService.getClient();
  const userId = store.getters["auth/userId"];
  const resp = await client.get("/users/" + userId);
  return resp.data;
}

async function getUsers() {
  const client = apiService.getClient();
  const resp = await client.get("/users");
  return resp.data.users;
}

async function createUser(user) {
  const client = apiService.getClient();
  const resp = await client.post("/users", user);
  return resp.data;
}

export default {
  getUserProfile,
  getUsers,
  createUser,
};
