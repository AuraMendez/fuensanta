<template>
    <header>
        <router-link to="/">
            <img class="title" src="../../public/fuensanta-min.png" alt="" height="80">
        </router-link>
        <img class="menu-btn" src="../../public/menu-btn-min.png" width="60" @click="overlay = true" />
    </header>
    <!-- MENU -->
    <template v-if="overlay">
        <div class="overlay" :class="overlay ? 'visible' : null" @click="overlay = false">
            <div class="menu">
                <router-link v-for="(item, i) in menuItems" :key="i" class="mb-6" :to="item.route">
                    <img :src="item.numImg" alt="" height="30" class="mr-12">
                    <img :src="item.titleImg" alt="" height="40" class="menu-item">
                </router-link>
            </div>

            <v-btn icon="mdi-close" class="close" variant="text" @click="overlay = false" color="black"></v-btn>
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

<script>
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

export default {
    setup() {

        const menuItems = [
            { route: '/tour', numImg: n1, titleImg: tourTitleImg },
            { route: '/music', numImg: n2, titleImg: musicTitleImg },
            { route: '/video', numImg: n3, titleImg: videoTitleImg },
            { route: '/bio', numImg: n4, titleImg: bioTitleImg },
            { route: '/contact', numImg: n5, titleImg: contactTitleImg },
        ];
        const overlay = ref(false);

        return { overlay, menuItems }
    }
}
</script>

<style scoped>
/* HEADER */
header {
    text-align: center;
    padding: 2rem 0;
    display: block;
}

header .menu-btn {
    position: absolute;
    right: 1.8rem;
}

header .menu-btn:hover {
    cursor: pointer;
}

main {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 3rem;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: var(--bg-color);
}

.overlay {
    width: 100%;
    height: 100vh;
    z-index: 30;
    background-color: #f8f0d9;
    position: fixed;
    top: 0;
    display: flex;
    padding: 2rem;
    color: var(--bg-color);
    text-align: center;
    font-size: 2rem;
    /* transform: scale(0.1);
    transition: transform 2s; */
}

.overla .overlay .close {
    justify-items: end;
    color: black;
}

.overlay .menu {
    align-self: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.overlay a:hover .menu-item {
    height: 42px;
}
</style>