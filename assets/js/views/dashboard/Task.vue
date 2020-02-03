<template>
    <div
        :id="task.id"
        class="Task"
        draggable="true"
        @dragstart="dragStart($event)"
    >
        <div class="Task-content">
            <span class="Task-name">
                <span :class="{ 'Task-name--completed': task.isCompleted }">{{ task.name }}</span>
            </span>
            <i
                class="material-icons"
                :class="[ task.priority === 2
                    ? 'Task-priority--high'
                    : task.priority === 1 ? 'Task-priority--medium'
                    : 'Task-priority--low'
                ]"
            >
                {{ task.priority === 2
                    ? 'keyboard_arrow_up'
                    : task.priority === 1 ? 'remove'
                    : 'keyboard_arrow_down'
                }}
            </i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object,
        },
        methods: {
            dragStart(e) {
                this.$emit('dragStarted', e);
            },
        },
    }
</script>