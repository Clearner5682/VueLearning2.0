<template>
  <div id="app">
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from './components/TabBar'

export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style>
#app {
  /* background-color: red; */
  margin-top: 0px;
}
</style>
