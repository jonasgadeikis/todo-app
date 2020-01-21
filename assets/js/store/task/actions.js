import axios from 'axios';

export default {
    addNewTask({commit}, payload) {
        commit('toggleTaskLoadingState');
        axios.post('/api/task/create', {
            description: payload,
        }).then(response => {
            const data = response.data;

            commit('setMessage', data);
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