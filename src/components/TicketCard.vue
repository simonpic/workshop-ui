<template>
  <v-card :elevation="5" :color="color" class="ticket">
    <v-card-title>
      {{ ticket.label }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      {{ desc }}
    </v-card-text>
    <v-card-text class="text-right assignee">
      {{ assignee }}
    </v-card-text>
    <v-card-actions class="author justify-end">
      <v-icon @click="remove">mdi-delete</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colors: {
        New: "#d3d3d3",
        InProgress: "#add8e6",
        Done: "#90ee90",
      },
    };
  },
  computed: {
    color() {
      return this.colors[this.ticket.status];
    },
    desc() {
      const desc = this.ticket.description;
      return desc && desc.length > 150 ? desc.substring(0, 150) + "…" : desc;
    },
    assignee() {
      return this.ticket.assignee
        ? "Assigned to " + this.ticket.assignee.pseudo
        : "Ticket not assigned";
    },
  },
  methods: {
    remove() {
      console.log("delete");
    },
    edit() {
      console.log("edit");
    },
  },
};
</script>

<style>
.ticket {
  margin: 10px 0px 10px 0px;
}

.assignee {
  font-style: italic;
  font-size: 11px;
}
</style>
