<template>
  <div>
    <h1>我是标题：{{ title }}</h1>
    <div>我是内容:{{ message }}</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- 在组件中再使用Router-View -->
    <!-- 当路由匹配子路由时就会在Router-View中渲染子组件 -->
    <!-- Router-View只是一个占位标签而已，会用子组件来替换Router-View -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "首頁",
      message: "哈哈哈",
    };
  },
};
</script>

<style>
</style>