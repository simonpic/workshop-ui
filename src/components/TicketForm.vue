<template>
  <v-card class="mx-auto" elevation="2" max-width="700">
    <v-card-title>New Ticket</v-card-title>
    <v-form ref="form" v-model="valid">
      <v-card-text>
        <v-text-field
          label="Label*"
          v-model="ticket.label"
          :rules="labelRules"
          required
        ></v-text-field>
        <v-textarea
          label="Description"
          v-model="ticket.description"
          :rules="descRules"
          required
        ></v-textarea>
        <v-row>
          <v-col cols="6">
            <v-select
              label="Assigned to"
              :items="users"
              item-text="pseudo"
              item-value="id"
              v-model="ticket.assigneeId"
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-text-field
              label="Status*"
              :value="status.text"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog">Close</v-btn>
        <v-btn color="primary" :disabled="!valid" @click="saveTicket">
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ticket: {},
      valid: false,
      labelRules: [
        (v) => !!v || "Label is required",
        (v) =>
          (v && v.length >= 5 && v.length <= 40) ||
          "Label length must be between 5 and 40 characters",
      ],
      descRules: [
        (v) =>
          (v && v.length < 2000) || "Description can't exceed 2000 characters",
      ],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions("ticket", ["createTicket"]),
    ...mapActions("user", ["getUsers"]),

    saveTicket() {
      this.ticket.authorId = this.user.id;
      this.ticket.status = this.status.value;
      this.createTicket(this.ticket).then(() => this.closeDialog());
    },

    closeDialog() {
      this.ticket = {};
      this.$refs.form.resetValidation();
      this.$emit("end-form");
    },
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["users"]),
  },
};
</script>

<style scoped></style>
