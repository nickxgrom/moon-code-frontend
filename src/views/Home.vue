<template>
    <div>
        <task-list
            title="Все задачи"
            :items="items"
        >
            <v-btn
                color="success"
                @click="$router.push('/new-task')"
            >
                Добавить задачу
            </v-btn>
        </task-list>
    </div>
</template>

<script>
    import TaskList from "../components/shared/TaskList.vue";
    export default {
        name: "Home",
        components: {
            TaskList,
        },
        data() {
            return {
                addTaskVisible: false,
                items: [],
            }
        },
        async mounted() {
            this.items = await this.$store.dispatch('getTaskList')
        }
    }
</script>

<style scoped>

</style>
