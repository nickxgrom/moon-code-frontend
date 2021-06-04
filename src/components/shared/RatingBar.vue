<template>
    <v-card-subtitle class="ma-0 pa-0">
        <v-btn icon
            @click="changeRating(rating.userVatedValue === 'NEGATIVE' ? 'NOTHING' : 'NEGATIVE')"
            :color="rating.userVatedValue === 'NEGATIVE' ? 'error' : 'white'"
        >
            <v-icon size="36">mdi-menu-down</v-icon>
        </v-btn>
        <span class="mx-4 text-h6">{{ rating.ratingNumber }}</span>
        <v-btn icon
               @click="changeRating(rating.userVatedValue === 'POSITIVE' ? 'NOTHING' : 'POSITIVE')"
               :color="rating.userVatedValue === 'POSITIVE' ? 'primary' : 'white'"
        >
            <v-icon size="36">mdi-menu-up</v-icon>
        </v-btn>
    </v-card-subtitle>
</template>

<script>
export default {
    name: "RatingBar",
    props: {
        rating: Object,
        taskId: Number,
    },
    methods: {
        async changeRating(value) {
            await this.$store.dispatch('changeRating', { taskId: this.taskId, value } )
        },
    }
}
</script>

<style scoped>

</style>