<template>
    <div class="Sidebar">
        <div class="row pt-4">
            <div class="col d-flex flex-column align-items-center">
                <div class="Sidebar-userAvatar"></div>
                <div class="Sidebar-userName mt-3">Jonas</div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col">
                <ul class="Sidebar-list">
                    <li
                        v-for="(link, i) in links"
                        :key="i"
                        :class="[
                            'Sidebar-listItem',
                            { 'Sidebar-listItem--active': activeLink === link.name },
                        ]"
                        @click.prevent="navigateTo(link.value, link.name)"
                    >
                        <i class="material-icons mr-3">{{ link.icon }}</i>
                        <span>{{ link.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import router from '../router';

    export default {
        name: 'Sidebar',
        mounted() {
            const route = this.$route;

            if (route.path !== '/') {
                const currentlyActiveLink = this.links.find(link => {
                    return link.value === route.path;
                });

                this.setActiveLink(currentlyActiveLink.name);
            }
        },
        methods: {
            ...mapActions([
                'setActiveLink',
            ]),
            navigateTo(link, name) {
                router.push(link).then(() => {
                    this.setActiveLink(name);
                });
            },
        },
        computed: {
            ...mapGetters([
                'activeLink',
                'links',
            ]),
        },
    }
</script>