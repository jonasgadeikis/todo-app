import axios from 'axios';

export default {
    register({commit}, payload) {
        axios.post('/api/login', {
            username: payload.username,
            password: payload.password,
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error.response.data);
        }).finally(() => {

        });
    },
};