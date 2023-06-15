
<template>
    <div class="d-flex justify-space-between align-center my-6">
        <p class="mr-4">Note: please be patient when clicking the up and down arrows. It takes a second to make the change.
        </p>
        <v-btn color="lime-darken-4" variant="outlined" @click="openForm(null)">New music</v-btn>
    </div>
    <v-list>
        <v-list-item title="PERSONAL PROJECTS"></v-list-item>
        <v-list-item v-for="(music, i) in musicStore.personalMusic" :key="music.id">
            <div class="music-list">
                <div class="column order d-flex">
                    <v-btn v-if="i !== musicStore.musicStore.length - 1" density="compact" variant="outlined"
                        class="arrow-btn down" @click="changeOrder(music, musicStore.musicStore[i + 1])">
                        <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-if="i" density="compact" variant="outlined" class="arrow-btn up"
                        @click="changeOrder(music, musicStore.musicStore[i - 1])">
                        <v-icon icon="mdi-chevron-up"></v-icon>
                    </v-btn>
                </div>
                <p class="column title pl-4">{{ music.title }}</p>
                <div class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="openForm(music.id)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteMusic(music)"></v-btn>
                </div>
            </div>
        </v-list-item>
        <v-list-item title="SIDEMAN PROJECTS"></v-list-item>
        <v-list-item v-for="(music, i) in musicStore.sidemanMusic" :key="music.id">
            <div class="music-list">
                <div class="column order d-flex">
                    <v-btn v-if="i !== musicStore.musicStore.length - 1" density="compact" variant="outlined"
                        class="arrow-btn down" @click="changeOrder(music, musicStore.musicStore[i + 1])">
                        <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-if="i" density="compact" variant="outlined" class="arrow-btn up"
                        @click="changeOrder(music, musicStore.musicStore[i - 1])">
                        <v-icon icon="mdi-chevron-up"></v-icon>
                    </v-btn>
                </div>
                <p class="column title pl-4">{{ music.title }}</p>
                <div class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="openForm(music.id)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteMusic(music)"></v-btn>
                </div>
            </div>
        </v-list-item>
    </v-list>
    <MusicForm ref="music_form_component"></MusicForm>
    <ConfirmDialog ref="confirm_dialog_component"></ConfirmDialog>
</template>

<script>
import { ref } from "vue";
import FormMusic from "./FormMusic.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import { updateOneDoc } from "../services/firestore";
import { useMusicStore } from "@/stores/music"
import { deleteOneDoc } from "../services/firestore";


export default {
    components: {
        MusicForm: FormMusic,
        ConfirmDialog,
    },
    setup() {
        const musicStore = useMusicStore();

        // Music Form Component
        const music_form_component = ref();
        function openForm(id) {
            const payload = {
                id: null,
                orderPersonal: musicStore.newPersonalOrder,
                orderSideman: musicStore.newSidemanOrder,
            }
            if (id) payload.id = id;
            music_form_component.value.open(payload);
        }

        // Delete music flow
        const confirm_dialog_component = ref();
        async function deleteMusic(music) {
            const confirm = await confirm_dialog_component.value.open(`Are you sure you want to delete the music "${music.title}"?`);
            if (confirm) {
                const deleted = await deleteOneDoc('music', music.id);
                if (deleted) {
                    console.log('DELETED:', music.id);
                }
                musicStore.getMusic();
            } else {
                console.log('Delete canceled');
            }
        }

        async function changeOrder(a, b) {
            // console.log('Exchange:', a, b);
            const updated1 = await updateOneDoc('music', a.id, { order: b.order });
            const updated2 = await updateOneDoc('music', b.id, { order: a.order });
            if (updated1 && updated2) {
                musicStore.getMusic();
            } else {
                window.alert(`There was an error with this operations. Please contact Aura and let her know that this in in regards to the music "${a.title}" and "${b.title}"`);
            }
        }

        return { music_form_component, confirm_dialog_component, musicStore, openForm, deleteMusic, changeOrder }
    },
}
</script>

<style scoped>
.music-list {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.column.title {
    flex-grow: 1;
}

.column.order {
    min-width: 135px;
}
</style>

