import Vue from 'vue'
// require('./main.css')
import css from './main.css'

const app=new Vue({
    el:"#app",
    // 一旦定义了template，vue编译时会将el替换成template中的内容
    template:`
    <div>
    <h2>{{name}}</h2>
    <button @click="btnClickHandler">点击我</button>
    </div>
    `,
    data:{
        name:"coderhy"
    },
    methods:{
        btnClickHandler(){
            console.log('按钮被点击');
        }
    }
});