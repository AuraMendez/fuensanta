<script>
import { RouterView } from 'vue-router';
import { useAgendaStore } from "@/stores/agenda"
import { useVideoStore } from "@/stores/videos"
import { useBioStore } from "@/stores/bios"

export default {

  setup() {
    const agendaStore = useAgendaStore();
    agendaStore.getConcerts();

    const videoStore = useVideoStore();
    videoStore.getVideos();

    const bioStore = useBioStore();
    bioStore.getBios();

    return { RouterView }
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
