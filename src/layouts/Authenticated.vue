<template>
  <v-row class="content">
    <v-col cols="2">
      <Menu />
    </v-col>
    <v-col cols="10">
      <slot />
    </v-col>
  </v-row>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style scoped>
.content {
  background: rgb(62, 41, 82);
  background: linear-gradient(
    145deg,
    rgba(62, 41, 82, 1) 0%,
    rgba(159, 65, 154, 1) 32%,
    rgba(255, 232, 254, 1) 100%
  );
}
</style>
