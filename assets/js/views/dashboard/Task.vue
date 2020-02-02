<template>
    <div
        :id="task.id"
        class="Task"
        draggable="true"
        @dragstart="dragStart($event)"
    >
        <div class="Task-content">
            <span class="Dashboard-taskName">{{ task.name }}</span>
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