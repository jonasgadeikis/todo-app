<template>
    <button
        :type="type"
        :class="classes"
        :disabled="disabled"
        @click="click"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            type: String,
            classes: String,
            disabled: Boolean,
        },
        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>