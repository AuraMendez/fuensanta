
<template>
    <div class="d-flex justify-space-between align-center my-6">
        <p class="mr-4">Note: please be patient when clicking the up and down arrows. It takes a second to make the change.</p>
        <v-btn color="lime-darken-4" variant="outlined" @click="openForm(null)">New video</v-btn>
    </div>
    <v-list>
        <v-list-item v-for="(video, i) in videoStore.videoStore" :key="video.id">
            <div class="video-list">
                <div class="column order d-flex">
                    <v-btn v-if="i !== videoStore.videoStore.length - 1" density="compact" variant="outlined"
                        class="arrow-btn down" @click="changeOrder(video, videoStore.videoStore[i + 1])">
                        <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn> 
                    <v-spacer></v-spacer>
                    <v-btn v-if="i" density="compact" variant="outlined" class="arrow-btn up"
                        @click="changeOrder(video, videoStore.videoStore[i - 1])">
                        <v-icon icon="mdi-chevron-up"></v-icon>
                    </v-btn>
                </div>
                <p class="column title pl-4">{{ video.title }}</p>
                <div class="column actions">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="openForm(video.id)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" @click="deleteVideo(video)"></v-btn>
                </div>
            </div>
        </v-list-item>
    </v-list>
    <VideoForm ref="video_form_component"></VideoForm>
    <ConfirmDialog ref="confirm_dialog_component"></ConfirmDialog>
</template>

<script>
import { ref } from "vue";
import FormVideo from "./FormVideo.vue";
import ConfirmDialog from "./ConfirmDialog.vue";
import { updateOneDoc } from "../services/firestore";
import { useVideoStore } from "@/stores/videos"
import { deleteOneDoc } from "../services/firestore";


export default {
    components: {
        VideoForm: FormVideo,
        ConfirmDialog,
    },
    setup() {
        const videoStore = useVideoStore();

        // Video Form Component
        const video_form_component = ref();
        function openForm(id) {
            if (id) {
                video_form_component.value.open({ id });
            } else {
                video_form_component.value.open({ id: null, order: videoStore.newItemOrder });
            }
        }

        // Delete video flow
        const confirm_dialog_component = ref();
        async function deleteVideo(video) {
            const confirm = await confirm_dialog_component.value.open(`Are you sure you want to delete the video "${video.title}"?`);
            if (confirm) {
                const deleted = await deleteOneDoc('videos', video.id);
                if (deleted) {
                    console.log('DELETED:', video.id);
                }
                videoStore.getVideos();
            } else {
                console.log('Delete canceled');
            }
        }

        async function changeOrder(a, b) {
            // console.log('Exchange:', a, b);
            const updated1 = await updateOneDoc('videos', a.id, {order: b.order});
            const updated2 = await updateOneDoc('videos', b.id, {order: a.order});
            if (updated1 && updated2) {
                videoStore.getVideos();
            } else {
                window.alert(`There was an error with this operations. Please contact Aura and let her know that this in in regards to the videos "${a.title}" and "${b.title}"`);
            }
        }

        return { video_form_component, confirm_dialog_component, videoStore, openForm, deleteVideo, changeOrder }
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

.column.order {
    min-width: 135px;
}
</style>

