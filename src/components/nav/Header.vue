<template>
    <v-row>
        <v-col cols="3">

        </v-col>
        <v-col>
            <h2 class="text-center align-center">MoonCode</h2>
        </v-col>
        <v-col cols="3" class="action-button d-flex justify-end">
            <div
                v-if="checkLogin()"
                class="action-button"
            >
                <v-btn
                    color="light-blue darken-3"
                    @click="$router.push('/signin')"
                >
                    Вход
                </v-btn>
                <v-btn
                    color="teal lighten-1"
                    @click="$router.push('/signup')"
                >
                    Регистрация
                </v-btn>
            </div>
            <div
                class="profile-button"
                v-if="!checkLogin()"
            >
                Username etc.
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        checkLogin() {
            return true;
        }
    }
}
</script>

<style scoped>

</style>
