<template>
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
          <component :is="FormAgenda"></component>
        </v-window-item>

      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import FormAgenda from '../components/FormAgenda.vue';

let tab = ref('agenda');
</script>

<style></style>
