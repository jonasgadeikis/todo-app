<template>
    <div
        :id="task.id"
        class="Task"
        draggable="true"
        @dragstart="dragStart($event)"
    >
        <div class="Task-content">
            <span class="Dashboard-taskName">{{ task.name }}</span>
            <slot name="state" />
            <div class="Task-loading" v-show="dashboardLoadingState">
                <Spinner />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Task',
        components: {
            Spinner,
        },
        props: {
            task: Object,
        },
        methods: {
            dragStart(e) {
                this.$emit('dragStarted', e)
            },
        },
        computed: {
            ...mapGetters([
                'dashboardLoadingState',
            ]),
        },
    }
</script>