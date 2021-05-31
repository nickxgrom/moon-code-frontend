export default {
    actions: {
        async signup({ commit }, payload) {
            return await fetch("http://localhost:3000/api/auth/registration", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
        },
        async signin({ commit }, payload) {
            return await fetch("http://localhost:3000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
        },
    }
}