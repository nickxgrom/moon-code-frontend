<template>
    <form-wrapper
        :title="`MoonCode. Вход`"
    >
        <v-alert
            v-if="notificationMsg.visible"
            :type="notificationMsg.type"
            dismissible
        >
            {{ notificationMsg.message }}
        </v-alert>
        <v-text-field
            v-for="field in fields"
            v-model="field.value"
            :placeholder="field.placeholder"
            :key="field.placeholder"
            :label="field.label"
            :type="field.type"
            :rules="field.rules"
            ref="signin-form-input"
        />

        <div class="my-3">
            <v-btn
                class="mb-3"
                color="light-blue darken-3"
                @click="submit"
            >
                Вход
            </v-btn>
            <br/>Нет аккаунта?
            <v-btn
                color="teal lighten-1"
                class="pa-2"
                @click="$router.push('/signup')"
                plain
            >
                Регистрация
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
            notificationMsg: {
                message: "",
                type: "",
                visible: false,
            },
            fields: [
                {
                    label: "Логин",
                    value: "",
                    name: "username",
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
                    name: "password",
                    placeholder: "Введите пароль",
                    type: "password",
                    rules: [
                        v => !!v || "Поле не должно быть пустым",
                        v => !/\s/.test(v) || "Пароль не должен содержать пробелы",
                        v => /.{4,}/.test(v) || "Пароль должен содержать минимум 4 символа",
                    ],
                },
            ],
        }
    },
    methods: {
        async submit() {
            this.notificationMsg.visible = false
            if (this.validate()) {
                await this.$store.dispatch('signin', this.registrationData())
                    .then((res) => {
                        res.json().then(r => {
                            this.notificationMsg = {
                                message: r.message || `Добро пожаловать, ${this.fields[0].value}`,
                                visible: true,
                                type: res.status === 200 ? "success" : "error"
                            }
                        })
                    })
            } else {
                this.notificationMsg = {
                    message: 'Необходимо заполнить все поля',
                    type: 'error',
                    visible: true
                }
            }
        },
        validate() {
            let valid = true
            this.$refs["signin-form-input"].forEach(field => {
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
    }
}
</script>

<style scoped>

</style>