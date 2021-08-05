<template>
  <div class="column pa-4">
    <span class="title">{{ status.text }}</span>
    <div class="content">
      <TicketCard v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
    </div>
    <div class="add-action" @click="dialog = true">
      <v-icon large color="grey">mdi-plus-thick</v-icon>
      <span class="add-action-text">Add a new Ticket</span>
    </div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <TicketForm :status="status" @end-form="dialog = false" />
    </v-dialog>
  </div>
</template>

<script>
import TicketCard from "@/components/TicketCard";
import TicketForm from "@/components/TicketForm";

export default {
  props: {
    status: {
      type: Object,
      required: true,
    },
    tickets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    TicketCard,
    TicketForm,
  },
};
</script>

<style scoped>
.column {
  border-radius: 10px;
  background-color: rgb(230, 230, 230);
}

.title {
  color: gray;
}

.add-action {
  border-radius: 10px;
  opacity: 0.85;
}

.add-action:hover {
  cursor: pointer;
  background-color: lightgrey;
}

.add-action-text {
  color: grey;
}

.content {
  margin-bottom: 20px;
}
</style>
