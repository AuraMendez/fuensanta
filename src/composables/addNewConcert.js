import { ref } from "vue";
import { addNewDoc } from "../services/firestore";

function addNewConcert() {
    const id = ref('');
    const error = ref(null);

    async function saveConcert(newConcert) {
        try {
            id.value = await addNewDoc('concerts', newConcert);
            if (!id.value) {
                throw Error('There was an error saving the concert');
            }
        } 
        catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }
    return { id, error, saveConcert }
}

export { addNewConcert };