import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import About from '/src/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { layout: 'authenticated' },
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        meta: { layout: 'authenticated' },
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
