<template>
    <div>
        <v-card color="mc-dark-lighten" flat class="pa-8">
            <div class="d-flex justify-space-between">
                <v-card-title class="pa-0 mb-8">
                    {{ task.title }}
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
                {{ task.text }}
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
    import TaskTests from "./addTask/TaskTests.vue";
    export default {
        name: "TaskPreview",
        components: {
            TaskTests
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
                this.task = await this.$store.dispatch('getTaskById', { id: this.$route.params.id  } )
            }
        },
        data() {
            return {
                testItems: null,
                task: {
                    title: '',
                    text: '',
                },
            }
        },
    }
</script>

<style scoped>

</style>