export default {
    setTasks(state, payload) {
        state.tasks = payload;
    },

    toggleDashboardLoadingState(state) {
        state.dashboardLoadingState = !state.dashboardLoadingState;
    },

    setTaskAsDone(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isCompleted = true;
        state.tasks.push(task);
    },

    setTaskAsBlocked(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isBlocked = true;
        state.tasks.push(task);
    },

    setTaskAsUnblocked(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isBlocked = false;
        state.tasks.push(task);
    },
};