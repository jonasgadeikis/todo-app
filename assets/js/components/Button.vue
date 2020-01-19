<template>
    <button
        :type="type"
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
            type: String,
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