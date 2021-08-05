<template>
  <v-card elevation="2">
    <v-card-title>
      <v-icon medium>
        mdi-account
      </v-icon>
      <span>{{ user.pseudo }}</span>
    </v-card-title>
    <v-card-text>
      {{ user.email }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
