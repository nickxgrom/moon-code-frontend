<template>
    <task-list
        title="Все задачи"
        :items="items"
    />
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
                items: [
                    {
                        id: 3,
                        title: "Task 1",
                        rating: "0",
                        inBookmark: false,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vitae?",
                    },
                    {
                        id: 34,
                        title: "Task 2",
                        rating: "-3",
                        inBookmark: true,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vitae?",
                    },
                    {
                        id: 15,
                        title: "Task 3",
                        rating: "5",
                        inBookmark: false,
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vitae?",
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>
