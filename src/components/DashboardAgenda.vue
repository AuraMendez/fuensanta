
<template>
    <div class="d-flex justify-end my-6">
        <v-btn color="lime-darken-4" variant="outlined" @click="openForm(null)">New concert</v-btn>
    </div>
    <v-list>
        <AgendaListItem v-for="concert in agendaStore.futureConcerts" :key="concert.id" :concert="concert"
            @edit-concert="openForm" @delete-concert="deleteConcert"></AgendaListItem>

        <v-list-item class="mt-6">
            <h3>Past concerts</h3>
        </v-list-item>
        <v-divider class="mb-3"></v-divider>
        <AgendaListItem v-for="concert in agendaStore.pastConcerts" :key="concert.id" :concert="concert"
            @edit-concert="openForm" @delete-concert="deleteConcert"></AgendaListItem>
    </v-list>
    <ConcertForm ref="concert_form_component"></ConcertForm>
    <ConfirmDialog ref="confirm_dialog_component"></ConfirmDialog>
</template>

<script>
import { ref } from "vue";
import ConcertForm from "./ConcertForm.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import AgendaListItem from "./AgendaListItem.vue";
import { useAgendaStore } from "@/stores/agenda"
import { deleteOneDoc } from "../services/firestore";


export default {
    components: {
        ConcertForm,
        ConfirmDialog,
        AgendaListItem
    },
    setup() {
        const agendaStore = useAgendaStore();

        // Concert Form Component
        const concert_form_component = ref();
        function openForm(id) {
            if (id) {
                concert_form_component.value.open(id);
            } else {
                concert_form_component.value.open(null);
            }
        }

        // Delete concert flow
        const confirm_dialog_component = ref();
        async function deleteConcert(concert) {
            const confirm = await confirm_dialog_component.value.open(`Are you sure you want to delete the event "${concert.program}" on ${concert.date}?`);
            if (confirm) {
                const deleted = await deleteOneDoc('concerts', concert.id);
                if (deleted) {
                    console.log('DELETED:', concert.id);
                }
                agendaStore.getConcerts();
            } else {
                console.log('Delete canceled');
            }
        }

        return { concert_form_component, confirm_dialog_component, openForm, agendaStore, deleteConcert }
    },
}
</script>

