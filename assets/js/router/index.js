import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Dashboard from '../views/dashboard/Dashboard';
import Create from '../views/create/Create';
import Boards from '../views/boards/Boards';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/board/:id',
        component: Dashboard,
    },
    {
        path: '/create',
        component: Create,
    },
    {
        path: '/boards',
        component: Boards,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;