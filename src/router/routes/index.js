const routes = [
    {
        name: "home",
        path: "/",
        meta: {layout: 'main', title: 'Задачи'},
        component: () => import('../../views/Home.vue'),
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
