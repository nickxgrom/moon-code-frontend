<template>
    <v-stepper v-model="tab" class="mc-dark">
        <v-stepper-header class="d-flex justify-start">
            <v-stepper-step
                step="1"
                :complete="tab > 1"
            >
                Общая информация
            </v-stepper-step>
            <v-stepper-step
                step="2"
                :complete="tab > 2"
            >
                Тесты
            </v-stepper-step>
            <v-stepper-step
                step="3"
                :complete="tab > 3"
            >
                Почти готово
            </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items class="pa-4">
            <v-stepper-content step="1" class="pa-0">
                <div class="stepper__first-tab">
                    <v-text-field
                        :label="taskName.label"
                        :placeholder="taskName.placeholder"
                        v-model="taskName.value"
                        :rules="taskName.rules"
                        counter="25"
                    />
                    <v-textarea
                        :label="taskDesc.label"
                        :placeholder="taskDesc.placeholder"
                        v-model="taskDesc.value"
                        :rules="taskDesc.rules"
                    />
                    <v-btn
                        @click="$router.push('/')"
                        color="error"
                    >
                        Отмена
                    </v-btn>
                    <v-btn
                        :disabled="!taskValidate"
                        @click="tab=2"
                        color="primary"
                    >
                        Далее
                    </v-btn>
                </div>
            </v-stepper-content>

            <v-stepper-content step="2" class="pa-0">
                <task-test
                    @goNext="getTests"
                    @goBack="tab=1"
                />

            </v-stepper-content>

            <v-stepper-content step="3" class="pa-0">
                <v-card-title>
                    Проверьте задачу перед добавлением
                </v-card-title>

                <task-preview
                    v-if="taskPreviewVisible"
                    readonly
                    :title="taskName.value"
                    :description="taskDesc.value"
                    :prop-tests="emptyTests"
                />

                <v-btn @click="goBack">Назад</v-btn>
                <v-btn
                    color="success"
                    @click="createNewTask"
                >
                    Добавить задачу
                </v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    import TaskTest from "./TaskTests.vue";
    import TaskPreview from "../TaskPreview.vue";

    export default {
        name: "NewTask",
        components: {
            TaskTest,
            TaskPreview
        },
        data() {
            return {
                tab: 1,
                taskPreviewVisible: false,
                emptyTests: [
                    {
                        inputs: [
                            { type: '', value: '' },
                        ],
                        outputType: '',
                        outputValue: '',
                    }
                ],
                taskName: {
                    label: "Название",
                    value: "",
                    name: "taskName",
                    placeholder: "Введите название задачи",
                    rules: [
                        v => !!v || "Поле не должно быть пустым",
                        v => /^[A-Za-zА-ЯЁа-яё\d#_№]+$/.test(v) || "Поле может содержать только буквы и цифры",
                        v => !(v.length < 4) || "Поле не должно быть меньше 4 символов",
                        v => !(v.length > 25) || "Поле не должно быть больше 25 символов",
                    ]
                },
                taskDesc: {
                    label: "Описание",
                    value: "",
                    name: "taskDesc",
                    placeholder: "Введите описание задачи",
                    rules: [
                        v => !!v || "Поле не должно быть пустым",
                    ]
                },
            }
        },
        methods: {
            async createNewTask() {
                await this.$store.dispatch('createTask', {
                    task: {
                        title: this.taskName.value,
                        text: this.taskDesc.value
                    },
                    tests: this.emptyTests,
                })
            },
            getTests(data) {
                this.emptyTests = data
                this.taskPreviewVisible = true
                this.tab = 3
            },
            goBack() {
                this.tab = 2
                this.taskPreviewVisible = false
            }
        },
        computed: {
            taskValidate() {
                let valid = true
                this.taskName.rules.forEach(rule => {
                    valid = valid && rule(this.taskName.value) === true
                })

                this.taskDesc.rules.forEach(rule => {
                    valid = valid && rule(this.taskDesc.value) === true
                })

                return valid
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        top: 0;
        transform: none;
    }

    .stepper__first-tab {
        margin: 20px;
        width: 50%;
    }
</style>