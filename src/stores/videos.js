import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useVideoStore = defineStore('videos', () => {
  // state
  const videoStore = ref([]);

  // actions
  async function getVideos() {
    try {
      const videos = await getAllDocs('videos');
      if (videos) {
        videoStore.value = videos.sort((b,a) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
      } else {
        throw Error('There was an error loading the videos. Sorry for the inconvenience');
      } 
    }
    catch (err) {
      console.log(err);
    }
  }

  function getOneVideo(id) {
    const oneVideo = videoStore.value.find(video => video.id === id)
    return oneVideo;
  }
  // getters
  const newItemOrder = computed(() => {
    let order = 0;
    if (videoStore.value.length) {
      order = parseInt(videoStore.value[0].order);
    }
    return order + 1;
  })
  return { videoStore, getVideos, getOneVideo, newItemOrder }
})
