<template>
  <div>
      <h1>{{userid}}</h1>
      <div>{{username}}</div>
  </div>
</template>

<script>
export default {
    name:'user',
    data(){
        return{
            userid:this.$route.params.userid,
            username:'hongyan'
        }
    },
    created(){
        console.log('user created')
    },
    // 注意：只有组件被包含在keep-alive中时才会触发activated，否则只会created和destroyed
    activated () {
        console.log('user activated')
    },
    destroyed(){
        console.log('user destroyed')
    }
}
</script>

<style>

</style>