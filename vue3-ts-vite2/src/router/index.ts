import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: "首页",
            keepAlive: true,
            requireAuth: true
        },
        component: () => import("../views/Home/index.vue")
    },
    {
        path: '/select',
        name: 'Select',
        meta: {
            title: "选项",
            keepAlive: true,
            requireAuth: true
        },
        component: () => import("../views/Select/index.vue")
    },
    {
        path: '/detail/:id/:item',
        name: 'Detail',
        meta: {
            title: "选项",
            keepAlive: true,
            requireAuth: true
        },
        component: () => import("../views/Detail/index.vue")
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: "登录",
            keepAlive: true
        },
        component: () => import("../views/Login/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (window.localStorage.getItem('accessToken')) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
            window.localStorage.clear()
        }
    }
    else {
        next();
    }
})

export default router
