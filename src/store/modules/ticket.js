import ticketService from "../../services/TicketService";

function getTicketByStatus(status, tickets) {
  return tickets.filter((ticket) => ticket.status === status);
}

const state = {
  tickets: [],
};

const getters = {
  tickets: (state) => {
    return {
      new: getTicketByStatus("New", state.tickets),
      inProgress: getTicketByStatus("InProgress", state.tickets),
      done: getTicketByStatus("Done", state.tickets),
    };
  },
};

const actions = {
  async getTickets({ commit }) {
    ticketService
      .getUserTickets()
      .then((tickets) => commit("setTickets", tickets));
  },

  createTicket({ commit }, ticket) {
    ticketService
      .createTicket(ticket)
      .then((ticket) => commit("addTicket", ticket));
  },
};

const mutations = {
  setTickets(state, tickets) {
    state.tickets = tickets;
  },

  addTicket(state, ticket) {
    state.tickets.push(ticket);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
