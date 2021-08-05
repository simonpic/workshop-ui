<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="{ 'on-hover': hover }"
      height="100%"
      color="#c9c9c9"
    >
      <v-row class="card-content" align="center">
        <v-col>
          <v-card-text class="text">
            <v-icon x-large>
              mdi-plus-thick
            </v-icon>
            Add new user
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
export default {};
</script>

<style scoped>
.on-hover {
  cursor: pointer;
}

.card-content {
  margin-top: 0px;
}

.text {
  font-size: 20px;
}
</style>
