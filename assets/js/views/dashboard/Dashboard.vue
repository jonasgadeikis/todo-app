<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>

        <div class="Dashboard-columns mt-5">
            <Column
                id="toDo"
                title="To Do"
                icon="play_arrow"
                classes="Button--taskCompleted"
                :tasks="toDoTasks"
            />

            <Column
                id="inProgress"
                title="In Progress"
                icon="check"
                classes="Button--taskBlocked"
                :tasks="inProgressTasks"
                @start="startTask($event)"
                @unblock="unblockTask($event)"
            />

            <Column
                id="completed"
                title="Completed"
                icon="check"
                classes="Button--taskCompleted"
                :tasks="completedTasks"
                @complete="completeTask($event)"
            />

            <Column
                id="blocked"
                title="Blocked"
                icon="block"
                classes="Button--taskBlocked"
                :tasks="blockedTasks"
                @block="blockTask($event)"
            />
        </div>

        <div class="Dashboard-loading" v-show="dashboardLoadingState">
            <Spinner />
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