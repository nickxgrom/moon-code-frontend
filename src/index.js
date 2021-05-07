import Vue from "vue"
import app from "./app.vue";
import router from "./router/index"
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from "./plugins/vuetify";
import dateFilter from "./filters/date.filter.js";

Vue.filter('date', dateFilter)
Vue.use(BootstrapVue)

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
