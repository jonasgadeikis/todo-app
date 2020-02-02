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

    startTask({commit}, payload) {
        commit('toggleDashboardLoadingState');
        axios.post('/api/task/start', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsStarted', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleDashboardLoadingState');
        });
    },

    getTask({commit}) {
        commit('toggleDashboardLoadingState');
        setTimeout(() => {
            axios.get('/api/task/get').then(response => {
                commit('setTasks', response.data);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                commit('toggleDashboardLoadingState');
            });
        }, 2000);
    },

    dragTask({commit}, payload) {
        commit('setDraggedTask', payload);
    },
};