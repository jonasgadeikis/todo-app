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
                <div class="Dashboard-taskAction">
                    <Button
                        type="button"
                        :classes="[
                            'Button',
                            {'Button--success': !dashboardLoadingState},
                            {'Button--success-loading': dashboardLoadingState},
                        ]"
                        :disabled="dashboardLoadingState"
                        @click="completeTask(task.id)"
                    >
                        <i class="material-icons" v-show="!dashboardLoadingState">check</i>
                        <Spinner v-show="dashboardLoadingState" />
                    </Button>
                    <Button
                        type="button"
                        :classes="[
                            'Button ml-2',
                            {'Button--warning': !dashboardLoadingState},
                            {'Button--warning-loading': dashboardLoadingState},
                        ]"
                        :disabled="dashboardLoadingState"
                        @click="blockTask(task.id)"
                    >
                        <i class="material-icons" v-show="!dashboardLoadingState">block</i>
                        <Spinner v-show="dashboardLoadingState" />
                    </Button>
                </div>
            </div>
        </div>

        <h4 class="Dashboard-title mt-5" v-if="blockedTasks.length">Blocked Tasks</h4>
        <div class="Dashboard-tasks mt-3">
            <div
                v-for="(task, i) in blockedTasks"
                :key="i"
                class="Dashboard-task"
            >
                <span>{{ task.name }}</span>
                <div class="Dashboard-taskAction">
                    <Button
                        type="button"
                        :classes="[
                            'Button',
                            {'Button--success': !dashboardLoadingState},
                            {'Button--success-loading': dashboardLoadingState},
                        ]"
                        @click="unblockTask(task.id)"
                    >
                        <i class="material-icons" v-show="!dashboardLoadingState">undo</i>
                        <Spinner v-show="dashboardLoadingState" />
                    </Button>
                    <Button
                        type="button"
                        :classes="[
                            'Button ml-2',
                            'Button--taskBlocked',
                        ]"
                        :disabled="true"
                    >
                        <i class="material-icons">block</i>
                    </Button>
                </div>
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
                'setTaskAsBlocked',
                'setTaskAsUnblocked',
                'getTasks',
            ]),
            completeTask(taskId) {
                 this.setTaskAsDone(taskId);
            },
            blockTask(taskId) {
                this.setTaskAsBlocked(taskId);
            },
            unblockTask(taskId) {
                this.setTaskAsUnblocked(taskId);
            },
        },
        computed: {
            ...mapGetters([
                'tasks',
                'dashboardLoadingState',
            ]),
            uncompletedTasks() {
                return this.tasks.filter(task => {
                    return !task.isCompleted && !task.isBlocked;
                });
            },
            completedTasks() {
                return this.tasks.filter(task => {
                    return task.isCompleted;
                });
            },
            blockedTasks() {
                return this.tasks.filter(task => {
                    return task.isBlocked;
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