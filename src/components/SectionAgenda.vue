
<template>
    <div class="section-agenda">
        <h1 class="my-6">Tour Dates</h1>

        <v-container class="agenda-list">
            <v-row v-for="concert in agendaStore.futureConcerts" :key="concert.id">
                <v-col cols="3" class="date">
                    <p>{{ formatDate(concert.date) }}</p>
                </v-col>
                <v-col cols="4" class="program">
                    <p>{{ concert.program }}</p>
                </v-col>
                <v-col cols="3" class="venue">
                    <p>{{ concert.location }}</p>
                    <p>{{ concert.venue }}</p>
                </v-col>
                <v-col cols="2" class="tickets">
                    <p v-if="concert.soldOut">Sold out</p>
                    <p v-else-if="concert.freeEntrance">Free entrance</p>
                    <v-btn v-else-if="concert.ticketsUrl" :href="concert.ticketsUrl" target="_blank">Tickets</v-btn>
                </v-col>
            </v-row>
        </v-container>

        <div class="past-concerts-header my-6" @click="showPastConcerts = !showPastConcerts">
            <h4>Past concerts</h4>
            <v-icon v-if="showPastConcerts" icon="mdi-chevron-up"></v-icon>
            <v-icon v-else icon="mdi-chevron-down"></v-icon>
        </div>

        <v-container class="agenda-list" v-if="showPastConcerts">
            <v-row v-for="concert in agendaStore.pastConcerts" :key="concert.id">
                <v-col cols="3" class="date">
                    <p>{{ formatDate(concert.date) }}</p>
                </v-col>
                <v-col cols="4" class="program">
                    <p>{{ concert.program }}</p>
                </v-col>
                <v-col cols="2" class="venue">
                    <p>{{ concert.venue }}, {{ concert.location }}</p>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import { useAgendaStore } from "@/stores/agenda"
import { ref } from "vue";

export default {
    setup() {

        const agendaStore = useAgendaStore();

        const showPastConcerts = ref(false);
        function formatDate(dateStr) {
            const formattedDate = new Date(dateStr).toDateString().slice(4);
            return formattedDate;
        }

        return { agendaStore, formatDate, showPastConcerts };
    },
}
</script>

<style scoped>

.section-agenda {
    padding-bottom: 6rem;
}

.tickets {
    text-align: end;
}

.past-concerts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
.past-concerts-header:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

/* Desktop */
@media only screen and (min-width: 768px) {



}
</style>
