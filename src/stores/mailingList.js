import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllDocs } from "../services/firestore";

export const useMailingListStore = defineStore('mailingList', () => {
  // state
  const mailingList = ref([]);

  // actions
  async function getMailingList() {
    try {
      const list = await getAllDocs('mailingList');
      if (list) {
        mailingList.value = list.sort((a, b) => (a.timestamp > b.timestamp) ? -1 : ((b.timestamp > a.timestamp) ? 1 : 0))
      } else {
        throw Error('There was an error retrieving the MailingList. Sorry for the inconvenience');
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return { getMailingList, mailingList }
})
