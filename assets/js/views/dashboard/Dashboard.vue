<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>

        <div class="Dashboard-columns mt-5">
            <Column
                id="toDo"
                title="To Do"
                :state="false"
                :tasks="toDoTasks"
                :loading="dashboardLoadingState"
            />

            <Column
                id="inProgress"
                title="In Progress"
                :state="true"
                state-icon="check"
                state-class="Button--taskBlocked"
                :tasks="inProgressTasks"
                :loading="dashboardLoadingState"
                @start="startTask($event)"
                @unblock="unblockTask($event)"
            />

            <Column
                id="completed"
                title="Completed"
                :state="true"
                state-icon="check"
                state-class="Button--taskCompleted"
                :tasks="completedTasks"
                :loading="dashboardLoadingState"
                @complete="completeTask($event)"
            />

            <Column
                id="blocked"
                title="Blocked"
                :state="true"
                state-icon="block"
                state-class="Button--taskBlocked"
                :tasks="blockedTasks"
                :loading="dashboardLoadingState"
                @block="blockTask($event)"
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