<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>

        <div class="Dashboard-columns">
            <Column
                title="To Do"
                :state="false"
                :tasks="toDoTasks"
                :loading="dashboardLoadingState"
                @start="startTask($event)"
            />

            <Column
                title="In Progress"
                :state="true"
                state-icon="check"
                state-class="Button--taskBlocked"
                :tasks="inProgressTasks"
                :loading="dashboardLoadingState"
                @complete="completeTask($event)"
                @block="blockTask($event)"
            />

            <Column
                title="Completed"
                :state="true"
                state-icon="check"
                state-class="Button--taskCompleted"
                :tasks="completedTasks"
                :loading="dashboardLoadingState"
            />

            <Column
                title="Blocked"
                :state="true"
                state-icon="block"
                state-class="Button--taskBlocked"
                :tasks="blockedTasks"
                :loading="dashboardLoadingState"
                @unblock="unblockTask($event)"
            />
        </div>
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
                'startTask',
                'completeTask',
                'blockTask',
                'unblockTask',
                'getTask',
            ]),
        },
        computed: {
            ...mapGetters([
                'toDoTasks',
                'inProgressTasks',
                'completedTasks',
                'blockedTasks',
                'dashboardLoadingState',
            ]),
        },
    }
</script>