import Vue from "vue"
import app from "./app.vue";
import router from "./router/index"
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue({
    el: `#app`,
    template: `<app/>`,
    components: {
        app,
    },
    router
})

window.getSelection().addRange(new Range())