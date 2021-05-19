import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async signup({ commit }, payload) {
            return await fetch("http://localhost:3000/api/auth/registration", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
        }
    }
})
