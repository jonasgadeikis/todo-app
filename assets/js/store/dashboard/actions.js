import axios from 'axios';

export default {
    setTaskAsDone({commit}, payload) {
        commit('toggleDashboardLoadingState');
        axios.post('/api/completeTask', {
            taskId: payload,
        }).then(response => {
            commit('setTaskAsDone', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },

    getTasks({commit}) {
        axios.get('/api/getTask').then(response => {
            const data = response.data;

            commit('setTasks', data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {

        });
    }
};