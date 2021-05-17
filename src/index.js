import Vue from "vue"
import app from "./app.vue";
import router from "./router/index"
import vuetify from "./plugins/vuetify";
import dateFilter from "./filters/date.filter.js";
import store from "./store/index.js"


Vue.filter('date', dateFilter)

new Vue({
    vuetify,
    el: `#app`,
    template: `<app/>`,
    components: {
        app,
    },
    router,
    store
})

window.getSelection().addRange(new Range())
