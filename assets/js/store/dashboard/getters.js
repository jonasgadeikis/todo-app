export default {
    tasks(state) {
        return state.tasks;
    },

    dashboardLoadingState(state) {
        return state.dashboardLoadingState;
    },

    toDoTasks(state) {
        return state.tasks.filter(task => {
            return !task.isInProgress && !task.isCompleted && !task.isBlocked;
        });
    },

    inProgressTasks(state) {
        return state.tasks.filter(task => {
            return task.isInProgress;
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