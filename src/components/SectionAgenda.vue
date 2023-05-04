
<template>
    <div class="section-agenda">
        <h1 class="my-6">TOUR DATES</h1>

        <v-container class="agenda-list">
            <template v-for="concert in agendaStore.futureConcerts" :key="concert.id">
                <v-divider v-if="smAndDown" class="my-9"></v-divider>
                <v-row>
                    <v-col :cols="smAndDown ? 12 : 3" class="date">
                        <p>{{ formatDate(concert.date) }}</p>
                    </v-col>
                    <v-col :cols="smAndDown ? 12 : 4" class="program">
                        <p>{{ concert.program }}</p>
                    </v-col>
                    <v-col :cols="smAndDown ? 12 : 3">
                        <p class="location">{{ concert.location }}</p>
                        <p class="venue">{{ concert.venue }}</p>
                    </v-col>
                    <v-col v-if="concert.ticketsUrl || concert.soldOut || concert.freeEntrance" :cols="smAndDown ? 12 : 2"
                        class="tickets">
                        <p v-if="concert.soldOut" class="text-red-darken-4">Sold out</p>
                        <p v-else-if="concert.freeEntrance" class="text-green-darken-4">Free entrance</p>
                        <v-btn v-else-if="concert.ticketsUrl" :href="concert.ticketsUrl" target="_blank">Tickets</v-btn>
                    </v-col>
                </v-row>
            </template>
        </v-container>

        <div ref="pastConcertsTitle" class="past-concerts-header my-6" @click="togglePastConcerts">
            <h4>PAST CONCERTS</h4>
            <v-icon v-if="showPastConcerts" icon="mdi-chevron-up"></v-icon>
            <v-icon v-else icon="mdi-chevron-down"></v-icon>
        </div>

        <v-container class="agenda-list" v-if="showPastConcerts">
            <template v-for="concert in agendaStore.pastConcerts" :key="concert.id">
                <v-row>
                    <v-col :cols="smAndDown ? 12 : 3" class="date">
                        <p>{{ formatDate(concert.date) }}</p>
                    </v-col>
                    <v-col :cols="smAndDown ? 12 : 4" class="program">
                        <p>{{ concert.program }}</p>
                    </v-col>
                    <v-col :cols="smAndDown ? 12 : 3">
                        <p class="location">{{ concert.location }}</p>
                        <p class="venue">{{ concert.venue }}</p>
                    </v-col>
                </v-row>
                <v-divider v-if="smAndDown" class="my-9"></v-divider>
            </template>
        </v-container>

    </div>
</template>

<script>
import { useAgendaStore } from "@/stores/agenda"
import { ref } from "vue";
import { useDisplay } from 'vuetify'

export default {
    setup() {
        const { smAndDown } = useDisplay()

        const agendaStore = useAgendaStore();

        function formatDate(dateStr) {
            const date = new Date(dateStr);
            const month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
            // const year = date.getFullYear();
            return `${month} ${date.getDate()}, ${date.getFullYear()}`;
            // return `${month} ${date.getDate()}`;
        }

        const showPastConcerts = ref(false);
        const pastConcertsTitle = ref();
        function togglePastConcerts() {
            showPastConcerts.value = !showPastConcerts.value;
            if (showPastConcerts.value) {
                console.log(pastConcertsTitle);
                pastConcertsTitle.value.scrollIntoView();
            }
        }

        return { agendaStore, formatDate, showPastConcerts, pastConcertsTitle, togglePastConcerts, smAndDown };
    },
}
</script>

<style scoped>
.section-agenda {
    padding-bottom: 6rem;
    text-transform: uppercase;
    text-align: center;
}

h1 {
    font-size: 2rem;
}

.date {
    font-weight: bolder;
}

.venue {
    font-weight: 400;
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
@media only screen and (min-width: 960px) {

    .date {
        text-align: end;
    }

    .tickets {
        text-align: end;
    }
}
</style>
