import Vue from 'vue'
// require('./main.css')
import css from './main.css'

// 可以将组件的代码单独抽到一个js文件中，通过模块化的方式导出
// const cpn={
//     template:`
//     <div>
//     <h2>{{name}}</h2>
//     <button @click="btnClickHandler">点击我</button>
//     </div>
//     `,
//     data(){
//         return {
//             name:'coderhy'
//         }
//     },
//     methods:{
//         btnClickHandler(){
//             console.log('按钮被点击');
//         }
//     }
// }

// 通过模块化的方式导入cpn.js
// import cpn from './vue/cpn.js'

// 通过模块化的方式导入cpn.vue，模板、脚本、样式分离
import cpn from './vue/cpn.vue'

const app=new Vue({
    el:"#app",
    // 一旦定义了template，vue编译时会将el替换成template中的内容
    // cpn是一个组件，这里template就放了这个组件标签，并没有放其他内容
    // vue编译时会自动去找<cpn/>这个组件
    template:'<cpn/>',
    components:{
        cpn
    }
});