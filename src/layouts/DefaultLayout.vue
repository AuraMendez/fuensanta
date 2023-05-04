<template>
    <header>
        <router-link to="/">
            <img class="title" src="../../public/fuensanta-min.png" alt="" height="80">
        </router-link>
            <img class="menu-btn" src="../../public/menu-btn-min.png" width="60" @click="overlay = true" />
    </header>
    <!-- MENU -->
    <template v-if="overlay">
        <div class="overlay" @click="overlay = false">
            <ol class="menu">
                <li v-for="(item, i) in menuItems" :key="i">
                    <router-link :to="item.route">
                        <span>
                            <img :src="`../../public/number-${i + 1}-min.png`" alt="" height="30" class="mr-6">
                            <img :src="`../../public/title-${item.name}-min.png`" alt="" height="40">
                        </span>
                        {{ (i + 1) }}. {{ item.name }}
                    </router-link>
                </li>
            </ol>
            <v-btn icon="mdi-close" class="close" variant="text" @click="overlay = false"></v-btn>
        </div>
    </template>
    <main>
        <slot></slot>
    </main>
    <footer>
        <div>
            <v-btn icon="mdi-instagram" variant="text" href="https://www.instagram.com/fuensanta.fuensanta/" target="_blank"></v-btn>
            <v-btn icon="mdi-facebook" variant="text" href="https://www.facebook.com/fuensanta.mendezlecomte" target="_blank"></v-btn>
            <v-btn icon="mdi-youtube" variant="text" href="https://www.youtube.com/@Fuensanta" target="_blank"></v-btn>
            <v-btn icon="mdi-spotify" variant="text" href="https://open.spotify.com/artist/5Tda1L0VLxqMBAThEKFIjD" target="_blank"></v-btn>
        </div>
    </footer>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {

        const menuItems = [
            { name: 'tour', route: '/tour' },
            { name: 'music', route: '/music' },
            { name: 'video', route: '/video' },
            { name: 'bio', route: '/bio' },
            { name: 'contact', route: '/contact' },
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
    background-color: rgb(245, 207, 161);
    position: fixed;
    top: 0;
    display: flex;
    padding: 2rem;
    color: var(--bg-color);
    text-align: center;
    font-size: 2rem;
}

.overlay .close {
    justify-items: end;
}

.overlay .menu {
    align-self: center;
    margin: 0 auto;
}

.overlay ol{
    list-style-type: none;
}

.menu a {
    color: white;
    text-decoration: none;
}

.menu a:hover {
    color: rgb(245, 207, 161);
    text-decoration: none;
}
</style>