import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/views/Home.vue';
import About from '@/components/views/AppAbout.vue';
import Contact from '@/components/views/AppContact.vue';
import Projects from "@/components/views/Projects.vue";


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
        path: '/projects',
        name: 'Projects',
        component: Projects
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