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
                        />
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
                        label: "Фамилия",
                        placeholder: "Введите фамилию",
                        type: "text",
                        rule: /\./,
                    },
                    {
                        label: "Имя",
                        placeholder: "Введите имя",
                        type: "text",
                        rule: /\./,
                    },
                    {
                        label: "Отчество",
                        placeholder: "Введите отчество",
                        type: "text",
                        rule: /\./,
                    },
                    {
                        label: "Логин",
                        placeholder: "Придумайте логин",
                        type: "text",
                        rule: /\./,
                    },
                    {
                        label: "Пароль",
                        placeholder: "Придумайте пароль",
                        type: "password",
                        rule: /\./,
                    },
                    {
                        label: "Повторите пароль",
                        placeholder: "Повторите пароль",
                        type: "password",
                        rule: /\./,
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