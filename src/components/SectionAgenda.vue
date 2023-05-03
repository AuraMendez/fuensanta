
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
        <!-- <v-list bg-color="transparent">
            <v-list-item v-for="concert in agendaStore.futureConcerts" :key="concert.id">
                <div class="list-item">

                    <div class="column date">
                        <v-list-item-title>{{ formatDate(concert.date) }}</v-list-item-title>
                    </div>
                    <div class="column">
                        <v-list-item-subtitle>{{ concert.program }}</v-list-item-subtitle>
                    </div>
                    <div class="column city">
                        <v-list-item-subtitle>{{ concert.venue }}</v-list-item-subtitle>
                        <v-list-item-title>{{ concert.location }}</v-list-item-title>
                    </div>
                    <div class="column tickets">
                        <p v-if="concert.soldOut">Sold out</p>
                        <p v-else-if="concert.freeEntrance">Free entrance</p>
                        <v-btn v-else-if="concert.ticketsUrl" :href="concert.ticketsUrl" target="_blank">Tickets</v-btn>
                    </div>
                </div>
            </v-list-item>
        </v-list> -->
        <h4>Past concerts</h4>
        <!-- <v-container class="agenda-list">
            <v-row v-for="concert in agendaStore.pastConcerts" :key="concert.id">
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
                </v-col>
            </v-row>
        </v-container> -->
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
        <!-- <v-list bg-color="transparent">
            <v-list-item v-for="concert in agendaStore.pastConcerts" :key="concert.id">
                <v-list-item-subtitle>
                    {{ formatDate(concert.date) }} - {{ concert.venue }}, {{ concert.location }} >> {{ concert.program }}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list> -->
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
    .list-item {
        flex-direction: row;
    }

    /* .column {
        width: 50%;
    } */

    .column.tickets {
        width: 130px;
    }

    /* .column.date {
        width: 110px;
    } */

    /* .column.city {
        width: 110px;
    } */
}
</style>
