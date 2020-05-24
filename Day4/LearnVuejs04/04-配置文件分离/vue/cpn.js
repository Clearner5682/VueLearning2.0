const cpn={
    template:`
    <div>
    <h2>{{name}}</h2>
    <button @click="btnClickHandler">点击我</button>
    </div>
    `,
    data(){
        return {
            name:'coderhy'
        }
    },
    methods:{
        btnClickHandler(){
            console.log('按钮被点击');
        }
    }
}

export default cpn