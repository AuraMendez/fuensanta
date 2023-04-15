
<template>
    <v-expansion-panels>
        <v-expansion-panel bg-color="orange-lighten-5">
            <v-expansion-panel-title>
                New concert
            </v-expansion-panel-title>
            <v-expansion-panel-text>

                <v-container>
                    <v-row>
                        <v-text-field type="date" v-model="concertForm.date"></v-text-field>
                        <v-text-field label="Program" v-model="concertForm.program"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field label="Venue" v-model="concertForm.venue"></v-text-field>
                        <v-text-field label="Location" v-model="concertForm.location"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-textarea label="Description (optional)" v-model="concertForm.description"></v-textarea>
                    </v-row>
                    <v-row>
                        <h4>Tickets</h4>
                    </v-row>
                    <v-row>
                        <v-text-field label="Link to site" v-model="concertForm.ticketsUrl"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-checkbox color="red" false-icon="mdi-check" label="Soldout" v-model="concertForm.soldOut"></v-checkbox>
                        <v-checkbox color="red" false-icon="mdi-check" label="Free entrance" v-model="concertForm.freeEntrance"></v-checkbox>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="orange-lighten-3">Save</v-btn>
                    </v-row>
                </v-container>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { reactive } from "vue";

const concertForm = reactive({
    date: '',
    program: '',
    venue: '',
    location: '',
    ticketsUrl: '',
    soldOut: false,
    freeEntrance: false,
    description: '',
});
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
