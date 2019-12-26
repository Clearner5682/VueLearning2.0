import personInfo from './main';
import Vue from 'vue';
import cpn1 from '../components/cpn1.vue'

{/* <template id="cpn1">
    <div>
        <h2>{{name}}</h2>
    </div>
</template> */}

new Vue({
    el:'#app',
    // template中的内容会替换#app
    template:`<cpn1></cpn1>`,
    data:{
        message:'你好，李银河'
    },
    components:{
        cpn1:cpn1
    }
});

console.log(personInfo);