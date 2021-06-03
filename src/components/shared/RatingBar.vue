<template>
    <v-card-subtitle class="ma-0 pa-0">
        <v-btn icon
            @click="downRating"
            :color="rating.userVatedValue === 'NEGATIVE' ? 'error' : 'white'"
        >
            <v-icon>mdi-menu-down</v-icon>
        </v-btn>
        <span>{{ rating.ratingNumber }}</span>
        <v-btn icon
               @click="upRating('POSITIVE')"
               :color="rating.userVatedValue === 'POSITIVE' ? 'primary' : 'white'"
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