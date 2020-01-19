<template>
    <div class="Task pt-5">
        <h1 class="Task-title mb-5">New Task</h1>
        <Textarea
            placeholder="..."
            name="Task Description"
            classes="Textarea-value Textarea-value--primary"
            :model.sync="description"
        />
        <Button
            type="button"
            :classes="[
                'Button mt-3',
                {'Button--primary': !taskLoadingState },
                { 'Button--disabled': taskLoadingState },
            ]"
            :disabled="taskLoadingState"
            @click="createTask(description)"
        >
            <Spinner v-show="taskLoadingState" />
            <i class="material-icons" v-show="!taskLoadingState">check</i>
            <span class="ml-2">Save</span>
        </Button>
        <div class="Task-message--success mt-3">{{ message }}</div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Textarea from '../../components/Textarea';
    import Button from '../../components/Button';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Task',
        components: {
            Button,
            Textarea,
            Spinner,
        },
        data() {
            return {
                description: null,
            }
        },
        destroyed() {
            this.resetMessage();
        },
        methods: {
            ...mapActions([
                'addNewTask',
                'resetMessage',
            ]),

            createTask(description) {
                this.addNewTask(description);
            },
        },
        computed: {
            ...mapGetters([
                'taskLoadingState',
                'message',
            ]),
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../css/components/Button.scss';
    @import '../../../css/views/task/Task.scss';
</style>