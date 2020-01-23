<template>
    <div class="Column">
        <h4 class="Column-title mt-5">
            <span>{{ title }}</span>
            <h6>{{ tasks.length }}</h6>
        </h4>
        <div class="Dashboard-tasks">
            <Task
                v-for="(task, i) in tasks"
                :key="i"
                :name="task.name"
            >
                <template v-slot:state>
                    <Button
                        v-show="state"
                        :classes="[
                            'Button',
                            stateClass,
                        ]"
                        :disabled="true"
                    >
                        <i class="material-icons">{{ stateIcon }}</i>
                    </Button>
                </template>
                <template v-slot:action>
                    <div class="Dashboard-taskAction" v-if="title === 'In Progress'">
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
                    <div class="Dashboard-taskAction" v-if="title === 'Blocked'">
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
                    </div>
                    <div class="Dashboard-taskAction" v-if="title === 'To Do'">
                        <Button
                            :classes="[
                                'Button',
                                {'Button--success': !loading},
                                {'Button--success-loading': loading},
                            ]"
                            :disabled="loading"
                            @click="$emit('start', task.id)"
                        >
                            <i class="material-icons" v-show="!loading">play_arrow</i>
                            <Spinner v-show="loading" />
                        </Button>
                    </div>
                </template>
            </Task>
        </div>
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
            state: Boolean,
            stateIcon: String,
            stateClass: String,
            loading: Boolean,
            tasks: Array,
            title: String,
        },
    }
</script>