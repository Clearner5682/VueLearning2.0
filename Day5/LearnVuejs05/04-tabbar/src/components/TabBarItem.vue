<template>
  <div class="itemContainer" @click="navigate">
    <div class="iconArea">
      <span :class="'iconfont '+icon">
      </span>
    </div>
    <div class="textArea">
      <!-- <router-link :to="path" class="router-link">{{text}}</router-link> -->
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    text:{
      type:String
    },
    icon:{
      type:String
    },
    path:{
      type:String
    }
  },
  methods: {
    navigate($event){
      alert(this.path);
    }
  }
}
</script>

<style>
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('../assets/fonts/iconfont.ttf?t=1620643432665') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-cart:before {
  content: "\e6af";
}

.icon-home:before {
  content: "\e6b8";
}

.icon-apps:before {
  content: "\e729";
}

.icon-my:before {
  content: "\e78b";
}

.itemContainer{
  width:25%;
  float:left;
  /* border: 1px solid red; */
  border-collapse: initial;
  text-align: center;
  cursor: pointer;
}

.iconArea{
  height: 20px;
}

.textArea{
  height: 18px;
  line-height: 18px;
  vertical-align: text-top;
  font-size: 12px;
}

/* .iconfont.icon-home{
  color:yellow;
} */

.router-link{
  text-decoration: none;
  color: black;
}
</style>
