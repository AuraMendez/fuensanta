
<template>
    <v-overlay v-model="showing" class="d-flex justify-space-around align-center">
        <v-card width="80vw" class="pa-16">
            <v-card-title class="d-flex mb-12">
                New concert
                <v-spacer></v-spacer>
                <v-btn @click="close" append-icon="mdi-close" color="lime-darken-4">close</v-btn>
            </v-card-title>
            <v-form ref="concert_form">
                <v-container>
                    <v-row>
                        <v-text-field type="date" v-model="concertForm.date" :rules="[v => !!v || 'Date is required']"
                            required></v-text-field>
                        <v-text-field label="Program" v-model="concertForm.program"
                            :rules="[v => !!v || 'Name of the program is required']" required></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field label="Venue / Festival" v-model="concertForm.venue"
                            :rules="[v => !!v || 'Venue is required']" required></v-text-field>
                        <v-text-field label="Location" v-model="concertForm.location"
                            :rules="[v => !!v || 'Location is required']" required></v-text-field>
                    </v-row>
                    <v-row>
                        <h4 class="mb-3">Tickets</h4>
                    </v-row>
                    <v-row>
                        <v-text-field label="Link to site" v-model="concertForm.ticketsUrl"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-checkbox label="Soldout" v-model="concertForm.soldOut"></v-checkbox>
                        <v-checkbox label="Free entrance" v-model="concertForm.freeEntrance"></v-checkbox>
                    </v-row>
                    <v-row>
                        <p class="text-red-darken-4">{{ error }}</p>
                        <v-spacer></v-spacer>
                        <v-btn color="lime-darken-4" @click="saveConcert(null)">Save</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-overlay>
</template>

<script>
import { ref } from "vue";
import { addNewDoc, updateOneDoc } from "../services/firestore";
import { useAgendaStore } from "@/stores/agenda"

export default {
    setup() {
        const agendaStore = useAgendaStore();
        let concertId = null;
        const concertForm = ref({
            date: '',
            program: '',
            venue: '',
            location: '',
            ticketsUrl: '',
            soldOut: false,
            freeEntrance: false,
        });
        const error = ref('');

        function emptyConcertForm() {
            concertForm.value = {
                date: '',
                program: '',
                venue: '',
                location: '',
                ticketsUrl: '',
                soldOut: false,
                freeEntrance: false,
            }
        }

        function populateConcertForm(id) {
            const oneConcert = agendaStore.getOneConcert(id);
            if (oneConcert) {
                concertForm.value = {
                    date: oneConcert.date,
                    program: oneConcert.program,
                    venue: oneConcert.venue,
                    location: oneConcert.location,
                    ticketsUrl: oneConcert.ticketsUrl,
                    soldOut: oneConcert.soldOut,
                    freeEntrance: oneConcert.freeEntrance,
                }
            }
        }

        // Component open and close
        const showing = ref(false);
        function open(id) {
            if (id) {
                concertId = id;
                populateConcertForm(id);
            }
            showing.value = true;
        }

        function close() {
            emptyConcertForm();
            concertId = null;
            showing.value = false;
        }

        // Save concert
        const concert_form = ref(null);

        async function updateConcert() {
            const updated = await updateOneDoc('concerts', concertId, concertForm.value);
            if (updated) {
                agendaStore.getConcerts();
                console.log('UPDATED:', concertId);
                close();
            } else {
                error.value = 'There was an error updating the concert, try again';
            }
        }

        async function createConcert() {
            const newId = await addNewDoc('concerts', concertForm.value);
            if (newId) {
                agendaStore.getConcerts();
                console.log('CREATED:', newId);

                close();
            } else {
                error.value = 'There was an error saving the concert, try again';
            }
        }

        async function saveConcert() {
            const { valid } = await concert_form.value.validate();
            if (!valid) {
                error.value = 'Please fill in all the required fields'
            } else {
                error.value = '';
                if (concertId) {
                    updateConcert();
                } else {
                    createConcert();
                }
            }
        }

        return { showing, open, close, error, concertForm, concert_form, saveConcert }
    },
}
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
