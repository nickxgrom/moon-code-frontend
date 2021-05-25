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
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1" class="pa-0">
                <form-wrapper>
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
                        @click="$emit('closeOverlay')"
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
                </form-wrapper>
            </v-stepper-content>

            <v-stepper-content step="2" class="pa-0">
                <task-test
                    @goBack="tab = 1"
                />
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    import FormWrapper from "../forms/FormWrapper.vue";
    import TaskTest from "./TaskTests.vue";

    export default {
        name: "NewTask",
        components: {
            FormWrapper,
            TaskTest,
        },
        data() {
            return {
                tab: 1,
                taskName: {
                    label: "Название",
                    value: "",
                    name: "taskName",
                    placeholder: "Введите название задачи",
                    rules: [
                        v => !!v || "Поле не должно быть пустым",
                        v => /^[A-Za-zА-ЯЁа-яё\d]+$/.test(v) || "Поле может содержать только буквы и цифры",
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
</style>