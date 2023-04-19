
<template>
    <v-form ref="concert_form">
        <v-container>
            <v-row>
                <v-text-field type="date" v-model="concertForm.date" :rules="[v => !!v || 'Date is required']"
                    required></v-text-field>
                <v-text-field label="Program" v-model="concertForm.program" :rules="[v => !!v || 'Name of the program is required']" required></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Venue" v-model="concertForm.venue" :rules="[v => !!v || 'Venue is required']" required></v-text-field>
                <v-text-field label="Location" v-model="concertForm.location" :rules="[v => !!v || 'Location is required']" required></v-text-field>
            </v-row>
        <!-- <v-row>
            <v-textarea label="Description (optional)" v-model="concertForm.description"></v-textarea>
                    </v-row> -->
            <v-row>
                <h4>Tickets</h4>
            </v-row>
            <v-row>
                <v-text-field label="Link to site" v-model="concertForm.ticketsUrl"></v-text-field>
            </v-row>
            <v-row>
                <v-checkbox color="green" label="Soldout" v-model="concertForm.soldOut"></v-checkbox>
                <v-checkbox color="green" label="Free entrance" v-model="concertForm.freeEntrance"></v-checkbox>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn color="orange-lighten-3" @click="validate">Save</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { ref } from "vue";
// import {  } from "../services";

export default {
    setup() {
        const concertForm = ref({
            date: '',
            program: '',
            venue: '',
            location: '',
            ticketsUrl: '',
            soldOut: false,
            freeEntrance: false,
        });
        return { concertForm}
    },
    methods: {
        async validate() {
            // const { valid } = await this.$refs.concert_form.validate()
            // if (valid) {
                
            // }
        },
    }
}
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
