import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useMusicStore = defineStore('music', () => {
  // state
  const musicStore = ref([]);

  // actions
  async function getMusic() {
    try {
      const music = await getAllDocs('music');
      if (music) {
        musicStore.value = music.sort((b,a) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));
      } else {
        throw Error('There was an error loading the music. Sorry for the inconvenience');
      } 
    }
    catch (err) {
      console.log(err);
    }
  }

  function getOneMusic(id) {
    const oneMusic = musicStore.value.find(music => music.id === id)
    return oneMusic;
  }
  // getters
  const personalMusic = computed(() => {
    return musicStore.value.filter((doc) => doc.section === 'personal');
  });

  const sidemanMusic = computed(() => {
    return musicStore.value.filter((doc) => doc.section === 'sideman');
  });

  const newPersonalOrder = computed(() => {
    let order = 0;
    const filtered = musicStore.value.filter((doc) => doc.section === 'personal');
    if (filtered.length) {
      order = parseInt(filtered[0].order);
    }
    return order + 1;
  });

  const newSidemanOrder = computed(() => {
    let order = 0;
    const filtered = musicStore.value.filter((doc) => doc.section === 'sideman');
    if (filtered.length) {
      order = parseInt(filtered[0].order);
    }
    return order + 1;
  });

  return { musicStore, getMusic, getOneMusic, sidemanMusic, personalMusic, newPersonalOrder, newSidemanOrder }
})
