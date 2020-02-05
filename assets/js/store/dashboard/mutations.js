export default {
    setTasks(state, payload) {
        state.tasks = payload;
    },

    setTaskAsDone(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isInProgress = false;
        task.isCompleted = true;
        state.tasks.push(task);
    },

    setTaskAsBlocked(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isInProgress = false;
        task.isBlocked = true;
        state.tasks.push(task);
    },

    setTaskAsUnblocked(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isInProgress = true;
        task.isBlocked = false;
        state.tasks.push(task);
    },

    setTaskAsStarted(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isInProgress = true;
        state.tasks.push(task);
    },

    setTaskAsReopened(state, payload) {
        const task = state.tasks.find(task => {
            return task.id === payload;
        });

        state.tasks.splice(state.tasks.indexOf(task), 1);
        task.isCompleted = false;
        state.tasks.push(task);
    },

    setDraggedTask(state, payload) {
        state.draggedTask = payload;
    },

    resetColumnsColor(state) {
        state.allColumns.forEach(column => {
            document.getElementById(column).style.background = 'white';
        });
    },
};