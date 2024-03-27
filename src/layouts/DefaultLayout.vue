<template>
    <header>
        <router-link to="/">
            <img v-if="props.showName" class="title" src="../../public/fuensanta-3-min.png" alt="">
            <p v-else>(logo)</p>
        </router-link>
        <img class="menu-btn" src="../../public/menu-btn-min.png" @click="overlay = true" />
    </header>
    <!-- MENU -->
    <template v-if="overlay">
        <div class="overlay" :class="overlay ? 'visible' : null" @click="overlay = false">
            <div class="close-btn">
                <img src="../../public/btn-x-min.png" alt="close" @click="overlay = false">
            </div>

            <div class="menu">
                <img class="menu-img" src="../../public/dibujo-vertical-min.png" alt="">
                <div class="menu-list">
                    <router-link v-for="(item, i) in menuItems" :key="i" class="mb-6" :to="item.route">
                        <img :src="item.numImg" alt="" height="30" class="mr-12">
                        <img :src="item.titleImg" alt="" :height="item.route === '/music' ? 50 : 40" class="menu-item">
                    </router-link>
                </div>
            </div>

        </div>
    </template>
    <main>
        <slot></slot>
    </main>
    <footer>
        <div>
            <v-btn icon="mdi-instagram" variant="text" href="https://www.instagram.com/fuensanta.fuensanta/"
                target="_blank"></v-btn>
            <v-btn icon="mdi-facebook" variant="text" href="https://www.facebook.com/fuensanta.mendezlecomte"
                target="_blank"></v-btn>
            <v-btn icon="mdi-youtube" variant="text" href="https://www.youtube.com/@Fuensanta" target="_blank"></v-btn>
            <v-btn icon="mdi-spotify" variant="text" href="https://open.spotify.com/artist/5Tda1L0VLxqMBAThEKFIjD"
                target="_blank"></v-btn>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

import tourTitleImg from '../../public/title-tour-min.png'
import musicTitleImg from '../../public/title-music-min.png'
import videoTitleImg from '../../public/title-video-min.png'
import bioTitleImg from '../../public/title-bio-min.png'
import contactTitleImg from '../../public/title-contact-min.png'
import n1 from '../../public/number-1-min.png'
import n2 from '../../public/number-2-min.png'
import n3 from '../../public/number-3-min.png'
import n4 from '../../public/number-4-min.png'
import n5 from '../../public/number-5-min.png'

const props = defineProps(['showName'])

const overlay = ref(false);

const menuItems = [
    { route: '/tour', numImg: n1, titleImg: tourTitleImg },
    { route: '/music', numImg: n2, titleImg: musicTitleImg },
    { route: '/video', numImg: n3, titleImg: videoTitleImg },
    { route: '/bio', numImg: n4, titleImg: bioTitleImg },
    { route: '/contact', numImg: n5, titleImg: contactTitleImg },
];

</script>

<style scoped>
/* HEADER */
header {
    width: 100%;
    height: 30px;
    /* min-height: 50px; */
    /* max-height: 75px; */
    /* padding: 1rem 0; */
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header a {
    height: 100%;
    width: 100%;
}

header .menu-btn {
    padding-right: 2rem;
    height: 100%;
    flex-shrink: 0;
}

header .menu-btn:hover {
    cursor: pointer;
    transform: scale(103%);
}

header .title {
    padding: 0 2rem;
    height: 20px;
}

/* BODY */
main {
    max-width: 1200px;
    margin: 1rem auto 6rem auto;
    padding: 0 3rem;
}

/* FOOTER */
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: var(--bg-color);
}

/* MENU */
.overlay {
    width: 100%;
    height: 100vh;
    padding: 2rem;
    z-index: 30;
    background-color: var(--bg-color);
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    /* position: relative; */
    /* transform: scale(0.1);
    transition: transform 2s; */
}

.overlay .close-btn {
    align-self: flex-end;
    height: 35px;
}

.overlay .close-btn img {
    height: 20px;
}

.overlay .close-btn img:hover {
    cursor: pointer;
    transform: scale(105%);
}

.overlay .menu {
    display: flex;
    gap: 3rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
}

.overlay .menu .menu-img {
    max-width: 40%;
    height: 70vh;
    display: none;
    position: absolute;
    left: 25%;
}

.overlay .menu .menu-list {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
}

.overlay .menu .menu-list a:hover {
    transform: scale(103%);
}

/* Tablet */
@media (min-width: 481px) {
    header {
        height: 40px;
        margin: 2rem 0;
    }
}

/* Laptop */
@media (min-width: 769px) {

    .overlay .menu .menu-img {
        display: block;
    }
}
</style>