<template>
  <v-card>
    <v-card-title>New User</v-card-title>
    <v-form ref="form" v-model="valid">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Pseudo*"
              v-model="user.pseudo"
              :rules="pseudoRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email*"
              v-model="user.email"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password*"
              type="password"
              v-model="user.password"
              :rules="passwordRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog">
          Close
        </v-btn>
        <v-btn color="primary" :disabled="!valid" @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {},
      valid: false,
      pseudoRules: [(v) => !!v || "Pseudo is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must exeed 6 characters",
      ],
    };
  },

  methods: {
    ...mapActions("user", ["createUser"]),

    save() {
      this.createUser(this.user).then(() => this.closeDialog());
    },

    closeDialog() {
      this.$refs.form.reset();
      this.$emit("end-form");
    },
  },
};
</script>

<style></style>
