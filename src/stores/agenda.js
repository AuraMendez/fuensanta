import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useAgendaStore = defineStore('agenda', () => {
  // state
  const agenda = ref([]);

  // actions
  async function getConcerts() {
    try {
      agenda.value = await getAllDocs('concerts');
      if (!agenda.value) {
        throw Error('There was an error loading the Agenda. Sorry for the inconvenience');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  function getOneConcert(id) {
    const oneConcert = agenda.value.find(concert => concert.id === id)
    return oneConcert;
  }

  // getters
  const pastConcerts = computed(() => {
    const today = new Date().toJSON().slice(0, 10);
    const filteredConcerts = agenda.value.filter((concert) => concert.date < today);
    return filteredConcerts.sort((a, b) => b.date - a.date);
  })
  const futureConcerts = computed(() => {
    const today = new Date().toJSON().slice(0, 10);
    const filteredConcerts = agenda.value.filter((concert) => concert.date >= today);
    return filteredConcerts.sort((a, b) => b.date - a.date);
  })

  return { agenda, getConcerts, getOneConcert, pastConcerts, futureConcerts }
})
