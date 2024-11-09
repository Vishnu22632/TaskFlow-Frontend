// import Contact from "@/components/Contact.vue";
// import Home from "../components/Home.vue";
// import Projects from "../components/Projects.vue";
// import Report from "../components/Report.vue";
// import Tasks from "../components/Tasks.vue";
// import Users from "../components/Users.vue";

// const HomeView = () => import('@/components/HomeView.vue');

const Home = () => import('../components/Home.vue');
const Users = () => import('../components/Users.vue');
const Projects = () => import('../components/Projects.vue');
const Tasks = () => import('../components/Tasks.vue');
const Report = () => import('../components/Report.vue');
const Contact = () => import('../components/Contact.vue');



import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/tasks',
        component: Tasks
    },
    {
        path: '/report',
        component: Report
    },
    {
        path: '/contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


