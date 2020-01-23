<template>
    <div class="Task">
        <div class="Task-content">
            <span class="Dashboard-taskName">{{ name }}</span>
            <slot name="state" />
        </div>
        <slot name="action" />
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            name: String,
        },
    }
</script>