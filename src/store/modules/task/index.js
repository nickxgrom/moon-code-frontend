const BASE_URL = 'http://localhost:3000/api/'
export default {
    state: {
        taskList: [],
        currentTask: {},
    },
    mutations: {
        setTaskList(state, taskList) {
            state.taskList = taskList
        },
        setCurrentTask(state, task) {
            state.currentTask = task
        }
    },
    actions: {
        async getTaskList({ commit }) {
            let result = await fetch(`${BASE_URL}/tasks`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( response => response.json())
                .then(res => res.tasks)
            commit('setTaskList', result)
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
                .then(res => {
                    commit('setCurrentTask', res)
                })
        },
        createTask() {

        },
        updateTask() {

        },
        deleteTask() {

        },
        async changeRating({ dispatch, commit }, { taskId, value }) {
            await fetch(`${BASE_URL}/task/rating?taskId=${taskId}&value=${value}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( async () => {
                await dispatch('getTaskList')
                await dispatch('getTaskById', {id: taskId})
            })
        },
        downRating() {},

    }
}