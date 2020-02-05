<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>

        <div
            class="Dashboard-columns mt-5"
            @mouseleave="resetColumnsColor($event)"
        >
            <Column
                id="toDo"
                title="To Do"
                icon="play_arrow"
                classes="Column-state"
                :tasks="toDoTasks"
                @reopen="reopenTask($event)"
            />

            <Column
                id="inProgress"
                title="In Progress"
                icon="check"
                classes="Column-state"
                :tasks="inProgressTasks"
                @start="startTask($event)"
                @unblock="unblockTask($event)"
            />

            <Column
                id="completed"
                title="Completed"
                icon="check"
                classes="Column-state"
                :tasks="completedTasks"
                @complete="completeTask($event)"
            />

            <Column
                id="blocked"
                title="Blocked"
                icon="block"
                classes="Column-state"
                :tasks="blockedTasks"
                @block="blockTask($event)"
            />
        </div>

        <Spinner :loading="loadingState" />
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
                'reopenTask',
                'resetColumnsColor',
            ]),
        },
        computed: {
            ...mapGetters([
                'toDoTasks',
                'inProgressTasks',
                'completedTasks',
                'blockedTasks',
                'loadingState',
            ]),
        },
    }
</script>