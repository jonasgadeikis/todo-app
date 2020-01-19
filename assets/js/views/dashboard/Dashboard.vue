<template>
    <div class="Dashboard pt-5">
        <h1 class="Dashboard-title">Dashboard</h1>
        <h4 class="Dashboard-title mt-5">Ongoing Tasks</h4>
        <div class="Dashboard-tasks mt-3">
            <div
                v-for="(task, i) in uncompletedTasks"
                :key="i"
                class="Dashboard-task"
            >
                <span>{{ task.name }}</span>
                <Button
                    type="button"
                    :classes="[
                        'Button',
                        {'Button--success': !dashboardLoadingState},
                        {'Button--loading': dashboardLoadingState},
                    ]"
                    :disabled="dashboardLoadingState"
                    @click="taskDone(task.id)"
                >
                    <i class="material-icons" v-show="!dashboardLoadingState">check</i>
                    <Spinner v-show="dashboardLoadingState" />
                </Button>
            </div>
        </div>

        <h4 class="Dashboard-title mt-5" v-if="completedTasks.length">Completed Tasks</h4>
        <div class="Dashboard-tasks mt-3">
            <div
                v-for="(task, i) in completedTasks"
                :key="i"
                class="Dashboard-task"
            >
                <span class="Dashboard-taskCompleted">{{ task.name }}</span>
                <Button
                    type="button"
                    :classes="[
                        'Button',
                        'Button--taskCompleted',
                    ]"
                    :disabled="true"
                >
                    <i class="material-icons">check</i>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Button from '../../components/Button';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Dashboard',
        components: {
            Button,
            Spinner,
        },
        mounted() {
            this.getTasks();
        },
        methods: {
            ...mapActions([
                'setTaskAsDone',
                'getTasks',
            ]),
            taskDone(taskId) {
                 this.setTaskAsDone(taskId);
            },
        },
        computed: {
            ...mapGetters([
                'tasks',
                'dashboardLoadingState',
            ]),
            uncompletedTasks() {
                return this.tasks.filter(task => {
                    return !task.completed;
                });
            },
            completedTasks() {
                return this.tasks.filter(task => {
                    return task.completed;
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../css/views/dashboard/Dashboard.scss';
    @import '../../../css/components/Button.scss';
    span {
        color: #5A667F;
    }
</style>