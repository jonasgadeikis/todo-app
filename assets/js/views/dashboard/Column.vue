<template>
    <div
        :id="id"
        class="Column"
        @dragover="allowDrop($event)"
        @drop="drop($event)"
    >
        <h4 class="Column-title">
            <span>{{ title }}</span>
            <h6>{{ tasks.length }}</h6>
        </h4>
        <div class="Column-tasks">
            <Task
                v-for="(task, i) in tasks"
                :key="i"
                :task="task"
                @dragStarted="dragStarted($event)"
            >
                <Button
                    :classes="[
                        'Button',
                        classes,
                    ]"
                    :disabled="true"
                >
                    <i class="material-icons">{{ icon }}</i>
                </Button>
            </Task>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Button from '../../components/Button';
    import Spinner from '../../components/Spinner';
    import Task from './Task';

    export default {
        components: {
            Button,
            Spinner,
            Task,
        },
        name: 'Column',
        props: {
            id: String,
            icon: String,
            classes: String,
            tasks: Array,
            title: String,
        },
        methods: {
            ...mapActions([
                'dragTask',
                'resetColumnsColor',
            ]),
            dragStarted(e) {
                const column = this.columns.find(column => {
                    return column.name === this.id;
                });
                column.unavailable.forEach(column => {
                    document.getElementById(column).style.background = '#f15f7945';
                });
                column.available.forEach(column => {
                    document.getElementById(column).style.background = '#1dd1a175';
                });

                const task = {
                    id: e.target.id,
                    start: this.id,
                };
                this.dragTask(task);
            },
            allowDrop(e) {
                e.preventDefault();
            },
            drop(e) {
                e.preventDefault();

                this.resetColumnsColor();

                if (this.id === this.draggedTask.start) {
                    return;
                }

                if (this.id === 'completed' && this.draggedTask.start === 'inProgress') {
                    this.$emit('complete', Number(this.draggedTask.id));
                } else if (this.id === 'inProgress' && this.draggedTask.start === 'toDo') {
                    this.$emit('start', Number(this.draggedTask.id));
                } else if (this.id === 'blocked' && this.draggedTask.start === 'inProgress') {
                    this.$emit('block', Number(this.draggedTask.id));
                } else if (this.id === 'inProgress' && this.draggedTask.start === 'blocked') {
                    this.$emit('unblock', Number(this.draggedTask.id));
                }
            },
        },
        computed: {
            ...mapGetters([
                'columns',
                'allColumns',
                'draggedTask',
            ]),
        },
    }
</script>