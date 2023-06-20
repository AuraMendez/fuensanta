<template>
    <DefaultLayout>
        <div class="music-section text-center">
            <img class="title mb-8" src="../../public/title-music-min.png" alt="" height="40">

            <template v-for="(item, i) in musicStore.personalMusic" :key="i">
                <MusicItem :item="item"></MusicItem>
            </template>
            
            <img class="title mb-8" src="../../public/separator-1-min.png" alt="" height="30">
            
            <template v-for="(item, i) in musicStore.sidemanMusic" :key="i">
                <MusicItem :item="item"></MusicItem>
            </template>
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import MusicItem from '../components/MusicItem.vue';
import { useMusicStore } from '../stores/music';

export default {
    components: {
        DefaultLayout,
        MusicItem,
    },
    setup() {
        const musicStore = useMusicStore();

        return { musicStore };
    },
}
</script>

<style scoped></style>