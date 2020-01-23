<template>
    <div class="App-layout">
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
    import Sidebar from './views/Sidebar';

    export default {
        name: 'App',
        components: {
            Sidebar,
        },
    }
</script>