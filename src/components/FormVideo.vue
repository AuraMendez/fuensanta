
<template>
    <v-overlay v-model="showing" class="d-flex justify-space-around align-center">
        <v-card width="80vw" class="pa-16">
            <v-card-title class="d-flex mb-12">
                New video
                <v-spacer></v-spacer>
                <v-btn @click="close" append-icon="mdi-close" color="lime-darken-4">close</v-btn>
            </v-card-title>
            <v-form ref="video_form">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <p class="mb-3">Order: {{ videoForm.order }}</p>
                    </v-row>
                    <v-row>
                        <v-text-field label="Title" v-model="videoForm.title" :rules="[v => !!v || 'Title is required']"
                            required></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field label="Id" v-model="videoForm.videoId" :rules="[v => !!v || 'Id is required']"
                            required></v-text-field>
                    </v-row>
                    <v-row>
                        <p class="text-red-darken-4">{{ error }}</p>
                        <v-spacer></v-spacer>
                        <v-btn color="lime-darken-4" @click="saveVideo(null)">Save</v-btn>
                    </v-row>
                </v-container>
            </v-form>
            <div v-if="videoForm.videoId">
                <iframe :src="`https://www.youtube.com/embed/${videoForm.videoId}`" title="video.title" frameborder="0"
                    allowfullscreen></iframe>
            </div>
            <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
        </v-card>
    </v-overlay>
</template>

<script>
import { ref } from "vue";
import { addNewDoc, updateOneDoc } from "../services/firestore";
import { useVideoStore } from "@/stores/videos"

export default {
    setup() {
        const videoStore = useVideoStore();
        let videoId = null;

        const videoForm = ref({
            title: '',
            videoId: '',
            order: 0,
        });
        const error = ref('');

        function emptyVideoForm() {
            videoForm.value = {
                title: '',
                videoId: '',
                order: 0,
            }
        }

        function populateVideoForm(id) {
            const oneVideo = videoStore.getOneVideo(id);
            if (oneVideo) {
                videoForm.value = {
                    title: oneVideo.title,
                    videoId: oneVideo.videoId,
                    order: oneVideo.order,
                }
            }
        }

        // Component open and close
        const showing = ref(false);
        function open(payload) {
            if (payload.id) {
                videoId = payload.id;
                populateVideoForm(payload.id);
            } else {
                videoForm.value.order = payload.order;
            }
            showing.value = true;
        }

        function close() {
            emptyVideoForm();
            videoId = null;
            showing.value = false;
        }

        // Save video
        const video_form = ref(null);

        async function updateVideo() {
            const updated = await updateOneDoc('videos', videoId, videoForm.value);
            if (updated) {
                videoStore.getVideos();
                console.log('UPDATED:', videoId);
                close();
            } else {
                error.value = 'There was an error updating the video, try again';
            }
        }

        async function createVideo() {
            const newId = await addNewDoc('videos', videoForm.value);
            if (newId) {
                videoStore.getVideos();
                console.log('CREATED:', newId);

                close();
            } else {
                error.value = 'There was an error saving the video, try again';
            }
        }

        async function saveVideo() {
            const { valid } = await video_form.value.validate();
            if (!valid) {
                error.value = 'Please fill in all the required fields'
            } else {
                error.value = '';
                if (videoId) {
                    updateVideo();
                } else {
                    createVideo();
                }
            }
        }

        return { showing, open, close, error, videoForm, video_form, saveVideo }
    },
}
</script>

<style scoped>

p {
    color: hsla(0, 0%, 0%, 0.4);
}
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
