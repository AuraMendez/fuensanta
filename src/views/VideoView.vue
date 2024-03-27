<template>
    <DefaultLayout :showName="true">
        <div class="video-section text-center">

            <div class="page-title">
                <img class="title" src="../../public/title-video-min.png" alt="">
                <br />
                <img class="icon" src="../../public/img-escarabajo-min.png" alt="">
            </div>


            <div class="videos">
                <template v-for="video in videoStore.videoStore" :key="video.id">
                    <iframe :src="`https://www.youtube.com/embed/${video.videoId}`" title="video.title" frameborder="0"
                        allowfullscreen></iframe>
                </template>
                <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { useVideoStore } from '../stores/videos';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const videoStore = useVideoStore();

</script>

<style scoped>
h1 {
    text-align: center;
}

.videos {
    display: flex;
    flex-direction: column;
    align-items: center;
}

iframe {
    width: 100%;
    max-width: 600px;
    aspect-ratio: 16 / 9;
    margin: 1rem 0;
}
</style>