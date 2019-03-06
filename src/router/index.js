import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index/template.vue'
// import User from '@/pages/User/template.vue'
// import Register from '@/pages/Register/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import My from '@/pages/My/template.vue'
// import Detail from '@/pages/Detail/template.vue'
// import Create from '@/pages/Create/template.vue'
// import Login from '@/pages/Login/template.vue'
import store from '@/store/'

Vue.use(Router)

// const router = new Router({
//   routes: [{
//     path: '/',
//     component: Index
//   },
//   {
//     path: '/login',
//     component: Login
//   },
//   {
//     path: '/Register',
//     component: Register
//   },
//   {
//     path: '/Index',
//     component: Index
//   },
//   {
//     path: '/User',
//     component: User
//   },
//   {
//     path: '/Edit/:blogId',
//     component: Edit,
//     meta: {requiresAuth: true}
//   },
//   {
//     path: '/My',
//     component: My,
//     meta: {requiresAuth: true}
//   },
//   {
//     path: '/Detail/:blogId',
//     component: Detail
//   },
//   {
//     path: '/Create',
//     component: Create,
//     meta: {requiresAuth: true}
//   }
//   ]
// })

const router = new Router({
  routes: [{
    path: '/',
    component: () => import('@/pages/Index/template.vue') 
  },
  {
    path: '/login',
    component: () => import('@/pages/Login/template.vue')
  },
  {
    path: '/Register',
    component: () => import('@/pages/Register/template.vue')
  },
  {
    path: '/User/:userId',
    component: () => import('@/pages/User/template.vue')
  },
  {
    path: '/Edit/:blogId',
    component: () => import('@/pages/Edit/template.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/My',
    component: () => import('@/pages/My/template.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/Detail/:blogId',
    component: () => import('@/pages/Detail/template.vue')
  },
  {
    path: '/Create',
    component: () => import('@/pages/Create/template.vue'),
    meta: {requiresAuth: true}
  }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('checkLogin').then((isLogin) => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
