<template>
  <div class="pa-12">
    <div class="d-flex mb-3">
      <h1>Fuensanta Official Site - Dashboard</h1>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-home" to="/">Go to site</v-btn>
    </div>
    <div class="d-flex mb-6">
      <v-btn prepend-icon="mdi-logout" size="small" class="d-flex mr-6">Logout</v-btn>
      <v-icon icon="mdi-account-circle" class="mr-2"></v-icon>
      <p>{{ userEmail }}</p>
    </div>
    <v-card>
      <v-tabs v-model="tab" bg-color="lime-darken-4">
        <v-tab value="info">Info</v-tab>
        <v-tab value="agenda">Agenda</v-tab>
        <v-tab value="video">Video</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="info">
            Bio / General info
          </v-window-item>

          <v-window-item value="agenda">
            <TabAgenda></TabAgenda>
          </v-window-item>

          <v-window-item value="video">
            <TabVideo></TabVideo>
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
import TabAgenda from '../components/DashboardAgenda.vue';
import TabVideo from '../components/DashboardVideo.vue';
import { auth } from "../firebaseConfig";

export default {
  name: 'DashboardView',
  components: {
    TabAgenda,
    TabVideo
  },
  setup() {
    const userEmail = ref(auth.currentUser.reloadUserInfo.email);

    let tab = ref('video');
    return { tab, userEmail }
  },
}
</script>

<style></style>
