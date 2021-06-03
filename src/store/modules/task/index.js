const BASE_URL = 'http://localhost:3000/api/'
export default {
    state: {

    },
    mutations: {

    },
    actions: {
        async getTaskList() {
            let result = await fetch(`${BASE_URL}/tasks`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( response => response.json())
                .then(res => res.tasks)
            return result
        },
        getBookmarks() {

        },
        getUploadTasks() {

        },
        getDoneTasks() {

        },
        async getTaskById({commit}, {id}) {
            return await fetch(`${BASE_URL}/task?id=${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( response => response.json())
        },
        createTask() {

        },
        updateTask() {

        },
        deleteTask() {

        },
        async upRating({ commit }, { taskId, value }) {
            return await fetch(`${BASE_URL}/task/rating?taskId=${taskId}&value=${value}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then(response => response.json())
        },
        downRating() {},

    }
}