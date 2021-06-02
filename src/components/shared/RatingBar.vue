<template>
    <v-card-subtitle class="ma-0 pa-0">
        <v-btn icon
            @click="downRating"
        >
            <v-icon>mdi-menu-down</v-icon>
        </v-btn>
        <span>{{ rating.ratingNumber }}</span>
        <v-btn icon
               @click="upRating"
        >
            <v-icon>mdi-menu-up</v-icon>
        </v-btn>
    </v-card-subtitle>
</template>

<script>
export default {
    name: "RatingBar",
    props: {
        rating: Object,
    },
    methods: {
        async downRating() {

        },
        async upRating() {

        },
    }
}
</script>

<style scoped>

</style>