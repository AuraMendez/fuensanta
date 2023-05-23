<script>
import { RouterView } from 'vue-router';
import { useAgendaStore } from "@/stores/agenda"
import { useVideoStore } from "@/stores/videos"

export default {

  setup() {
    const agendaStore = useAgendaStore();
    agendaStore.getConcerts();

    const videoStore = useVideoStore();
    videoStore.getVideos();

    return { RouterView }
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
