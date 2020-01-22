export default {
    tasks(state) {
        return state.tasks;
    },

    dashboardLoadingState(state) {
        return state.dashboardLoadingState;
    },

    uncompletedTasks(state) {
        return state.tasks.filter(task => {
            return !task.isCompleted && !task.isBlocked;
        });
    },

    completedTasks(state) {
        return state.tasks.filter(task => {
            return task.isCompleted;
        });
    },

    blockedTasks(state) {
        return state.tasks.filter(task => {
            return task.isBlocked;
        });
    },
};