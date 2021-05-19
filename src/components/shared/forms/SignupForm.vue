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
            ref="form-input"
        >

        </v-text-field>

        <div class="my-3">
            <v-btn
                class="mb-3"
                color="mc-accept"
                @click="submit"
                depressed
            >
                Зарегистрироваться
            </v-btn>
            <br/>Есть аккаунт?
            <v-btn
                color="light-blue"
                @click="$router.push('/signin')"
                plain
            >
                Вход
            </v-btn>
        </div>
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
                        name: "firstName",
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
                        name: "secondName",
                        value: "",
                        placeholder: "Введите имя",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /.{2,}/.test(v) || "Поле должно содержать не менее двух букв",
                            v => /^[A-ZА-ЯЁ]/.test(v) || "Фамилия должна начинаться с заглавной буквы",
                            v => /[a-zа-яё-]$/.test(v) || "Поле может содержать только строчные буквы и дефис",
                        ],
                    },
                    {
                        label: "Отчество",
                        name: "patronymic",
                        value: "",
                        placeholder: "Введите отчество",
                        type: "text",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => /.{2,}/.test(v) || "Поле должно содержать не менее двух букв",
                            v => /^[A-ZА-ЯЁ]/.test(v) || "Фамилия должна начинаться с заглавной буквы",
                            v => /[a-zа-яё-]$/.test(v) || "Поле может содержать только строчные буквы и дефис",
                        ],
                    },
                    {
                        label: "Логин",
                        name: "username",
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
                        name: "password",
                        value: "",
                        placeholder: "Введите пароль",
                        type: "password",
                        rules: [
                            v => !!v || "Поле не должно быть пустым",
                            v => !/\s/.test(v) || "Пароль не должен содержать пробелы",
                            v => /.{4,}/.test(v) || "Пароль должен содержать минимум 4 символа",
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
        methods: {
            async submit() {
                if (this.validate()) {
                    let res = await this.$store.dispatch('signup', this.registrationData())
                    console.log(`dev:`)
                    console.log(res.json())
                } else {
                    console.log(`dev: Validation failed`)
                }

            },
            validate() {
                let valid = true
                this.$refs["form-input"].forEach(field => {
                    valid = valid && field.valid
                })
                return valid
            },
            registrationData() {
                let obj = {}
                this.fields.forEach(field => {
                    if (field.name) {
                        obj[field.name] = field.value
                    }
                })
                return obj
            }
        },
    }
</script>

<style scoped>

</style>