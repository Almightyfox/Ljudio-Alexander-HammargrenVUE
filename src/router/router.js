import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Contact from '/src/components/Contact.vue'
import MusicPlayer from '/src/components/MusicPlayer.vue'
import Artist from '../views/Artist.vue'
import Songs from '../views/Songs.vue'

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/songs/:videoId',
        name: 'songs',
        component: Songs,
    },
    // {
    //     path: '/musticplayer/:videoId',
    //     name: 'musicplayer',
    //     component: MusicPlayer,
    // },
    {
        path: '/artist/:browseId',
        name: 'artist',
        component: Artist,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router