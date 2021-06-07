const BASE_URL = 'http://localhost:3000/api'

export default {
    state: {},
    mutations: {},
    actions: {
        async getAllTestsByTaskId({commit}, { id }) {
            return await fetch(`${BASE_URL}/task/tests?taskId=${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then(response => response.json())
        },
        async sendParcel({ commit }, { id, code }) {
            return  await fetch(`${BASE_URL}/parcel?taskId=${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: code})
            }).then(res => res.json())
        }
    }
}