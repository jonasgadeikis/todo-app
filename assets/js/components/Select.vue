<template>
    <div class="Select">
        <div class="Select-block">
            <select
                class="Select-value Select-value--primary"
                @change="$emit('update:model', selectModel)"
                v-model="selectModel"
            >
                <option
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item.value"
                >
                    {{ item.name }}
                </option>
            </select>
            <i class="material-icons Select-icon Select-icon--primary">keyboard_arrow_down</i>
        </div>
        <span class="Select-name">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Select',
        data() {
            return {
                selectModel: 1,
            }
        },
        props: {
            items: Array,
            name: String,

        }
    }
</script>