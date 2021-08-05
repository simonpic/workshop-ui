<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Workshop
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ user.email }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="tab in tabs"
          :key="tab.title"
          link
          @click="tab.onClick(tab.view)"
        >
          <v-list-item-icon>
            <v-icon v-text="tab.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="tab.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedItem: 0,
      currentView: "Home",
      tabs: [
        {
          icon: "mdi-home",
          title: "Home",
          view: "Home",
          onClick: this.navigateTo,
        },
        {
          icon: "mdi-account-group",
          title: "Users",
          view: "Users",
          onClick: this.navigateTo,
        },
        {
          icon: "mdi-ticket",
          title: "Tickets",
          view: "Tickets",
          onClick: this.navigateTo,
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          view: "Login",
          onClick: this.logout,
        },
      ],
    };
  },

  created() {
    this.selectedItem = this.tabs.findIndex(
      (tab) => tab.view === this.$route.name
    );
  },

  methods: {
    ...mapActions("auth", ["disconnectUser"]),

    navigateTo(view) {
      if (this.currentView !== view) {
        this.$router.push({ name: view });
        this.currentView = view;
      }
    },

    logout() {
      this.disconnectUser();
      this.navigateTo("Login");
    },
  },

  computed: {
    ...mapGetters("auth", ["user"]),
  },
};
</script>
