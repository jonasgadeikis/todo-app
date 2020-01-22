<template>
    <div v-show="tasks.length">
        <h4 class="Dashboard-title mt-5">{{ title }}</h4>
        <Task
            v-for="(task, i) in tasks"
            :key="i"
            :name="task.name"
        >
            <div class="Dashboard-taskAction" v-if="title === 'Ongoing Tasks'">
                <Button
                    :classes="[
                        'Button',
                        {'Button--success': !loading},
                        {'Button--success-loading': loading},
                    ]"
                    :disabled="loading"
                    @click="$emit('complete', task.id)"
                >
                    <i class="material-icons" v-show="!loading">check</i>
                    <Spinner v-show="loading" />
                </Button>
                <Button
                    :classes="[
                        'Button ml-2',
                        {'Button--warning': !loading},
                        {'Button--warning-loading': loading},
                    ]"
                    :disabled="loading"
                    @click="$emit('block', task.id)"
                >
                    <i class="material-icons" v-show="!loading">block</i>
                    <Spinner v-show="loading" />
                </Button>
            </div>
            <div class="Dashboard-taskAction" v-if="title === 'Blocked Tasks'">
                <Button
                    :classes="[
                        'Button',
                        {'Button--success': !loading},
                        {'Button--success-loading': loading},
                    ]"
                    :disabled="loading"
                    @click="$emit('unblock', task.id)"
                >
                    <i class="material-icons" v-show="!loading">undo</i>
                    <Spinner v-show="loading" />
                </Button>
                <Button
                    :classes="[
                        'Button ml-2',
                        'Button--taskBlocked',
                    ]"
                    :disabled="true"
                >
                    <i class="material-icons">block</i>
                </Button>
            </div>
            <div class="Dashboard-taskAction" v-show="title === 'Completed Tasks'">
                <Button
                    :classes="[
                        'Button',
                        'Button--taskCompleted',
                    ]"
                    :disabled="true"
                >
                    <i class="material-icons">check</i>
                </Button>
            </div>
        </Task>
    </div>
</template>

<script>
    import Button from '../../components/Button';
    import Spinner from '../../components/Spinner';
    import Task from './Task';

    export default {
        components: {
            Button,
            Spinner,
            Task,
        },
        name: 'Column',
        props: {
            loading: Boolean,
            tasks: Array,
            title: String,
        },
    }
</script>