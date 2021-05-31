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
        getTaskById() {

        },
        createTask() {

        },
        updateTask() {

        },
        deleteTask() {

        },
    }
}