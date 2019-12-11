let {add,multi}=require('./src/js/mathUtils');
import {name,age,height} from "./src/js/info";
require('./src/css/youcaihua.css');
require('./src/css/common.less');

console.log(add(20, 30));
console.log(multi(20, 30));
console.log(name);
console.log(age);
console.log(height);
document.writeln(`<h2>你好啊，李银河</h2>`);

// 引用vue
// 这里使用'vue'既可以是./vue，也可以是./node_modules/vue里面的vue
// 如果既安装了vue，且在根目录下有vue.js，则还是引用的./node_modules/vue里面的vue
// 如果resolve指定了alias，则以alias中指定的路径为准
import Vue from 'vue'
new Vue({
  el:'#app',
  data:{
    message:'hello vue'
  }
});
