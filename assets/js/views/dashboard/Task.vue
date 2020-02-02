<template>
    <div
        :id="task.id"
        class="Task"
        draggable="true"
        @dragstart="dragStart($event)"
    >
        <div class="Task-content">
            <span class="Task-name">
                <i
                    class="material-icons"
                    :class="[ task.priority === 2 ? 'Task-priority--high' : 'Task-priority--low' ]"
                >
                    {{ task.priority === 2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
                </i>
                <span :class="{ 'Task-name--completed': task.isCompleted }">{{ task.description }}</span>
            </span>
            <slot />
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