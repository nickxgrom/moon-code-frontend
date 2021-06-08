<template>
    <v-sheet
        color="mc-dark-lighten"
        class="sidebar"
    >
        <v-list
            color="transparent"
            class="pa-0"
            flat
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

            <v-divider></v-divider>

            <v-list-item
                link
                to="/new-task">
                <v-list-item-icon>
                    <v-icon>mdi-plus-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Добавить задачу
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
            {title: 'Загруженные задачи', icon: 'mdi-playlist-edit', link: '/my-tasks'},
            {title: 'Решенные', icon: 'mdi-view-list', link: '/task-overview'},
            {title: 'Закладки', icon: 'mdi-bookmark', link: '/favorites'},
        ],
    })
}
</script>

<style scoped>
    .sidebar {
        height: 100%;
    }
</style>
