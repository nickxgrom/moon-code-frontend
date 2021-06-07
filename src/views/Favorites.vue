<template>
    <task-list
        title="Закладки"
        :items="items"
    />
</template>

<script>
    import TaskList from "../components/shared/TaskList.vue";
    export default {
        name: "Favorites",
        components: {
            TaskList,
        },
        computed: {
            items() {
                return this.$store.state.task.bookmarks
            }
        },
        async mounted() {
            await this.$store.dispatch('getBookmarks')
        }
    }
</script>

<style scoped>

</style>