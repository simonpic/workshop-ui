<template>
  <v-row align="center" justify="center">
    <v-col cols="5">
      <v-card class="mx-auto login-card" elevation="2" max-width="345">
        <v-card-title class="justify-center title"
          >Sign in to your account</v-card-title
        >
        <v-form v-model="valid">
          <v-card-text>
            <v-text-field
              label="Email"
              v-model="user.email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="user.password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-card-text
              v-if="errorMsg"
              class="error-msg text-right"
              v-text="errorMsg"
            ></v-card-text>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid" @click="login"
              >Login</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      user: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      errorMsg: "",
    };
  },

  methods: {
    ...mapActions("auth", ["connectUser"]),
    login() {
      this.connectUser(this.user)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(() => (this.errorMsg = "Connection failed :("));
    },
  },
};
</script>

<style scoped>
.error-msg {
  color: red;
}
</style>
