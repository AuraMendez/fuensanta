
<template>
    <div class="d-flex justify-end my-6">
        <v-btn color="lime-darken-4" variant="outlined" @click="openForm">New concert</v-btn>
    </div>
    <v-list>
        <v-list-item v-for="concert in agendaStore.futureConcerts" :key="concert.id">
            <div class="concerts-list">

                <p class="column date">{{ concert.date }} - {{ concert.program }}</p>
                <p class="column venue">{{ concert.venue }}, {{ concert.location }}</p>
                <span class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteConcert(concert)"></v-btn>
                </span>
            </div>
        </v-list-item>
        <v-list-item class="mt-6">
            <h3>Past concerts</h3>
        </v-list-item>
        <v-divider class="mb-3"></v-divider>
        <v-list-item v-for="concert in agendaStore.pastConcerts" :key="concert.id">
            <div class="concerts-list">
                <p class="column date">{{ concert.date }} - {{ concert.program }}</p>
                <p class="column venue">{{ concert.venue }}, {{ concert.location }}</p>
                <span class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text"></v-btn>
                </span>
            </div>
        </v-list-item>
    </v-list>
    <ConcertForm ref="concert_form_component"></ConcertForm>
    <ConfirmDialog ref="confirm_dialog_component"></ConfirmDialog>

</template>

<script>
import { ref } from "vue";
import ConcertForm from "./ConcertForm.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import { useAgendaStore } from "@/stores/agenda"
import { deleteOneDoc } from "../services/firestore";


export default {
    components: {
        ConcertForm,
        ConfirmDialog,
    },
    setup() {
        const agendaStore = useAgendaStore();
        const concert_form_component = ref();
        const confirm_dialog_component = ref();

        function openForm() {
            concert_form_component.value.open();
        }

        async function deleteConcert(concert) {
            const confirm = await confirm_dialog_component.value.open(`Are you sure you want the event ${concert.program} on ${concert.date}?`);
            if (confirm) {
                await deleteOneDoc('concerts', concert.id);
                agendaStore.getConcerts();
            } else {
                console.log('Delete canceled');
            }
        }

        return { concert_form_component, confirm_dialog_component, openForm, agendaStore, deleteConcert }
    },
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
