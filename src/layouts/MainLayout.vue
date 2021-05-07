<template>
    <v-container fluid>
        <v-app>
            <v-app-bar app fixed >
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            </v-app-bar>

            <v-navigation-drawer app permanent :mini-variant="drawer" v-model="drawer">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Application
                        </v-list-item-title>
                        <p>Система автоматизированного тестирования задач</p>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-list
                    dense
                    nav
                >
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        :to="item.link"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>


            <v-main app>
                <v-container fluid>
                    <h1>Main Layout</h1>
                    <router-view></router-view>
                </v-container>
            </v-main>


            <v-footer app>
                <!-- -->
            </v-footer>

        </v-app>
    </v-container>


</template>

<script>
export default {
    name: "MainLayout",
    data () {
        return {
            items: [
                { title: 'Все задачи', icon: 'mdi-view-dashboard', link: '/' },
                { title: 'Мои задачи', icon: 'mdi-image', link: '/my-tasks' },
                { title: 'Закладки', icon: 'mdi-help-box', link: '/favorites' },
                { title: 'Мои посылки', icon: 'mdi-help-box', link: '/parcels' },
            ],
            right: null,
            drawer: true,
        }
    },
}
</script>

<style scoped>
</style>
