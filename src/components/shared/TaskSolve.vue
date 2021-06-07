<template>
    <v-sheet>
        <v-card color="mc-dark-lighten" flat>
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-subtitle><b>Условие задачи:</b> {{ task.text }}</v-card-subtitle>

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
                    v-for="item in solution.tests"
                    class="my-3"
                    flat
                    :key="item.id"
                >
                    <v-progress-linear
                        :color="item.isPassed ? 'success' : 'error'"
                        height="10"
                        :indeterminate="loading"
                    ></v-progress-linear>
                    <div class="pa-4">
                        <div><b>Статус прохождения теста: </b>
                            <span :class="{ 'green--text': item.isPassed, 'red--text': !item.isPassed }">{{ item.isPassed ? "Пройден" : "Не пройден" }}</span>
                        </div>
                        Test#{{ solution.tests.indexOf(item)+1 }}
                        <div v-if="item.errorMessage" class="d-flex">
                            <b>Ошибка: </b>
                            <p class="ml-3">{{ item.errorMessage }}</p>
                        </div>
                        <div>
                            <b>Ожидаемый результат: </b>{{ item.outputValue }}
                        </div>
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
                solution: [],
                loading: false,
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
                this.solution = await this.$store.dispatch('sendParcel', { id: this.$route.params.id, code: this.code })
                console.log(this.solution)
                this.getTestResult();
            },
            getTestResult() {
                this.testBlockVisible = true
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                }, 1000)
            },
        }
    }
</script>

<style scoped>

</style>
