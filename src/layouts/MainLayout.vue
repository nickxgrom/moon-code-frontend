<template>
    <v-app id="inspire" color="dark">
        <v-app-bar
            app
            flat
            color="mc-header-dark"
        >
            <Header/>
        </v-app-bar>

        <v-main app class="mc-dark">
            <v-container class="ma-0">
                <v-row>
                    <v-col cols="2" class="pa-0">
                        <Sidebar/>
                    </v-col>
                    <v-col>
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="p-5"
                            color="mc-dark"
                        >
                            <h3>{{ title }}</h3>
                            <router-view></router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Header from "../components/nav/Header.vue";
import Sidebar from "../components/nav/Sidebar.vue";
export default {
    name: "MainLayout",
    components: {
        Header,
        Sidebar
    },
    computed: {
        title() {
            return this.$route.meta.title
        }
    }
}
</script>

<style></style>
