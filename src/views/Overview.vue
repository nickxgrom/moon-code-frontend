<template>
    <task-list
        type="overview"
        title="Решенные задачи"
        v-if="taskList"
        :items="taskList"
    />

</template>

<script>
import TaskList from "../components/shared/TaskList.vue";
export default {
    name: "Overview",
    components: {
        TaskList,
    },
    data() {
        return {
            taskList: []
        }
    },
    async mounted() {
        this.taskList = await fetch(`http://localhost:3000/api/tasks/parcels`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(r => r.json())
        .then(res => res.tasks)
        console.log(this.taskList)
    }
}
</script>

<style scoped>

</style>