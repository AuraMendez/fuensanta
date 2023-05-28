<template>
    <!-- ENGLISH -->
    <div v-if="edit === 'en'" class="d-flex">
        <v-textarea label="English" v-model="bio.en" rows="10"></v-textarea>
        <div class="d-flex flex-column justify-space-between align-center">
            <v-btn density="compact" variant="text" icon="mdi-close" class="ml-3" @click="edit = ''"></v-btn>
            <v-btn variant="text" color="lime-darken-4" icon="mdi-content-save" class="mb-6 " @click="save('en')"></v-btn>
        </div>
    </div>
    <v-card v-else class="text-card" variant="outlined">
        <v-card-title class="d-flex">
            English
            <v-spacer></v-spacer>
            <v-btn density="compact" variant="text" icon="mdi-pencil" class="ml-3" @click="editBio('en')"></v-btn>
        </v-card-title>
        <v-card-text>
            <div v-for="(text, index) in bioStore.bio.en.split('\n')" :key="index">
                {{ text }}
            </div>
        </v-card-text>
    </v-card>
    <!-- SPANISH -->
    <div v-if="edit === 'es'" class="d-flex">
        <v-textarea label="Spanish" v-model="bio.es" rows="10"></v-textarea>
        <div class="d-flex flex-column justify-space-between align-center">
            <v-btn density="compact" variant="text" icon="mdi-close" class="ml-3" @click="edit = ''"></v-btn>
            <v-btn variant="text" color="lime-darken-4" icon="mdi-content-save" class="mb-6 " @click="save('es')"></v-btn>
        </div>
    </div>
    <v-card v-else class="text-card" variant="outlined">
        <v-card-title class="d-flex">
            Spanish
            <v-spacer></v-spacer>
            <v-btn density="compact" variant="text" icon="mdi-pencil" class="ml-3" @click="editBio('es')"></v-btn>
        </v-card-title>
        <v-card-text>
            <div v-for="(text, index) in bioStore.bio.es.split('\n')" :key="index">
                {{ text }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { ref } from "vue";
import { updateOneDoc } from "../services/firestore";
import { useBioStore } from "../stores/bios";

export default {
    setup() {
        const bioStore = useBioStore();

        const edit = ref('');
        const bio = ref({ en: '', es: '' });

        function editBio(lang) {
            edit.value = lang;
            bio.value[lang] = bioStore.bio[lang];
        }

        async function save(lang) {
            const updated = await updateOneDoc('bio', lang, { text: bio.value[lang] });
            if (updated) {
                bioStore.getBios();
                console.log('SAVED', lang);
            }
            edit.value = '';
        }

        return { edit, bio, save, bioStore, editBio }
    }
}
</script>

<style>
.text-card {
    width: 100%;
    margin-bottom: 24px;
}
</style>