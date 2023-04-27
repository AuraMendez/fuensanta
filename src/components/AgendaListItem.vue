<template>
    <v-list-item>
            <div class="concerts-list">
                <p class="column date">{{ concert.date }} - {{ concert.program }}</p>
                <p class="column venue">{{ concert.venue }}, {{ concert.location }}</p>
                <span class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="editConcert(concert.id)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteConcert(concert)"></v-btn>
                </span>
            </div>
        </v-list-item>
</template>

<script>

export default {
    props: {
        concert: Object,
    },
    emits: ['edit-concert', 'delete-concert'],
    methods: {
        editConcert(id) {
            this.$emit('edit-concert', id);
        },
        deleteConcert(concert) {
            this.$emit('delete-concert', concert);
        }
    }
}
</script>

<style scoped>
.concerts-list {
    display: flex;
    flex-direction: column;
}

.column.actions {
    align-self: center;
    margin-bottom: 24px;
}

.column {
    width: 100%;
    text-align: center;
}


/* Desktop */
@media only screen and (min-width: 768px) {
    .concerts-list {
        flex-direction: row;
    }

    .column {
        width: 100%;
        text-align: left;
    }

    .column.actions {
        width: 25%;
        text-align: end;
    }
}
</style>