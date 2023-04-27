<template>
  <div class="pa-12">
    <div class="d-flex mb-6">
      <h1>Fuensanta Official Site - Dashboard</h1>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-home" to="/">Go to site</v-btn>
    </div>
    <v-card>
      <v-tabs v-model="tab" bg-color="lime-darken-4">
        <v-tab value="info">Info</v-tab>
        <v-tab value="agenda">Agenda</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="info">
            Bio / General info
          </v-window-item>

          <v-window-item value="agenda">
            <TabAgenda></TabAgenda>
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
import TabAgenda from '../components/TabAgenda.vue';
// import { auth } from "../firebaseConfig";

export default {
  name: 'DashboardView',
  components: {
    TabAgenda
  },
  setup() {
    // const user = auth.currentUser
    // console.log(user);

    let tab = ref('agenda');
    return { tab }
  },
}
</script>

<style></style>
