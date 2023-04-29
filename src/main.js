import { createApp } from 'vue'
import App from './App.vue'
// Pinia
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Router
import router from './router'

import './assets/main.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    components,
    directives,
})

let app;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User logged in:',user.uid);
    } else {
        console.log('User signed out');
    }

    if (!app) {
        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.use(vuetify)

        app.mount('#app')
    }
});
