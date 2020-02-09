<template>
    <div
        :class="classes"
        @click.prevent="$emit('click')"
    >
        <span class="Boards-listItemTitle">{{ name }}</span>
        <i class="material-icons">send</i>
    </div>
</template>

<script>
    export default {
        name: 'Board',
        props: {
            name: String,
            classes: String,
        },
    }
</script>