<template>
  <div>
    <h1>我是标题：{{title}}</h1>
    <div>我是内容：{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'about',
    data(){
        return{
            title:'关于',
            message:'呵呵呵呵'
        }
    },
    created(){
        console.log('about created')
    },
    destroyed(){
        console.log('about destroyed')
    }
}
</script>

<style>

</style>