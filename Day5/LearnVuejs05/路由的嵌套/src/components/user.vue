<template>
  <div>
      <h1>{{userid}}</h1>
      <div>{{username}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userid:this.$route.params.userid,
            username:'hongyan',
        }
    },
    created(){
        console.log('created')
    },
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>