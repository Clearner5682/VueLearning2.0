<template>
  <div>
    <!-- <div style="height:20px;background-color:green"></div> -->
    <!-- <ul class="tab-ul">
      <li v-for="item in tabItems" :key="item.id">
      </li>
    </ul> -->

    <div class="tabContainer">
      <Tab-Bar-Item v-for="item in tabItems" :key="item.id" :text="item.text" :icon="item.icon"></Tab-Bar-Item>
      <div class="clear"></div>
    </div>

  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  data() {
    return {
      tabItems: [
      {
        id: 1,
        text: "首页",
        icon: 'icon-home',
      },
      {
        id: 2,
        text: "分类",
        icon: "icon-apps",
      },
      {
        id: 3,
        text: "购物车",
        icon: "icon-cart",
      },
      {
        id: 4,
        text: "我的",
        icon: "icon-my",
      }
    ]
    }
  },
  components:{
    TabBarItem
  }
};
</script>

<style>
.tabContainer {
  border: 1px solid green;
  margin: 0 auto;
  padding: 0px;
  line-height: 24px;
}

.clear{
  clear: both;
}
</style>
