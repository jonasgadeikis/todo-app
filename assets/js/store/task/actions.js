import axios from 'axios';

export default {
    addNewTask({commit}, payload) {
        commit('toggleTaskLoadingState');
        axios.post('/api/task/create', {
            description: payload,
        }).then(response => {
            commit('setMessage', response.data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleTaskLoadingState');
        });
    },

    resetMessage({commit}) {
        commit('resetMessage');
    },
};