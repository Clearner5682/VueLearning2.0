<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="primary">test</van-button>
    <VanButton type="danger">test2</VanButton>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// 方式一：通过babel-plugin-import插件实现按需引入，即只有用到的组件才会被打包
import {Button,Toast} from 'vant'

// 方式二：手动按需引入
// import Button from 'vant/lib/button'
// import 'vant/lib/button/style'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VanButton:Button,
    // Toast:Toast
  },
  mounted(){
    Toast.success('hello vant');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
