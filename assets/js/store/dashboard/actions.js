import axios from 'axios';

export default {
    setTaskAsDone({commit}, payload) {
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

    setTaskAsBlocked({commit}, payload) {
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

    setTaskAsUnblocked({commit}, payload) {
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

    getTasks({commit}) {
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