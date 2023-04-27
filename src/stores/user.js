import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    // state
    const currentUser = ref(null);

    // actions
    function setCurrentUser(user) {
        currentUser.value = user;
    }

    return { currentUser, setCurrentUser, }
})
