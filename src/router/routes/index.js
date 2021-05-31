const routes = [
    {
        name: "home",
        path: "/",
        meta: {layout: 'main', title: 'Задачи'},
        component: () => import('../../views/Home.vue'),
    },
    {
        name: "new-task",
        path: "/new-task",
        meta: {layout: 'main', title: 'Новая задача'},
        component: () => import('../../views/NewTask.vue'),
    },
    {
        name: "task-view",
        path: "/task-view/:id",
        meta: {layout: 'main', title: 'Задача'},
        component: () => import('../../views/Task.vue'),
    },
    {
        path: "/signup",
        name: "signup",
        meta: {layout: 'no'},
        component: () => import('../../views/Signup.vue'),
    },
    {
        path: "/signin",
        name: "signin",
        meta: {layout: 'no'},
        component: () => import('../../views/Signin.vue'),
    },
]

export default routes
