import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import Report from "../components/Report.vue";
import Tasks from "../components/Tasks.vue";
import Users from "../components/Users.vue";
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


