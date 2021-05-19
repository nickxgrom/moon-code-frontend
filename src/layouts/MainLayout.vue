<template>
    <v-app id="inspire">
        <v-app-bar
            app
            flat
        >
            <Header/>
        </v-app-bar>

        <v-main app class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <Sidebar/>
                    </v-col>
                    <v-col>
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="p-5"
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
