
<template>
    <div>
        <h2>Tour Dates</h2>
        <v-list>
            <v-list-item v-for="concert in agendaStore.futureConcerts" :key="concert.id">
                <div class="list-item">

                    <div class="column">
                        <v-list-item-title>{{ formatDate(concert.date) }}</v-list-item-title>
                        <v-list-item-subtitle>{{ concert.program }}</v-list-item-subtitle>
                    </div>
                    <div class="column city">
                        <v-list-item-subtitle>{{ concert.venue }}</v-list-item-subtitle>
                        <v-list-item-title>{{ concert.location }}</v-list-item-title>
                    </div>
                    <div class="column tickets">
                        <p v-if="concert.soldOut">Sold out</p>
                        <p v-else-if="concert.freeEntrance">Free entrance</p>
                        <v-btn v-else-if="concert.ticketsUrl">Tickets</v-btn>
                    </div>
                </div>
            </v-list-item>
        </v-list>
        <h4>Past concerts</h4>
        <v-list>
            <v-list-item v-for="concert in agendaStore.pastConcerts" :key="concert.id">
                <v-list-item-subtitle> 
                    {{ formatDate(concert.date) }} - {{ concert.venue }}, {{ concert.location }} >> {{ concert.program }}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
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
.list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.column {
    width: 100%;
}


/* Desktop */
@media only screen and (min-width: 768px) {
    .list-item {
        flex-direction: row;
    }

    .column.tickets {
        width: 40%;
    }

    .column.city {
        width: 50%;
    }
}
</style>
