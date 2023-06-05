<template>
    <DefaultLayout>
        <div class="music-section text-center">
            <img class="title mb-8" src="../../public/title-music-min.png" alt="" height="30">

            <v-list>
                <v-list-item v-for="(doc, i) in musicStore.personalMusic" :key="i">
                    {{ doc.img }}
                </v-list-item>
            </v-list>
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { useMusicStore } from '../stores/music';

export default {
    components: {
        DefaultLayout,
    },
    setup() {
        const musicStore = useMusicStore();

        return { musicStore };
    },
}
</script>

<style scoped></style>