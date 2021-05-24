<template>
    <div >
       <h1>Список всех задач</h1>
        <v-btn
            @click="addTaskVisible = true"
        >
            Добавить задачу
        </v-btn>
        <new-task
            v-if="addTaskVisible"
            @closeOverlay="addTaskVisible=false"
        />
    </div>
</template>

<script>
    import NewTask from "../components/NewTask.vue";
    export default {
        name: "Home",
        components: {
            NewTask,
        },
        data() {
            return {
                addTaskVisible: false
            }
        },
    }
</script>

<style scoped>

</style>
