import Vue from "vue"
import app from "./app.vue";
import router from "./router/index"

new Vue({
    el: `#app`,
    template: `<app/>`,
    components: {
        app,
    },
    router
})