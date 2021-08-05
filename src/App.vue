<template>
  <v-app id="app">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
const DEFAULT_LAYOUT = "unauthenticated";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + "-layout";
    },
  },
};
</script>

<style></style>
