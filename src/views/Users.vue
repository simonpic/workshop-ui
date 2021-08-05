<template>
  <v-container>
    <v-row class="user-list">
      <v-col cols="3">
        <AddUserCard @click.native="dialog = true" />
      </v-col>
      <v-col v-for="user in users" :key="user.pseudo" cols="3">
        <UserCard :user="user" />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <UserForm @end-form="dialog = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserForm from "@/components/UserForm.vue";
import AddUserCard from "@/components/AddUserCard.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    UserForm,
    UserCard,
    AddUserCard,
  },
  data() {
    return {
      dialog: false,
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    ...mapGetters("user", ["users"]),
  },
  methods: {
    ...mapActions("user", ["getUsers"]),
  },
};
</script>

<style scoped>
.user-list {
  margin-top: 20px;
}
</style>
