export default {
    setMessage(state, payload) {
        state.message = payload.message;
    },

    resetMessage(state) {
        state.message = null;
    },
};