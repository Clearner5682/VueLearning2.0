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
    destroyed(){
        console.log('user destroyed')
    }
}
</script>

<style>

</style>