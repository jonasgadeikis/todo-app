export default {
    tasks(state) {
        return state.tasks;
    },

    columns(state) {
        return state.columns;
    },

    allColumns(state) {
        return state.allColumns;
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

    draggedTask(state) {
        return state.draggedTask;
    },
};