
<template>
    <div class="section-agenda">
        <div class="page-title">
            <img class="title" src="../../public/title-tour-min.png" alt="">
            <br />
            <img class="icon" src="../../public/img-pajarraco-min.png" alt="">
        </div>

        <v-container class="agenda-list">
            <template v-for="(concert, i) in agendaStore.futureConcerts" :key="concert.id">
                <v-divider v-if="smAndDown && i" class="my-9"></v-divider>
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
                        <div v-else-if="concert.ticketsUrl" class="tickets-btn">
                            <a :href="concert.ticketsUrl" target="_blank">
                                <img src="../../public/tickets-btn-up-min.png" alt="" height="39">
                            </a>
                        </div>
                    </v-col>
                </v-row>
            </template>
        </v-container>

        <div ref="pastConcertsTitle" class="past-concerts-header agenda-list my-6" @click="togglePastConcerts">
            <img src="../../public/past-concerts-1-min.png" alt="" height="30">
            <v-icon v-if="showPastConcerts" icon="mdi-chevron-up"></v-icon>
            <v-icon v-else icon="mdi-chevron-down"></v-icon>
        </div>

        <v-container class="agenda-list" v-if="showPastConcerts">
            <template v-for="(concert, i) in agendaStore.pastConcerts" :key="concert.id">
                <v-divider v-if="smAndDown && i" class="my-9"></v-divider>
                <v-row class="past-concerts">
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
        const { smAndDown } = useDisplay();

        const agendaStore = useAgendaStore();

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        function formatDate(dateStr) {
            const date = new Date(dateStr);
            const month = months[date.getUTCMonth()].toUpperCase();
            return `${month} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
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

.agenda-list {
    max-width: var(--ma);
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

/* .tickets-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
    height: 40px;
} */

.past-concerts-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
    gap: 50px;
}

.past-concerts-header:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.past-concerts p {
    color: rgba(0, 0, 0, 0.6);
}

.tickets-btn img:hover {
    height: 40px;
}

/* Desktop */
@media only screen and (min-width: 960px) {

    .date {
        text-align: end;
    }
}
</style>
