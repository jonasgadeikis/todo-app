import axios from 'axios';

export default {
    completeTask({commit}, payload) {
        commit('toggleLoadingState');
        axios.post('/api/task/complete', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsDone', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleLoadingState');
        });
    },

    blockTask({commit}, payload) {
        commit('toggleLoadingState');
        axios.post('/api/task/block', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsBlocked', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleLoadingState');
        });
    },

    unblockTask({commit}, payload) {
        commit('toggleLoadingState');
        axios.post('/api/task/unblock', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsUnblocked', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleLoadingState');
        });
    },

    startTask({commit}, payload) {
        commit('toggleLoadingState');
        axios.post('/api/task/start', {
            taskId: payload,
        }).then(() => {
            commit('setTaskAsStarted', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleLoadingState');
        });
    },

    getTask({commit}) {
        commit('toggleLoadingState');
        setTimeout(() => {
            axios.get('/api/task/get').then(response => {
                commit('setTasks', response.data);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                commit('toggleLoadingState');
            });
        }, 2000);
    },

    dragTask({commit}, payload) {
        commit('setDraggedTask', payload);
    },

    resetColumnsColor({commit}) {
        commit('resetColumnsColor');
    },
};