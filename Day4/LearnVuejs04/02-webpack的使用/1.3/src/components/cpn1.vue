<template>
<div id="container1">
<h2>{{name}}</h2>
</div>
</template>

<script>
export default {
    data(){
        return{
            name:'我是cpn1组件'
        }
    }
}
</script>

<style>
div#container1 {
    height: 200px;
    background-image: url('../images/winter.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%
}
</style>