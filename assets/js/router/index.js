import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Dashboard from '../views/dashboard/Dashboard';
import Task from '../views/task/Task';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/task',
        component: Task,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;