import axios from 'axios';

export default {
    completeTask({commit}, payload) {
        commit('toggleDashboardLoadingState');
        axios.post('/api/task/complete', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsDone', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },

    blockTask({commit}, payload) {
        commit('toggleDashboardLoadingState');
        axios.post('/api/task/block', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsBlocked', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },

    unblockTask({commit}, payload) {
        commit('toggleDashboardLoadingState');
        axios.post('/api/task/unblock', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsUnblocked', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },

    getTask({commit}) {
        commit('toggleDashboardLoadingState');
        axios.get('/api/task/get').then(response => {
            const data = response.data;
            commit('setTasks', data);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },
};