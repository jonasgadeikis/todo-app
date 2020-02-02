import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Dashboard from '../views/dashboard/Dashboard';
import Create from '../views/create/Create';
import Register from '../views/register/Register';

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
        path: '/create',
        component: Create,
    },
    {
        path: '/register',
        component: Register,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;