import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes =[
  { path: '/', redirect: '/before' },
  { path: '/login', component: () => import('../components/log/login.vue') },
  { path: '/test', component: () => import('../components/test.vue') },
  { path: '/register', component: () => import('../components/log/register.vue'), meta:{Auth: true}},
  { path: '*', component: () => import('../components/notFound.vue')},

  //社区，类似知乎
  {
    path:'/community',
    redirect:'/community/communityHome',
    component:() => import('@/community/communityContainer.vue'),
    children:[
      // {path:'welcome',component:()=> import('@/back/backComponents/index/newwelcome.vue'),meta:{Auth:true}},
      {path:'communityHome',component:()=> import('@/community/communityComponents/communityHome.vue')},
      {path:'writeArticle',component:()=> import('@/community/communityComponents/write/writeArticle.vue')},
    ]
  },
  //消息中心
  {
    path:'/news',
    redirect:'/news/newsHome',
    component:() => import('@/news/newsContainer.vue'),
    children:[
      {path:'newsHome',component:()=> import('@/news/newsComponents/newsHome.vue')},
      {path:'systemNews',component:()=> import('@/news/newsComponents/systemNews.vue')},
      {path:'receiveAgrees',component:()=> import('@/news/newsComponents/receiveAgree.vue')},
      {path:'replay',component:()=> import('@/news/newsComponents/replay.vue')},
    ]  {
    path:'/back',
    redirect: '/back/welcome',

    component:() => import('@/back/backContainer.vue'),
    children:[
      // {path:'welcome',component:()=> import('@/back/backComponents/index/newwelcome.vue'),meta:{Auth:true}},
      {path:'welcome',component:()=> import('@/back/backComponents/index/newwelcome.vue')},
      {path:'userInformation',component:()=> import('@/back/backComponents/userInformation.vue')},
      {path:'browsingRecords',component:()=> import('@/back/backComponents/browsingRecords.vue')},
      {path:'searchResults',component:()=> import('@/back/backComponents/searchResults.vue')},
      {path:'relationshipGraph',component:()=> import('@/back/backComponents/relationshipGraph.vue')},
      {path:'backNews',component:()=> import('@/back/backComponents/backNews.vue')},
    ]
  },
  },

  //后台路由重定向



  //前台路由重定向
  {
    path:'/before',
    redirect: '/before/beforeWelcome',
    component:() => import('@/before/beforeContainer.vue'),
    children:[
      {path:'beforeWelcome',component:()=> import('@/before/beforeComponents/welcome.vue')},
      {path:'beforeSearch',component:()=> import('@/before/beforeComponents/beforeSearch.vue')},
      {path:'aboutUs',component:()=> import('@/before/beforeComponents/aboutUs.vue')},
    ]
  }

]
const router = new Router({
  routes
})



// 挂载路由导航守卫
// 判断token是否存在，如果存在将携带token进行下一簇的操作，如果不存在，则返回登陆
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.Auth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          returnURL: to.path
        }
      })
    }
  } else {
    next()
  }
})
//
// // 前端登录拦截
// router.beforeEach(function (to, from ,next) {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
