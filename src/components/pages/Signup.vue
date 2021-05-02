<template>
    <div class="wrapper">
            <div class="w-75 mx-auto">
                <h3 class="text-center text-white">Регистрация</h3>
                <b-form
                    class="mx-auto w-50 p-4 bg-light rounded-lg outline-secondary"
                >
                    <b-form-group
                        v-for="field in form"
                        :label="field.label"
                        :key="form.indexOf(field)"
                    >
                        <b-form-input
                            :placeholder="field.placeholder"
                            :type="field.type"
                            v-model="field.value"
                            :state="field.value ? field.rule.test(field.value) : null"

                        />
                        <b-form-invalid-feedback>
                            {{ field.errorMessage }}
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <div class="text-center">
                        <b-button
                            class="d-block mx-auto"
                        >
                            Регистрация
                        </b-button>
                    </div>
                </b-form>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                form: [
                    {
                        value: "",
                        label: "Фамилия",
                        placeholder: "Введите фамилию",
                        type: "text",
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректную фамилию"
                    },
                    {
                        value: "",
                        label: "Имя",
                        placeholder: "Введите имя",
                        type: "text",
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректное имя"
                    },
                    {
                        value: "",
                        label: "Отчество",
                        placeholder: "Введите отчество",
                        type: "text",
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректное отчество"
                    },
                    {
                        value: "",
                        label: "Логин",
                        placeholder: "Придумайте логин",
                        type: "text",
                        rule: /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i,
                        errorMessage: "Введите корректный логин"
                    },
                    {
                        value: "",
                        label: "Пароль",
                        placeholder: "Придумайте пароль",
                        type: "password",
                        rule: /^(?=.*\d)(?=.*[A-Z]).{8,}$/,
                        errorMessage: "Введите корректный пароль"
                    },
                    {
                        value: "",
                        label: "Повторите пароль",
                        placeholder: "Повторите пароль",
                        type: "password",
                        rule: /^(?=.*\d)(?=.*[A-Z]).{8,}$/,
                        errorMessage: "Повторите пароль"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
</style>