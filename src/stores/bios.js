import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useBioStore = defineStore('bio', () => {
  // state
  const bio = ref({en: '', es: ''});

  // actions
  async function getBios() {
    try {
      const bios = await getAllDocs('bio');
      if (bios) {
        bio.value.en = bios.find(doc => doc.id === 'en').text;
        bio.value.es = bios.find(doc => doc.id === 'es').text;
      } else {
        throw Error('There was an error retrieving the Bios. Sorry for the inconvenience');
      } 
    }
    catch (err) {
      console.log(err);
    }
  }

  return { getBios, bio }
})
