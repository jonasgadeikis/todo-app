<template>
    <div class="Register">
        <h1>Register</h1>
        <Input
            type="text"
            name="Username"
            classes="Input-value Input-value--primary mt-4"
            :model.sync="credentials.username"
        />
        <Input
            type="password"
            name="Password"
            classes="Input-value Input-value--primary mt-4"
            :model.sync="credentials.password"
        />
        <Button
            :classes="[
                'Button',
                'Button--primary',
                'mt-4'
            ]"
            @click="register(credentials)"
        >
            <i class="material-icons">person_add</i>
            <span class="ml-2">Register</span>
        </Button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Button from '../../components/Button';
    import Input from '../../components/Input';

    export default {
        name: 'Register',
        components: {
            Button,
            Input,
        },
        data() {
            return {
                credentials: {
                    username: null,
                    password: null,
                },
            }
        },
        methods: {
            ...mapActions([
                'register',
            ]),
        },
    }
</script>

<style scoped>

</style>