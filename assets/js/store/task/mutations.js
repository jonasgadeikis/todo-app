export default {
    toggleTaskLoadingState(state) {
        state.taskLoadingState = !state.taskLoadingState;
    },

    setMessage(state, payload) {
        state.message = payload.message;
    },

    resetMessage(state) {
        state.message = null;
    },
};