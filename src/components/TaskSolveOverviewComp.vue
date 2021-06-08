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

            <v-card-title class="ml-1 mb-0">Решения:</v-card-title>
            <v-textarea
                class="ma-5 mt-0"
                label="Поле ввода кода"
                v-model="code"
                @keydown.tab="onTab"
                @click="tt=code"
                v-if="!readonly"
            />

            <div
                v-if="parcels"
                v-for="parcel in parcels"
            >
                <v-card class="ma-4 pa-3" color="mc-dark">
                    <v-card-title >Ваше решение {{parcels.indexOf(parcel)+1}}</v-card-title>

                  <div class="ml-4">
                      Код решения:
                      <pre class="mb-4"><code>{{parcel.code}}</code></pre>
                  </div>

                </v-card>

            </div>

            <v-btn
                @click="$router.push('/')"
                color="success"
            >
                Решать еще задачи
            </v-btn>

        </v-card>
    </v-sheet>
</template>

<script>
import TaskTests from "./shared/addTask/TaskTests.vue";
export default {
    name: "TaskSolveOverview",
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
            parcels: [],
        }
    },
    async mounted() {
        await this.$store.dispatch('getTaskById', { id: this.$route.params.id })
        this.tests = await this.$store.dispatch('getAllTestsByTaskId', { id: this.$route.params.id })
        this.parcels = await fetch(`http://localhost:3000/api/parcels?taskId=${this.$route.params.id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(r => r.json())
        console.log(this.parcels)

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
