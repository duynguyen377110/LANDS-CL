import { createWebHashHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: 'dashboard',
        component: () => import("../views/DashboardView.vue"),
        children: [
            {
                path: '',
                name: 'dashboard-main',
                component: () => import("../components/dashboard/DashboardMain.vue")
            },
            {
                path: 'land/:id',
                name: 'land-detail',
                component: () => import("../components/dashboard/DashboardLandDetail.vue")
            },
            {
                path: "about",
                name: "dashboard-about",
                component: () => import("../components/dashboard/DashboardAbout.vue")
            }
        ]
    },
    {
        path: "/auth",
        name: "auth",
        component: () => import("../views/AuthView.vue"),
        children: [
            {
                path: "",
                name: 'signin',
                component: () => import("../components/auth/AuthSignin.vue")
            },
            {
                path: 'signup',
                name: "signup",
                component: () => import("../components/auth/AuthSignup.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router;