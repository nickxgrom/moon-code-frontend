<template>
    <v-row class="d-flex flex-column">
        <v-col>
            <v-container class="fill-height">
                <v-col>
                    <h3 id="sub-title">MoonCode</h3>
                    <span id="main-title">Система автоматизированного тестирования задач</span>
                </v-col>

                <v-spacer></v-spacer>

                <span class="">{{ date | date('datetime') }}</span>
            </v-container>
        </v-col>
        <v-col>
            <v-container class="py-0 fill-height">
                <router-link to="/profile">
                    <v-avatar
                        class="mr-2"
                        color="grey darken-1"
                        size="64"
                    ></v-avatar>
                    Имя пользователя
                </router-link>

                <v-spacer></v-spacer>

                <v-btn
                    @click="isDarkTheme = !isDarkTheme"
                >
                    <v-icon v-text="isDarkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"></v-icon>
                </v-btn>
            </v-container>
        </v-col>

    </v-row>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
        date: new Date(),
        interval: null,
        isDarkTheme: false,
    }),
    mounted() {
        this.interval = setInterval(() => {
            this.date = new Date()
        }, 1000)
    },
}
</script>

<style scoped>
#sub-title {
    margin: 0;
    color: #263238;
}

#main-title {
    margin: 0;
    padding: 0;
    color: #37474F;
}
</style>
