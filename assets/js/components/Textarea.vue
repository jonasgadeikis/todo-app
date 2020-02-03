<template>
    <div class="Input">
        <textarea
            :maxlength="max"
            :class="classes"
            v-model="inputModel"
            :placeholder="placeholder"
            @input="$emit('update:model', inputModel)"
        />
        <div class="Input-name">
            <span>{{ name }}</span>
            <span>{{ inputModel.length }} / {{ max }}</span>
        </div>
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
            max: String,
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