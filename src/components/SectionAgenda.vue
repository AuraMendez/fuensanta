
<template>
    <div class="section-agenda">
        <h2>Tour Dates</h2>

        <v-container class="agenda-list">
            <v-row v-for="concert in agendaStore.futureConcerts" :key="concert.id">
                <v-col cols="3">
                    <p>{{ formatDate(concert.date) }}</p>
                </v-col>
                <v-col cols="3">
                    <p>{{ concert.program }}</p>
                </v-col>
                <v-col cols="3">
                    <p>{{ concert.location }}</p>
                    <p>{{ concert.venue }}</p>
                </v-col>
                <v-col cols="3">
                    <p v-if="concert.soldOut">Sold out</p>
                    <p v-else-if="concert.freeEntrance">Free entrance</p>
                    <v-btn v-else-if="concert.ticketsUrl" :href="concert.ticketsUrl" target="_blank">Tickets</v-btn>
                </v-col>
            </v-row>
        </v-container>

        <h4>Past concerts</h4>

        <v-container class="agenda-list">
            <v-row v-for="concert in agendaStore.pastConcerts" :key="concert.id">
                <v-col cols="3">
                    <p>{{ formatDate(concert.date) }}</p>
                </v-col>
                <v-col cols="4">
                    <p>{{ concert.program }}</p>
                </v-col>
                <v-col cols="3">
                    <p>{{ concert.venue }}, {{ concert.location }}</p>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import { useAgendaStore } from "@/stores/agenda"

export default {
    setup() {

        const agendaStore = useAgendaStore();

        function formatDate(dateStr) {
            const formattedDate = new Date(dateStr).toDateString().slice(4);
            return formattedDate;
        }

        return { agendaStore, formatDate };
    },
}
</script>

<style scoped>

.section-agenda {
    text-align: center;
    padding-bottom: 6rem;
}

/* Desktop */
@media only screen and (min-width: 768px) {



}
</style>
