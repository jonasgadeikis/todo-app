import Vue from 'vue';
import Vuex from 'vuex';
import Dashboard from './dashboard/index';
import Task from './task/index';
import Sidebar from './sidebar/index';
import Authentication from './authentication/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Dashboard,
        Sidebar,
        Task,
        Authentication,
    },
});