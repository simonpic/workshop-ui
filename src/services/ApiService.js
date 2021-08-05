import axios from "axios";
import store from "../store";

function getClient() {
  const token = store.getters["auth/accessToken"];
  const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: { Authorization: "Bearer " + token },
  });
  return apiClient;
}

export default { getClient };
