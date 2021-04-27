<template>
  <div>
    <div>
      <!-- tag决定router-link以什么控件形式呈现 -->
      <!-- 默认为a标签 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link :to="'/user/'+ userid">用户</router-link>
      <button @click="clickHandler">手动跳转到用户路由</button>
      <!-- replace特性决定路由跳转时是使用pushState还是使用replaceState -->
      <!-- 如果使用replaceState，则无法前进和后退 -->
      <!-- <router-link to="/home" replace tag="button">首页</router-link>
      <router-link to="/about" replace tag="button">关于</router-link> -->
    </div>
    <hr />
    <div>
      <!-- router-view是vue自带的全局组件，用来显示当前路由对应的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            userid:'123456'
        }
    },
    methods:{
        clickHandler(){
            this.$router.push('/user/999999')
        }
    }
};
</script>

<style>
.active {
  color: red;
}
</style>