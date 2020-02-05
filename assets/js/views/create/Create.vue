<template>
    <div class="Create pt-5">
        <h1 class="Create-title mb-5">New Task</h1>
        <Input
            type="text"
            name="Name"
            placeholder="..."
            max="50"
            classes="Input-value Input-value--primary"
            :model.sync="task.name"
        />
        <div class="mt-3">
            <Textarea
                placeholder="..."
                name="Description"
                max="250"
                classes="Input-value Input-value--primary"
                :model.sync="task.description"
            />
        </div>
        <div class="mt-3">
            <Select
                name="Priority"
                :items="priorities"
                :model.sync="task.priority"
            />
        </div>
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
    import Input from '../../components/Input';

    export default {
        name: 'Create',
        components: {
            Input,
            Button,
            Textarea,
            Select,
            Spinner,
        },
        data() {
            return {
                task: {
                    name: null,
                    description: null,
                    priority: 0,
                },
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
                'priorities',
            ]),
        },
    }
</script>