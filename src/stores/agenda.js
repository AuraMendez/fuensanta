import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useAgendaStore = defineStore('agenda', () => {
  // state
  const agenda = ref([]);

  // actions
  async function getConcerts() {
    try {
      const concerts = await getAllDocs('concerts');
      if (concerts) {
        agenda.value = concerts.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      } else {
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
    return filteredConcerts.reverse();
  })
  const futureConcerts = computed(() => {
    const today = new Date().toJSON().slice(0, 10);
    const filteredConcerts = agenda.value.filter((concert) => concert.date >= today);
    return filteredConcerts;
  })

  return { agenda, getConcerts, getOneConcert, pastConcerts, futureConcerts }
})
