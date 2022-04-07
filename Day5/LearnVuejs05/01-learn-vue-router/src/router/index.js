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
    component: home
  },
  {
    name: 'home',
    path: '/home',
    component: home
  },
  {
    name: 'about',
    path: '/about',
    component: about
  },
  {
    name: 'user',
    path: '/user/:userid',
    component: user
  }
];

export default new Router({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active'
})
