<template>
    <form-wrapper
        :title="`MoonCode. Вход`"
    >
        <v-text-field
            v-for="field in fields"
            v-model="field.value"
            :placeholder="field.placeholder"
            :key="field.placeholder"
            :label="field.label"
            :type="field.type"
            :rules="field.rules"
        />

        <div class="my-3">
            <v-btn
                class="mb-3"
                color="light-blue darken-3"
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
            fields: [
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
            ],
        }
    },
}
</script>

<style scoped>

</style>