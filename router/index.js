import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/views/Home.vue';
import About from '@/components/views/AppAbout.vue';
import Portfolio from '@/components/views/AppPortfolio.vue';
import Contact from '@/components/views/AppContact.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;