<template>
    <div>
        <task-preview/>
        <v-btn
            color="success"
        >
            Начать решать
        </v-btn>
    </div>
</template>

<script>
    import TaskPreview from "../components/shared/TaskPreview.vue";
    export default {
        name: "Task",
        components: {
            TaskPreview,
        },
    }
</script>

<style scoped>

</style>