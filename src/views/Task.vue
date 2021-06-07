<template>
    <div>
        <task-preview/>
        <v-btn
            color="success"
            @click="$router.push(`/solve/${$route.params.id}`)"
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