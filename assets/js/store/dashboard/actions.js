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

    reopenTask({commit}, payload) {
        commit('toggleLoadingState');
        axios.post('/api/task/reopen', {
            taskId: payload
        }).then(response => {
            commit('setTaskAsReopened', payload);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            commit('toggleLoadingState');
        })
    },

    stopProgress({commit}, payload) {
        commit('toggleLoadingState');
    },

    dragTask({commit}, payload) {
        commit('setDraggedTask', payload);
    },

    resetColumnsColor({commit}) {
        commit('resetColumnsColor');
    },

    showAvailableColumns({commit}, payload) {
        payload.available.forEach(column => {
            document.getElementById(column).style.background = '#1dd1a175';
        });
    },
};