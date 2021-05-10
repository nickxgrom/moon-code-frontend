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

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="mr-5"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-translate</v-icon>
                        </v-btn>
                    </template>
                    <v-list flat outlined>
                        <v-subheader class="mb-4">Переводы</v-subheader>
                        <v-list-item-group
                            v-model="lang"
                            @change="changeLang"
                        >
                            <v-list-item
                                v-for="(item) in items"
                                :key="item.value"
                                :value="item.value"
                                selectable
                            >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-btn
                    @click="changeTheme"
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

        lang: 'ru',
        items: [
            { title: 'Русский', value: 'ru' },
            { title: 'English', value: 'en' },
        ],
    }),
    mounted() {
        this.interval = setInterval(() => {
            this.date = new Date()
        }, 1000)
    },
    methods: {
        changeTheme() {
            this.$store.commit('setDarkTheme', !this.isDarkTheme)
            this.isDarkTheme = this.$store.getters.isDarkTheme
        },
        changeLang() {
            this.$store.commit('setLang', this.lang)
            this.lang = this.$store.getters.lang
        }
    }
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
