<template>
    <div class="Boards pt-5">
        <div class="Boards-header mb-5">
            <h1 class="Boards-title">Boards</h1>
            <Button
                :classes="[
                    'Button',
                    'Button--primary',
                ]"
            >
                <i class="material-icons">add</i>
                <span class="ml-2">New</span>
            </Button>
        </div>
        <div class="Boards-list">
            <Board
                classes="Boards-listItem"
                v-for="(board, i) in boards"
                :key="i"
                :name="board.name"
                @click="getTask(board)"
            />
        </div>

        <Spinner :loading="loadingState" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Board from './Board';
    import Button from '../../components/Button';
    import Spinner from '../../components/Spinner';

    export default {
        name: 'Boards',
        components: {
            Board,
            Button,
            Spinner,
        },
        mounted() {
            this.getBoard();
        },
        methods: {
            ...mapActions([
                'getBoard',
                'getTask',
            ]),
        },
        computed: {
            ...mapGetters([
                'boards',
                'loadingState',
            ]),
        },
    }
</script>