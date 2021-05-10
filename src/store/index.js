import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: "ru",
        isDarkTheme: false,
    },
    mutations: {
        setLang(state, lang) {
            state.lang = lang
        },
        setDarkTheme(state, isDarkTheme) {
            state.isDarkTheme = isDarkTheme
        }
    },
    getters: {
        lang: s => s.lang,
        isDarkTheme: s => s.isDarkTheme
    },
    modules: {

    }
})
