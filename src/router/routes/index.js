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
        path: "/signup",
        name: "signup",
        meta: {layout: 'no'},
        component: () => import('../../views/Signup.vue'),
    },
    {
        path: "/favorites",
        name: "favorites",
        meta: {layout: 'main'},
        component: () => import('../../views/MyFavoritesTasks.vue'),
    },
    {
        path: "/parcels",
        name: "parcels",
        meta: {layout: 'main'},
        component: () => import('../../views/MyParcels.vue'),
    },
    {
        path: "/my-tasks",
        name: "my-tasks",
        meta: {layout: 'main'},
        component: () => import('../../views/MyTasks.vue'),
    },
    {
        path: "/profile",
        name: "profile",
        meta: {layout: 'main'},
        component: () => import('../../views/Profile.vue'),
    },
]

export default routes
