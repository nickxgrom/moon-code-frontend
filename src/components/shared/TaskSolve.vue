<template>
    <v-sheet>
        <v-card color="mc-dark-lighten" flat>
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-subtitle>Задача: {{ task.text }}</v-card-subtitle>

            <v-card-actions>
                <v-btn
                    color="purple lighten-2"
                    text
                    @click="testShow = !testShow"
                >
                    Тесты
                </v-btn>
                <v-btn
                    icon
                    @click="testShow = !testShow"
                >
                    <v-icon>{{ testShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="testShow">
                    <task-tests
                        v-if="tests"
                        readonly
                        :items="tests"
                    />
                </div>
            </v-expand-transition>

            <v-card-title class="ml-1 mb-0">Решение:</v-card-title>
            <v-textarea
                class="ma-5 mt-0"
                label="Поле ввода кода"
                v-model="code"
                @keydown.tab="onTab"
                @click="tt=code"
                v-if="!readonly"
            />

            <div class="ma-5">
                <code>Ваш код</code>
                <pre><code>{{getCode}}</code></pre>
            </div>

            <v-btn
                class="ma-5"
                color="primary"
                @click="sendSolution"
            >
                Отправить решение
            </v-btn>

            <div v-if="testBlockVisible" class="ma-4">
                <v-card
                    v-for="c in 5"
                    class="my-3"
                    flat
                    :key="c"
                >
                    <v-progress-linear
                        color="primary"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                    <div class="pa-4">
                        Task#{{c}}
                    </div>
                </v-card>
            </div>
            <v-btn
                v-if="testBlockVisible"
                @click="$router.push('/')"
                color="success"
            >
                Решать еще задачи
            </v-btn>
        </v-card>
    </v-sheet>
</template>

<script>
    import TaskTests from "./addTask/TaskTests.vue";
    export default {
        name: "TaskSolve",
        props: {
            readonly: Boolean
        },
        components: {
            TaskTests,
        },
        data() {
            return {
                code: "",
                testBlockVisible: false,
                backToTasksBtnVisible: false,
                tests: undefined,
                testShow: false,
            }
        },
        async mounted() {
            await this.$store.dispatch('getTaskById', { id: this.$route.params.id })
            this.tests = await this.$store.dispatch('getAllTestsByTaskId', { id: this.$route.params.id })
        },
        computed: {
            getCode() {
                return this.code
            },
            task() {
                return this.$store.state.task.currentTask
            },
        },
        methods: {
            onTab(event) {
                event.preventDefault()
                this.code = `${this.code}    `
            },
            async sendSolution() {
                this.testBlockVisible = true
            },
        }
    }
</script>

<style scoped>

</style>