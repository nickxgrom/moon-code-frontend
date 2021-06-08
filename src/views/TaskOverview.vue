<template>
    <div>
        <task-solve-overview-comp
            readonly
        />
    </div>
</template>

<script>
import TaskSolveOverviewComp from "../components/TaskSolveOverviewComp.vue";
export default {
    name: "TaskOverview",
    components: {
        TaskSolveOverviewComp,
    },

}
</script>

<style scoped>

</style>