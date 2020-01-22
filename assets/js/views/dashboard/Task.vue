<template>
    <div class="Dashboard-task">
        <span class="Dashboard-taskName">{{ name }}</span>
        <slot />
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