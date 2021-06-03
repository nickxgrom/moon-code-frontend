<template>
    <div>
        <v-card color="mc-dark-lighten" flat class="pa-8">
            <div class="d-flex justify-space-between">
                <v-card-title class="pa-0 mb-8">
                    {{ task.title || title }}
                </v-card-title>
                <rating-bar
                    v-if="$route.name !== 'new-task'"
                    :rating="task.rating"
                />
            </div>

            <p class="mb-8 mr-10">
                {{ task.text || description }}
            </p>

            <h3 class="mb-3">Тесты</h3>

            <task-tests
                v-if="testItems"
                readonly
                :items="testItems"
            />

        </v-card>
    </div>
</template>

<script>
    import RatingBar from "./RatingBar.vue";
    import TaskTests from "./addTask/TaskTests.vue";
    export default {
        name: "TaskPreview",
        components: {
            TaskTests,
            RatingBar,
        },
        props: {
            title: String,
            description: String,
            propTests: Array
        },
        async mounted() {
            this.testItems = this.$route.params.id ? await this.$store.dispatch('getAllTestsByTaskId', { id: this.$route.params.id })
                : this.propTests

            if (this.$route.params.id) {
                this.task = (await this.$store.dispatch('getTaskById', { id: this.$route.params.id  } ))
            }
        },
        data() {
            return {
                testItems: null,
                task: {
                    title: '',
                    text: '',
                    rating: {},
                },
            }
        },
    }
</script>

<style scoped>

</style>