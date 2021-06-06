<template>
    <v-app id="inspire">
        <v-app-bar
            app
            flat
            color="mc-header-dark"
        >
            <Header/>
        </v-app-bar>

        <v-main app class="mc-dark">
            <v-container id="main-container" class="ma-0 pa-0">
                <v-row class="fill-height ma-0">
                    <v-col cols="2" class="pa-0" >
                        <Sidebar/>
                    </v-col>
                    <v-col>
                        <v-sheet
                            class="pa-6"
                            color="mc-dark"
                        >
                            <v-alert
                                v-if="notification.visible"
                                :type="notification.type"
                                transition="scale-transition"
                            >
                                {{ notification.message }}
                            </v-alert>
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
        },
        notification() {
            return this.$store.state.task.notification || {}
        }
    }
}
</script>

<style scoped>
    #main-container {
        height: 100%;
    }
</style>
