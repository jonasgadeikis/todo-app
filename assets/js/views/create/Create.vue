<template>
    <div class="Create pt-5">
        <h1 class="Create-title mb-5">New Task</h1>
        <Textarea
            placeholder="..."
            name="Task Description"
            classes="Input-value Input-value--primary"
            :model.sync="task.description"
        />
        <Select
            name="Priority"
            :items="priorities"
            :model.sync="task.priority"
        />
        <Button
            :classes="[
                'Button mt-3',
                'Button--primary',
            ]"
            @click="addNewTask(task)"
        >
            <i class="material-icons">check</i>
            <span class="ml-2">Save</span>
        </Button>
        <div class="Create-message--success mt-3">{{ message }}</div>

        <Spinner :loading="loadingState" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Textarea from '../../components/Textarea';
    import Button from '../../components/Button';
    import Select from '../../components/Select';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Create',
        components: {
            Button,
            Textarea,
            Select,
            Spinner,
        },
        data() {
            return {
                task: {
                    description: null,
                    priority: 1,
                },
                priorities: [
                    {
                        name: 'Low',
                        value: 1,
                    },
                    {
                        name: 'High',
                        value: 2,
                    },
                ],
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
        },
        computed: {
            ...mapGetters([
                'loadingState',
                'message',
            ]),
        },
    }
</script>