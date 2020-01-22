<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>

        <Column
            title="Ongoing Tasks"
            :tasks="uncompletedTasks"
            :loading="dashboardLoadingState"
            @complete="completeTask($event)"
            @block="blockTask($event)"
        />

        <Column
            title="Blocked Tasks"
            :tasks="blockedTasks"
            :loading="dashboardLoadingState"
            @unblock="unblockTask($event)"
        />

        <Column
            title="Completed Tasks"
            :tasks="completedTasks"
            :loading="dashboardLoadingState"
        />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Button from '../../components/Button';
    import Column from './Column';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Dashboard',
        components: {
            Button,
            Column,
            Spinner,
        },
        mounted() {
            this.getTask();
        },
        methods: {
            ...mapActions([
                'completeTask',
                'blockTask',
                'unblockTask',
                'getTask',
            ]),
        },
        computed: {
            ...mapGetters([
                'completedTasks',
                'uncompletedTasks',
                'blockedTasks',
                'dashboardLoadingState',
            ]),
        },
    }
</script>