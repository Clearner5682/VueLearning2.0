// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 通过打印App组件可以看到App不包含任何template属性，但是包含render函数
// template已经被vue-template-compiler编译成render函数了
console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    message:"你好啊，李银河"
  },
  components: { App },
  // 如果要使用template属性，则必须选择的是runtime-compiler版本
  // 此时vue渲染的步骤为：template=>ast(抽象语法树)=>render()=>virtual dom=>ui
  // template: '<App/>'

  // 如果使用render函数，则选择runtime-compiler和runtime-only版本都可以
  // 此时vue渲染的步骤为：render()=>virtual dom=>ui
  // 相比于使用template属性，少了template生成ast的过程，所以性能更高
  render:h=>{
    return h(App)
  },
  mounted:function(){
    console.log('Vue实例 Mounted');
  }
})
