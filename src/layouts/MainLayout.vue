<template>
    <v-app id="inspire">
        <v-app-bar
            app
            class="indigo lighten-4"
            flat
            height="250"
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
import Header from "../components/appbar/Header.vue";
import Sidebar from "../components/appbar/Sidebar.vue";
export default {
    name: "MainLayout",
    components: {
        Header,
        Sidebar
    },
}
</script>

<style></style>
