<template>
    <form-wrapper
        title="Добро пожаловать в MoonCode"
    >
        <v-text-field
            v-for="field in fields"
            v-model="field.value"
            :placeholder="field.placeholder"
            :key="field.placeholder"
            :label="field.label"
            :type="field.type"
            :rules="field.rules"
        >

        </v-text-field>

        <v-btn color="teal lighten-1">Регистрация</v-btn>
        <br/>или<br/>
        <v-btn color="light-blue darken-3">Вход</v-btn>
    </form-wrapper>
</template>

<script>
    import FormWrapper from "./FormWrapper.vue";
    export default {
        name: "SignupForm",
        components: {
            FormWrapper,
        },
        data() {
            return {
                fields: [
                    {
                        label: "Фамилия",
                        value: "",
                        placeholder: "Введите фамилию",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /.{2,}/.test(v) || "Поле должно содержать не менее двух букв",


                            v => /^[A-ZА-ЯЁ]/.test(v) || "Фамилия должна начинаться с заглавной буквы",
                            v => /[a-zа-яё-]$/.test(v) || "Поле может содержать только строчные буквы и дефис",

                        ],
                    },
                    {
                        label: "Имя",
                        value: "",
                        placeholder: "Введите имя",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(v) || "LKJ"
                        ],
                    },
                    {
                        label: "Отчество",
                        value: "",
                        placeholder: "Введите отчество",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(v) || "LKJ"
                        ],
                    },
                    {
                        label: "Логин",
                        value: "",
                        placeholder: "Введите логин",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /^[A-Za-z\d]+$/.test(v) || "Поле может содержать только буквы и цифры"
                        ],
                    },
                    {
                        label: "Пароль",
                        value: "",
                        placeholder: "Введите пароль",
                        type: "password",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => !/\s/.test(v) || "Пароль не должен содержать пробелы"
                        ],
                    },
                    {
                        label: "Повтор пароля",
                        value: "",
                        placeholder: "Повторите пароль",
                        type: "password",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => v === this.fields[4].value || "Пароли не совпадают"
                        ],
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>