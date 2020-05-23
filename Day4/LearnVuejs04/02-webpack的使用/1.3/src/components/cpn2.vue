<template>
  <div id="container2">
      <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'我是cpn2组件'
    }
  }
}
</script>

<style>
div#container2 {
    height: 200px;
    background-image: url('../images/mountain.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%
}
</style>