<template>
    <div>
        <v-card color="mc-dark-lighten" flat class="pa-8">
            <div class="d-flex justify-space-between">
                <v-card-title class="pa-0 mb-8">
                    TaskName here
                </v-card-title>
                <v-card-subtitle class="ma-0 pa-0">
                    <v-btn icon>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                    <span>0</span>
                    <v-btn icon>
                        <v-icon>mdi-menu-up</v-icon>
                    </v-btn>
                </v-card-subtitle>
            </div>

            <p class="mb-8 mr-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iure pariatur quis voluptatum. Debitis porro quisquam sunt. Amet at, corporis deleniti deserunt eveniet iste maiores pariatur perspiciatis repellendus tenetur, vero?
            </p>

            <h3 class="mb-3">Тесты</h3>

            <task-tests
                v-if="testItems"
                readonly
                :tests="testItems"

            />

        </v-card>
    </div>
</template>

<script>
    import TaskTests from "./addTask/TaskTests.vue";
    export default {
        name: "TaskPreview",
        components: {
            TaskTests
        },
        async mounted() {
            this.testItems = await this.$store.dispatch('getAllTestsByTaskId', { id: this.$route.params.id })
        },
        data() {
            return {
                testItems: null
            }
        },
    }
</script>

<style scoped>

</style>