import Vue from "vue"
import app from "./app.vue";
import router from "./router/index"
import vuetify from "./plugins/vuetify";
import dateFilter from "./filters/date.filter.js";

Vue.filter('date', dateFilter)

new Vue({
    vuetify,
    el: `#app`,
    template: `<app/>`,
    components: {
        app,
    },
    router
})

window.getSelection().addRange(new Range())
