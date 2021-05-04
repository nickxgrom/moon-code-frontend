<template>
    <v-app>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </v-app>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
export default {
    name: "app",
    components: {
        EmptyLayout, MainLayout
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || 'empty') + '-layout'
        }
    }
}
</script>

<style scoped>

</style>
