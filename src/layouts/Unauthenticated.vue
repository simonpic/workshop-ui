<template>
  <v-container class="content" fill-height fluid>
    <slot />
  </v-container>
</template>

<script>
export default {};
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
