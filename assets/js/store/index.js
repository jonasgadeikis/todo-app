import Vue from 'vue';
import Vuex from 'vuex';
import Authentication from './authentication/index';
import Dashboard from './dashboard/index';
import Create from './create/index';
import Sidebar from './sidebar/index';
import Boards from './boards/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Authentication,
        Dashboard,
        Sidebar,
        Create,
        Boards,
    },
    state: {
        loadingState: false,
    },
    getters: {
        loadingState(state) {
            return state.loadingState;
        },
    },
    mutations: {
        toggleLoadingState(state) {
            state.loadingState = !state.loadingState;
        },
    },
});