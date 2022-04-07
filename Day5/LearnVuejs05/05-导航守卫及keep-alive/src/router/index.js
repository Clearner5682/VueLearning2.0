import Vue from 'vue'
import Router from 'vue-router'

// 1.普通的路由加载方式（非懒加载）
// import home from '../components/home.vue'
// import about from '../components/about.vue'
// import user from '../components/user.vue'

// 2.懒加载-AMD写法
// const home = resolve => require(['../components/home.vue'], resolve)
// const about = resolve => require(['../components/about.vue'], resolve)
// const user = resolve => require(['../components/user.vue'], resolve)

// 3.懒加载-ES6的写法
const home=()=>import('../components/home.vue')
const HomeNews=()=>import('../components/home-news.vue')
const HomeMessage=()=>import('../components/home-message.vue')
const about=()=>import('../components/about.vue')
const user=()=>import('../components/user.vue')

// 加上下面这行代码，防止重复调用this.$router.push()时报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

let routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'news',
        component:HomeNews,
        // meta:{
        //   title:'首页-新闻'
        // }
      },
      {
        path:'message',
        component:HomeMessage,
        // meta:{
        //   title:'首页-消息'
        // }
      }
    ]
  },
  {
    name: 'about',
    path: '/about',
    component: about,
    meta:{
      title:'关于'
    }
  },
  {
    name: 'user',
    path: '/user/:userid',
    component: user,
    meta:{
      title:'用户'
    },
    // 路由独享的守卫
    beforeEnter:(to,from,next)=>{
      console.log('user独享的守卫:',to,from);
      next();
    }
  }
];


let router = new Router({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to,from,next)=>{
  console.log('全局beforeEach:',to,from);
  
  next();//这里必须要调用next()才能成功跳转路由
});

router.afterEach((to,from)=>{
  console.log('全局afterEach:',to,from);

  // 小功能：组件跳转时把网页的title也改成相应的名称
  // 需要使用meta存放路由的描述信息
  document.title=to.matched[0].meta.title;
})

export default router
