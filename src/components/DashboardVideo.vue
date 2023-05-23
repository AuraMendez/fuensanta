
<template>
    <div class="d-flex justify-end my-6">
        <v-btn color="lime-darken-4" variant="outlined" @click="openForm(null)">New video</v-btn>
    </div>
    <v-list>
        <v-list-item v-for="video in videoStore.videoStore" :key="video.id" >
            <div class="video-list">
                <div class="column order">
                    <v-btn variant="outlined"><v-icon icon="mdi-chevron-up"></v-icon></v-btn>
                    <v-btn variant="outlined"><v-icon icon="mdi-chevron-down"></v-icon></v-btn>
                </div>
                <p class="column title pl-4">{{ video.title }}</p>
                <div class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="editConcert(concert.id)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteConcert(concert)"></v-btn>
                </div>
            </div>
        </v-list-item>
        <!-- <AgendaListItem v-for="concert in agendaStore.futureConcerts" :key="concert.id" :concert="concert"
            @edit-concert="openForm" @delete-concert="deleteConcert"></AgendaListItem> -->

    </v-list>
    <!-- <ConcertForm ref="concert_form_component"></ConcertForm> -->
    <!-- <ConfirmDialog ref="confirm_dialog_component"></ConfirmDialog> -->
</template>

<script>
import { ref } from "vue";
// import ConcertForm from "./ConcertForm.vue";
// import ConfirmDialog from "./ConfirmDialog.vue";
// import AgendaListItem from "./AgendaListItem.vue";
import { useVideoStore } from "@/stores/videos"
import { deleteOneDoc } from "../services/firestore";


export default {
    components: {
        // ConcertForm,
        // ConfirmDialog,
        // AgendaListItem
    },
    setup() {
        const videoStore = useVideoStore();

        // Concert Form Component
        // const concert_form_component = ref();
        // function openForm(id) {
        //     if (id) {
        //         concert_form_component.value.open(id);
        //     } else {
        //         concert_form_component.value.open(null);
        //     }
        // }

        // Delete concert flow
        // const confirm_dialog_component = ref();
        // async function deleteConcert(concert) {
        //     const confirm = await confirm_dialog_component.value.open(`Are you sure you want to delete the event "${concert.program}" on ${concert.date}?`);
        //     if (confirm) {
        //         const deleted = await deleteOneDoc('concerts', concert.id);
        //         if (deleted) {
        //             console.log('DELETED:', concert.id);
        //         }
        //         videoStore.getVideos();
        //     } else {
        //         console.log('Delete canceled');
        //     }
        // }

        return { videoStore }
    },
}
</script>

<style scoped>
.video-list {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.column.title {
    flex-grow: 1;
}
</style>

