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

    toDoTasks(state) {
        return state.tasks.filter(task => {
            return !task.isInProgress && !task.isCompleted && !task.isBlocked;
        }).sort((a, b) =>
            (a.priority > b.priority) ? -1
            : ((a.priority < b.priority) ? 1
            : 0
        ));
    },

    inProgressTasks(state) {
        return state.tasks.filter(task => {
            return task.isInProgress;
        }).sort((a, b) =>
            (a.priority > b.priority) ? -1
            : ((a.priority < b.priority) ? 1
            : 0
        ));
    },

    completedTasks(state) {
        return state.tasks.filter(task => {
            return task.isCompleted;
        }).sort((a, b) =>
            (a.priority > b.priority) ? -1
            : ((a.priority < b.priority) ? 1
            : 0
        ));
    },

    blockedTasks(state) {
        return state.tasks.filter(task => {
            return task.isBlocked;
        }).sort((a, b) =>
            (a.priority > b.priority) ? -1
            : ((a.priority < b.priority) ? 1
            : 0
        ));
    },

    draggedTask(state) {
        return state.draggedTask;
    },
};