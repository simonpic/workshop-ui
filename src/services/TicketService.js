import store from "../store";
import apiService from "./ApiService";

async function getUserTickets() {
  const userId = store.getters["auth/user"].id;
  const client = apiService.getClient();
  const resp = await client.get("/tickets", { params: { userId } });
  return resp.data.tickets;
}

async function createTicket(ticket) {
  const client = apiService.getClient();
  const resp = await client.post("/tickets", ticket);
  return resp.data;
}

export default {
  getUserTickets,
  createTicket,
};
