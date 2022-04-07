<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
console.log('修改路由的两种方式')

// hash模式下修改路由
location.hash="/";
location.hash="/about";

// history模式下修改路由
history.pushState({},'','/');
history.pushState({},'','/about');
history.back();
history.forward();
history.replaceState({},'','/');
// history.go(1);相当于history.forward();
// history.go(-1);相当于history.back();
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
