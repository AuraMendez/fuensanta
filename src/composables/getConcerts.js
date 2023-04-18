import { ref } from "vue";
import { getAllDocs } from "../services/firestore";

function getConcerts() {
    const concerts = ref([]);
    const error = ref(null);

    async function load() {
        try {
            concerts.value = await getAllDocs('concerts');
            if (!concerts.value) {
                throw Error('There was an error loading this information. Sorry for the inconvenience');
            }
            concerts.value.sort((a, b) => b.date - a.date);
        } 
        catch (err) {
            console.log(err);
            error.value = err.message;
        }
    }

    return { concerts, error, load }
}

export { getConcerts };