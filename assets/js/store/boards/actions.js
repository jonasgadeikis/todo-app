import axios from 'axios';

export default {
    getBoard({commit}) {
        commit('toggleLoadingState');
        setTimeout(() => {
            axios.get('/api/board/get').then(response => {
                commit('setBoards', response.data);
            }).catch(error => {
                console.log(error.response.data)
            }).finally(() => {
                commit('toggleLoadingState');
            });
        }, 1000);
    },
};