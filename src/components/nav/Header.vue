<template>
    <v-row>
        <v-col cols="3"></v-col>
        <v-col>
            <h2 class="text-center align-center">MoonCode</h2>
        </v-col>
        <v-col cols="3" class="action-button d-flex justify-end">
            <div
                v-if="!checkLogin()"
                class="action-button"
            >
                <v-btn
                    color="mc-accept"
                    @click="$router.push('/signin')"
                >
                    Войти
                </v-btn>
            </div>

            <v-menu v-else offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ this.$store.state.auth.username }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-icon>
                            <v-icon>mdi-logout-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Выйти
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
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
        methods: {
            checkLogin() {
                return localStorage.getItem('token')
            },
            logout() {
                localStorage.removeItem('token')
                this.$router.go()
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: #cdd9e5;
    }
</style>
