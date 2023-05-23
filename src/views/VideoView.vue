<template>
    <DefaultLayout>
        <div class="video-section text-center">

            <img class="title mb-8" src="../../public/title-video-min.png" alt="" height="30">

            <div class="videos">
                <template v-for="video in videos" :key="video.id">
                    <iframe :src="`https://www.youtube.com/embed/${video.id}`"
                    title="video.title" frameborder="0"
                    allowfullscreen></iframe>
                </template>
                <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';

const videos = [
    {title: 'Avalancha Dorada', id: 'J5bnBeVxppo'},
    {title: 'Canción contra mi apatía', id: '_jnUeRaU8hc'},
    // {title: '', id: ''},
]
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