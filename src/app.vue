<template>
    <v-app>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </v-app>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
import NoLayout from "./layouts/NoLayout.vue";
export default {
    name: "app",
    components: {
        MainLayout,
        NoLayout,
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || 'no') + '-layout'
        }
    }
}
</script>

<style scoped>

</style>
