<template>
    <DefaultLayout>
        <div class="bio-section text-center">
            <div class="page-title">
                <img class="title" src="../../public/title-bio-min.png" alt="">
                <br/>
                <img class="icon" src="../../public/img-cajita-min.png" alt="">
            </div>

            <span>
                <v-btn variant="text" @click="lang = 'en'">EN</v-btn> | 
                <v-btn variant="text" @click="lang = 'es'">ES</v-btn>
            </span>
            <div class="text">
                <p v-for="(text, index) in bioStore.bio[lang].split('\n')" :key="index">
                    {{ text }}
                </p>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { useBioStore } from "@/stores/bios"

const bioStore = useBioStore();
const lang = ref('en');
</script>

<style scoped>

.text {
    max-width: var(--max-width);
    text-align: justify;
    margin: 0 auto;
}

.text p {
    margin-top: 16px;
}
</style>