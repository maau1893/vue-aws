import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./components/ListTest.vue")
    },
    {
        path: "/route1",
        name: "Route1",
        component: () => import("./components/Route1.vue")
    },
    {
        path: "/route2",
        name: "Route2",
        component: () => import("./components/Route2.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;