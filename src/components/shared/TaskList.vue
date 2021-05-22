<template>
    <v-sheet
        color="mc-dark"
    >
        <h2 class="mb-5">{{ title }}</h2>
        <v-card
            v-for="item in items"
            :key="item.id"
            color="mc-dark-lighten"
            class="mb-3 pa-3"
        >
            <div class="d-flex justify-space-between">
                <v-card-title class="ma-0 pa-0">{{ item.title }}</v-card-title>
                <v-card-subtitle class="ma-0 pa-0">
                    <v-btn icon>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                    <span :class="{
                        'error--text': item.rating < 0,
                        'success--text': item.rating > 0
                    }">
                        {{ item.rating }}
                    </span>
                    <v-btn icon>
                        <v-icon>mdi-menu-up</v-icon>
                    </v-btn>
                </v-card-subtitle>
            </div>
            <v-card-text>
                {{ item.description }}
            </v-card-text>
            <v-card-actions>
                <v-btn icon>
                    <v-icon>
                        {{ item.inBookmark ? `mdi-bookmark` : `mdi-bookmark-off` }}
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>

<script>
    export default {
        name: "ViewWrapper",
        props: {
            title: String,
            items: Array,
        }
    }
</script>

<style scoped>

</style>