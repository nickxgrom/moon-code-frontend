<template>
    <div>
        <v-card color="mc-dark-lighten" flat>
            <div class="d-flex justify-space-between">
                <v-card-title>
                    TaskName here
                </v-card-title>
                <v-card-subtitle class="ma-0 pa-0">
                    <v-btn icon>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                    <span>0</span>
                    <v-btn icon>
                        <v-icon>mdi-menu-up</v-icon>
                    </v-btn>
                </v-card-subtitle>
            </div>
            <v-card-text class="pr-10" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iure pariatur quis voluptatum. Debitis porro quisquam sunt. Amet at, corporis deleniti deserunt eveniet iste maiores pariatur perspiciatis repellendus tenetur, vero?
            </v-card-text>

            <task-tests
                readonly
                :items="testItems"
            />

        </v-card>
    </div>
</template>

<script>
    import TaskTests from "./addTask/TaskTests.vue";
    export default {
        name: "TaskPreview",
        components: {
            TaskTests
        },
        data() {
            return {
                // TODO: this is placeholder
                testItems: [
                    {
                        items: [
                            {
                                type: "Boolean",
                                value: true
                            },
                            {
                                type: "String",
                                value: "Lorem impsum dolor sit amet"
                            },
                        ],
                        output: {
                            type: "Number",
                            value: "123.12",
                        }
                    },
                    {
                        items: [
                            {
                                type: "Boolean",
                                value: true
                            },
                            {
                                type: "String",
                                value: "Lorem impsum dolor sit amet"
                            },
                        ],
                        output: {
                            type: "Number",
                            value: "123.12",
                        }
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>