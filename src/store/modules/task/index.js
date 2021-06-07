const BASE_URL = 'http://localhost:3000/api'
export default {
    state: {
        taskList: [],
        bookmarks: [],
        currentTask: {},
        notification: {
            message: "",
            type: "success",
            visible: false
        },
    },
    mutations: {
        setTaskList(state, taskList) {
            state.taskList = taskList
        },
        setBookmarkList(state, bookmarks) {
            state.bookmarks = bookmarks
        },
        setCurrentTask(state, task) {
            state.currentTask = task
        },
        showNotification(state, {obj, status}) {
            state.notification.message = obj.message
            state.notification.type = status ? 'success' : 'error'
            state.notification.visible = true
            setTimeout(() => {
                state.notification.visible = false
            }, 4000)
        },
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
        async getBookmarks({ commit }) {
            let result = await fetch(`${BASE_URL}/tasks?favorites=true`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( response => response.json())
                .then(res => res.tasks)
            commit('setBookmarkList', result)
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
        async createTask({ dispatch, commit }, {task, tests}) {
            await fetch(`${BASE_URL}/task`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(task)
            }).then( async res => {
                let resObj = await res.json()
                if (res.ok) {
                    let taskId = resObj.task.id
                    for (const test of tests) {
                        await dispatch('createTest', {taskId, test})
                    }
                }
                commit('showNotification', {obj: resObj, status: res.ok})
            })
        },
        async createTest({commit}, {taskId, test}) {
            console.log(taskId)
            await fetch(`${BASE_URL}/task/test?taskId=${taskId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(test)
            }).then(res => console.log(res))
        },
        async changeRating({ dispatch, commit }, { taskId, value }) {
            await fetch(`${BASE_URL}/task/rating?taskId=${taskId}&value=${value}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }).then( async () => {
                await dispatch('getTaskList')
                await dispatch('getBookmarks')
                await dispatch('getTaskById', {id: taskId})
            })
        },
    }
}