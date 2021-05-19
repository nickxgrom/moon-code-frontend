// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            dark: {
                'mc-header-dark': '#2d333b',
                'mc-dark': '#1e2228',
                'mc-dark-lighten': '#22272e',
                'mc-text': '#cdd9e5',
            }
        },
        dark: true
    },

}

export default new Vuetify(opts)
