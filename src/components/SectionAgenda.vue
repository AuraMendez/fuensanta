
<template>
    <div>
        <h2>Tour Dates</h2>
        <v-list>
            <v-list-item v-for="concert in tourDates" :key="concert.id">
                <div class="list-item">

                    <div class="column">
                        <v-list-item-title>{{ concert.date }}</v-list-item-title>
                        <v-list-item-subtitle>{{ concert.program }}</v-list-item-subtitle>
                        <v-list-item-subtitle v-if="concert.description && !seeMore">
                            <v-btn flat @click="showDescription(concert.id)">See more</v-btn>
                        </v-list-item-subtitle>
                        <div v-if="seeMore == concert.id">{{ concert.description }}</div>
                        <v-list-item-subtitle v-if="seeMore === concert.id">
                            <v-btn flat @click="hideDescription">See less</v-btn>
                            </v-list-item-subtitle>
                    </div>
                    <div class="column city">
                        <v-list-item-subtitle>{{ concert.venue }}</v-list-item-subtitle>
                        <v-list-item-title>{{ concert.city }}</v-list-item-title>
                    </div>
                    <div class="column tickets">
                        <p v-if="concert.soldOut">Sold out</p>
                        <p v-else-if="concert.freeEntrance">Free entrance</p>
                        <v-btn v-else>Tickets</v-btn>
                    </div>
                </div>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: '',
            seeMore: 0,
            tourDates: [
                {
                    id: 1,
                    date: '2023-04-12',
                    program: 'Solo concert',
                    venue: 'Muziekgebouw',
                    city: 'Amsterdam (NL)',
                    ticketsUrl: 'http://randomurl.com',
                    soldOut: false,
                    freeEntrance: false,
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident iste saepe quod, qui quae consequatur corrupti, iure, illum dolorem reiciendis nisi asperiores esse? Ea ipsa numquam adipisci obcaecati consequuntur nihil!',
                },
                {
                    id: 2,
                    date: '2023-04-23',
                    program: 'Perselí',
                    venue: 'Jamboree',
                    city: 'Barcelona (ES)',
                    ticketsUrl: 'http://randomurl.com',
                    soldOut: false,
                    freeEntrance: true,
                    description: '',
                },
                {
                    id: 3,
                    date: '2023-01-15',
                    program: 'Ensamble grande',
                    venue: 'Bimhuis',
                    city: 'Amsterdam (NL)',
                    ticketsUrl: 'http://randomurl.com',
                    soldOut: true,
                    freeEntrance: false,
                    description: '',
                },
            ],
        }
    },
    methods: {
        showDescription(id) {
            this.seeMore = id;
        },
        hideDescription() {
            this.seeMore = 0;
        }
    }
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
