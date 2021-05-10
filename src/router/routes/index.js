
const routes = [
    {
        name: "home",
        path: "/",
        meta: {layout: 'main', title: 'Задачи'},
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
    {
        path: "/favorites",
        name: "favorites",
        meta: {layout: 'main', title: 'Закладки'},
        component: () => import('../../views/MyFavoritesTasks.vue'),
    },
    {
        path: "/parcels",
        name: "parcels",
        meta: {layout: 'main', title: 'Мои посылки'},
        component: () => import('../../views/MyParcels.vue'),
    },
    {
        path: "/my-tasks",
        name: "my-tasks",
        meta: {layout: 'main', title: 'Мои задачи'},
        component: () => import('../../views/MyTasks.vue'),
    },
    {
        path: "/profile",
        name: "profile",
        meta: {layout: 'main', title: 'Профиль'},
        component: () => import('../../views/Profile.vue'),
    },
]

export default routes
