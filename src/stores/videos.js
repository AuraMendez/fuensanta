import { ref } from 'vue'
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
        videoStore.value = videos;
      } else {
        throw Error('There was an error loading the videos. Sorry for the inconvenience');
      } 
    }
    catch (err) {
      console.log(err);
    }
  }

  function getOneVideo(id) {
    const oneVideo = videoStore.value.find(concert => concert.id === id)
    return oneVideo;
  }


  return { videoStore, getVideos, getOneVideo }
})
