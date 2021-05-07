<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="#C5CAE9"
            flat
            height="200"
        >
            <v-row class="d-flex flex-column">
                <v-col>
                    <v-container>
                        <h3 id="sub-title">MoonCode</h3>
                        <span id="main-title">Система автоматизированного тестирования задач</span>
                    </v-container>
                </v-col>
                <v-col>
                    <v-container class="py-0 fill-height">
                        <router-link to="/profile">
                            <v-avatar
                                class="mr-10"
                                color="grey darken-1"
                                size="32"
                            ></v-avatar>
                        </router-link>

                        <v-btn
                            v-for="item in items"
                            :key="item.link"
                            text
                            :to="item.link"
                        >
                            {{ item.title }}
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-responsive max-width="260">
                            <v-text-field
                                dense
                                flat
                                hide-details
                                rounded
                                solo-inverted
                            ></v-text-field>
                        </v-responsive>
                    </v-container>
                </v-col>

            </v-row>

        </v-app-bar>

        <v-main app class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">
                            <v-list color="transparent">
                                <v-list-item
                                    v-for="item in items"
                                    :key="item.link"
                                    link
                                    :to="item.link"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-divider class="my-2"></v-divider>

                                <v-list-item
                                    link
                                    color="grey lighten-4"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            Refresh
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                        >
                            <router-view class="p-5"></router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>


</template>

<script>
export default {
    name: "MainLayout",
    data() {
        return {
            items: [
                {title: 'Все задачи', icon: 'mdi-view-dashboard', link: '/'},
                {title: 'Мои задачи', icon: 'mdi-image', link: '/my-tasks'},
                {title: 'Закладки', icon: 'mdi-help-box', link: '/favorites'},
                {title: 'Мои посылки', icon: 'mdi-help-box', link: '/parcels'},
            ],
            right: null,
            drawer: true,
        }
    },
}
</script>

<style>
#sub-title {
    margin: 0;
    color: darkcyan;
}

#main-title {
    margin: 0;
    padding: 0;
    color: cadetblue;
}
</style>
