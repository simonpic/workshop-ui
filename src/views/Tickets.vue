<template>
  <div class="table">
    <v-row class="content">
      <v-col cols="4" v-for="entry in Object.entries(tickets)" :key="entry[0]">
        <TicketTableColumn :status="Status[entry[0]]" :tickets="entry[1]" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TicketTableColumn from "@/components/TicketTableColumn.vue";
import Status from "../model/Status";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TicketTableColumn,
  },
  data() {
    return {
      Status,
    };
  },
  async created() {
    await this.getTickets();
  },
  methods: {
    ...mapActions("ticket", ["getTickets"]),
  },
  computed: {
    ...mapGetters("ticket", ["tickets"]),
  },
};
</script>

<style scoped>
.table {
  margin: 20px;
}

.content {
  height: 75vh;
}
</style>
