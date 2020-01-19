<template>
    <div class="Textarea">
        <textarea
            :class="classes"
            v-model="inputModel"
            :placeholder="placeholder"
            @input="$emit('update:model', inputModel)"
        />
        <span class="Textarea-name">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Textarea',
        props: {
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
    @import '../../css/components/Textarea.scss';
</style>