<script>
import { RouterView } from 'vue-router';
import { useAgendaStore } from "@/stores/agenda"
import { useVideoStore } from "@/stores/videos"
import { useMusicStore } from "@/stores/music"
import { useBioStore } from "@/stores/bios"

export default {

  setup() {
    const bioStore = useBioStore();
    bioStore.getBios();

    const agendaStore = useAgendaStore();
    agendaStore.getConcerts();

    const videoStore = useVideoStore();
    videoStore.getVideos();
    
    const musicStore = useMusicStore();
    musicStore.getMusic();

    return { RouterView }
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
