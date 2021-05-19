<template>
    <v-sheet
        rounded="lg"
        color="mc-dark-lighten">
        <v-list
            color="transparent"
            class="pa-0"
        >
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
</template>

<script>
export default {
    name: "Sidebar",
    data: () => ({
        items: [
            {title: 'Все задачи', icon: 'mdi-clipboard-list-outline', link: '/'},
            {title: 'Мои задачи', icon: 'mdi-playlist-edit', link: '/my-tasks'},
            {title: 'Закладки', icon: 'mdi-playlist-star', link: '/favorites'},
            {title: 'Мои посылки', icon: 'mdi-view-list', link: '/parcels'},
        ],
    })
}
</script>

<style scoped>

</style>
