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
                    color="white"
                    @click="$router.push('/signin')"
                    text
                >
                    Вход
                </v-btn>
                <v-btn
                    color="mc-accept"
                    @click="$router.push('/signup')"
                    depressed
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
    h2 {
        color: #cdd9e5;
    }
</style>
