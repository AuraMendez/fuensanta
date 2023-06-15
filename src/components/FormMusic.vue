
<template>
    <v-overlay v-model="showing" class="d-flex justify-space-around align-center">
        <v-card width="80vw" class="pa-16">
            <v-card-title class="d-flex mb-12">
                New music
                <v-spacer></v-spacer>
                <v-btn @click="close" append-icon="mdi-close" color="lime-darken-4">close</v-btn>
            </v-card-title>
            <v-form ref="music_form">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                        <p class="mb-3">Order: {{ orderToDisplay }}
                        </p>
                    </v-row>
                    <v-row>
                        <v-text-field label="Title" v-model="musicForm.title" :rules="[v => !!v || 'Title is required']"
                            required></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field label="URL" v-model="musicForm.url" :rules="[v => !!v || 'URL is required']"
                            required></v-text-field>
                    </v-row>
                    <v-row>
                        <v-radio-group v-model="musicForm.section">
                            <v-radio label="Personal" value="personal"></v-radio>
                            <v-radio label="Sideman" value="sideman"></v-radio>
                        </v-radio-group>
                    </v-row>
                    <v-row v-if="musicForm.img">
                        <img :src="musicForm.img.url" alt="">
                        <div class="ml-6">
                            <p class="mb-12">{{ musicForm.img.name }}</p>
                            <v-btn variant="outlined">Change image</v-btn>
                        </div>
                    </v-row>
                    <v-row v-else>
                        <v-file-input label="Upload your image" v-model="imageUpload"
                            accept="image/png, image/jpeg"></v-file-input>
                        <v-btn class="ml-6 mt-3" @click="processImage" variant="outlined">Upload</v-btn>
                    </v-row>
                    <v-row>
                        <p class="text-red-darken-4">{{ error }}</p>
                        <v-spacer></v-spacer>
                        <v-btn color="lime-darken-4" @click="saveMusic(null)">Save</v-btn>
                    </v-row>
                </v-container>
            </v-form>
            <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
        </v-card>
    </v-overlay>
</template>

<script>
import { computed, ref } from "vue";
import { addNewDoc, updateOneDoc } from "../services/firestore";
import { uploadImage } from "../services/storage";
import { useMusicStore } from "@/stores/music"

export default {
    setup() {
        const musicStore = useMusicStore();
        let musicId = null;
        let ogSection = null;
        const musicFormDefault = {
            title: '',
            img: null,
            url: '',
            section: 'personal',
            order: 0,
        };
        const newOrder = {
            personal: 0,
            sideman: 0,
        };

        const orderToDisplay = computed(() => {
            if (musicId) {
                if (musicForm.value.section === ogSection) {
                    return musicForm.value.order;
                }
            }
            return newOrder[musicForm.value.section]
        })

        const musicForm = ref(musicFormDefault);
        const error = ref('');

        function emptyMusicForm() {
            musicForm.value = musicFormDefault;
        }

        function populateMusicForm(id) {
            const oneMusicItem = musicStore.getOneMusicItem(id);
            if (oneMusicItem) {
                musicForm.value = {
                    title: oneMusicItem.title,
                    img: oneMusicItem.img,
                    url: oneMusicItem.url,
                    section: oneMusicItem.section,
                    order: oneMusicItem.order,
                };
                ogSection = oneMusicItem.section;
            }
        }

        // Component open and close
        const showing = ref(false);
        function open(payload) {
            newOrder.personal = payload.orderPersonal;
            newOrder.sideman = payload.orderSideman
            if (payload.id) {
                musicId = payload.id;
                populateMusicForm(payload.id);
            }
            showing.value = true;
        }

        function close() {
            emptyMusicForm();
            musicId = null;
            showing.value = false;
        }

        // Save music
        const music_form = ref(null);

        async function updateMusic() {
            // musicForm.value.order = newOrder.value[musicForm.value.section]
            const updated = await updateOneDoc('music', musicId, musicForm.value);
            if (updated) {
                musicStore.getMusic();
                console.log('UPDATED:', musicId);
                close();
            } else {
                error.value = 'There was an error updating the music item, try again';
            }
        }

        async function createMusic() {
            const newId = await addNewDoc('music', musicForm.value);
            if (newId) {
                musicStore.getMusic();
                console.log('CREATED:', newId);

                close();
            } else {
                error.value = 'There was an error saving the music item, try again';
            }
        }

        async function saveMusic() {
            const { valid } = await music_form.value.validate();
            if (!valid) {
                error.value = 'Please fill in all the required fields'
            } else {
                error.value = '';
                if (musicId) {
                    updateMusic();
                } else {
                    createMusic();
                }
            }
        }

        // IMAGE UPLOAD
        const imageUpload = ref(null)
        async function processImage() {
            const upload = await uploadImage(imageUpload.value[0]);
            if (upload.status === 'success') {
                musicForm.value.img = upload.img;
            } else {
                error.value = `Error uploading the image. Code: ${upload.code}`;
            }
        }

        return { showing, open, close, error, musicForm, music_form, saveMusic, imageUpload, processImage, orderToDisplay }
    },

}
</script>

<style scoped>
p {
    color: hsla(0, 0%, 0%, 0.4);
}

img {
    height: 200px;
}

/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
