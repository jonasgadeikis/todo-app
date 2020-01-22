<template>
    <button
        type="button"
        :class="classes"
        :disabled="disabled"
        @click.prevent="click"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            classes: Array,
            disabled: Boolean,
        },
        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>