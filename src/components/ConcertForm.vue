
<template>
    <v-overlay v-model="showing" class="d-flex justify-space-around align-center">
        <v-card width="80vw" class="pa-16">
            <v-card-title class="d-flex">
                New concert
                <v-spacer></v-spacer>
                <v-btn @click="close" variant="text">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
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
                        <v-text-field label="Venue" v-model="concertForm.venue" :rules="[v => !!v || 'Venue is required']"
                            required></v-text-field>
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
                        <v-spacer></v-spacer>
                        <v-btn color="orange-lighten-3" @click="validate">Save</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-overlay>
</template>

<script>
import { ref } from "vue";
import { addNewConcert } from "../composables/addNewConcert";

export default {
    setup() {
        // Component
        const showing = ref(false);
        function open() {
            showing.value = true;
        }
        
        function close() {
            showing.value = false;
        }

        // Concert
        const { saveConcert } = addNewConcert();
        const concertForm = ref({
            date: '',
            program: '',
            venue: '',
            location: '',
            ticketsUrl: '',
            soldOut: false,
            freeEntrance: false,
        });

        const concert_form = ref(null);
        async function validate() {
            const { valid } = await concert_form.value.validate();
            if (valid) {
                saveConcert(concertForm.value);
            }
        }



        return { showing, open, close, concertForm, concert_form, validate }
    },
}
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
