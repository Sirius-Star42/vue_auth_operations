import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Homepage.vue';
import About from './pages/About.vue';
import Auth from './pages/auth/Auth.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/about", component: About},
        {path: "/auth", component: Auth}
    ],
    mode: 'history'
})