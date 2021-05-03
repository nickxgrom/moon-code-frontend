
const routes = [
    {
        name: "home",
        path: "/",
        meta: {layout: 'main'},
        component: () => import('../../views/Home.vue'),
    },
    {
        path: "/login",
        name: "login",
        meta: {layout: 'empty'},
        component: () => import('../../views/Login.vue'),
    },
    {
        path: "/register",
        name: "register",
        meta: {layout: 'empty'},
        component: () => import('../../views/Register.vue'),
    },
]

export default routes
