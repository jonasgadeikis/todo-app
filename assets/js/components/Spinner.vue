<template>
    <div class="Spinner" v-show="loading">
        <i class="material-icons Spinner--active">toys</i>
    </div>
</template>

<script>
    export default {
        name: 'Spinner',
        props: {
            loading: Boolean,
        },
    }
</script>