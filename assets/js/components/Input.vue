<template>
    <div class="Input">
        <input
            :type="type"
            :class="classes"
            v-model="inputModel"
            :placeholder="placeholder"
            @input="$emit('update:model', inputModel)"
        >
        <span class="Input-name">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            type: String,
            name: String,
            classes: String,
            placeholder: String,
            model: String,
        },
        data() {
            return {
                inputModel: '',
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/components/Input.scss';
</style>