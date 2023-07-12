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

<style>

.page-title .title{ 
  height: 40px;
  margin-top: 30px;
}
.page-title .icon{
  margin: 1.5rem 0 2rem 0;
  height: 80px;
}
</style>
