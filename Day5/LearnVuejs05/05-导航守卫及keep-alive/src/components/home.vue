<template>
  <div>
    <h1>我是标题：{{ title }}</h1>
    <div>我是内容:{{ message }}</div>
    <router-link :to="'/home/news'">新闻</router-link>
    <router-link :to="'/home/message'">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "首頁",
      message: "哈哈哈",
      path:'/home/news'
    };
  },
  // 组件内的守卫-前置
  beforeRouteEnter:(to,from,next)=>{
    // 在渲染该组件的路由被confirm前调用
    // 不！能！获取组件实例`this`
    // 因为当守卫执行前，组件实例还未创建
    console.log('home beforeRouteEnter')
    next();
  },
  beforeRouteUpdate(to,from,next){
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径/foo/:id，在/foo/1和/foo/2之间跳转时
    // 由于会渲染同样的Foo组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用
    // 可以访问组件实例`this`
    console.log('home beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to,from,next){
    // 导航离开该组件对应的路由时调用
    // 可以访问组件实例`this`
    console.log('home beforeRouteLeave')
    // 这里在路由切换到其他路由时，把当前的path保存下来，下次切换回来时直接跳转到保存的path
    // 这样就可以实现每次回到home组件时（activated），就能直接跳转到离开之前的路由
    this.path=from.path;

    next();
  },

  // ！！！注意：如果beforeRouteLeave换成下面这种写法，this的指向就不是组件实例了

  // beforeRouteLeave:(to,from,next)=>{
  //   // 导航离开该组件对应的路由时调用
  //   // 可以访问组件实例`this`
  //   console.log('beforeRouteLeave')
  //   this.path=from.path;
  //   console.log(this);

  //   next();
  // },
  created(){
    console.log('home created')
  },
  /* 这两个生命周期函数只有在keep-alive中时才会被触发 */
  activated(){
    console.log('home activated')
    this.$router.push(this.path);
  },
  deactivated(){
    console.log('home deactivated')
  },
  /* END */
  destroyed(){
    console.log('home destroyed')
  }
};
</script>

<style>
</style>