<template>
  <div>
    <h2>{{name}}</h2>
    <button @click="btnClickHandler">点击我</button>
  </div>
</template>

<script>
export default {
  name: "cpn",
  data() {
    return {
        name:'coderhy'
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      btnClickHandler(){
            console.log('按钮被点击');
        }
  }
};
</script>
<style scoped>
h2 {
    color:red;
}
</style>
