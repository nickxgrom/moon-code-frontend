<template>
    <v-sheet
        color="mc-dark"
    >
        <div class="d-flex justify-space-between">
            <h2 class="mb-5">{{ title }}</h2>
            <slot/>
        </div>
        <v-card
            v-for="item in items"
            :key="item.id"
            color="mc-dark-lighten"
            class="mb-3 pa-3"
        >
            <div class="d-flex justify-space-between">
                <v-card-title class="ma-0 pa-0">{{ item.title }}</v-card-title>
                <rating-bar
                    :rating="item.rating"
                    :task-id="item.id"
                />
            </div>
            <v-card-text>
                {{ item.text }}
            </v-card-text>
            <v-card-actions>
                <v-btn
                    @click="changeBookmark(item)"
                    icon
                >
                    <v-icon>
                        {{ item.inBookmark ? `mdi-bookmark` : `mdi-bookmark-off` }}
                    </v-icon>
                </v-btn>
                <v-btn
                    @click="$router.push(`task-view/${item.id}`)"
                    color="success"
                >
                    Подробнее
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>

<script>
    import RatingBar from "./RatingBar.vue";
    export default {
        name: "ViewWrapper",
        props: {
            title: String,
            items: Array,
        },
        components: {
            RatingBar,
        },
        methods: {
            async changeBookmark(item) {
                await this.$store.dispatch('changeBookmark', { taskId: item.id, value: !item.inBookmark })
            }
        }
    }
</script>

<style scoped>

</style>