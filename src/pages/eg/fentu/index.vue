<!---
    Created by kankan on 2019/9/3.
    email: lidainzhong@gl-data.com
-->


<template>
  <div class="fen">
    <div class="button">
      <router-link to="/pages/eg/fentu/component/fen1">圆形布局</router-link>
      <router-link to="/pages/eg/fentu/component/fen2">方形布局</router-link>
      <router-link to="/pages/eg/fentu/component/fen3">环形布局</router-link>
      <router-link to="/pages/eg/fentu/component/fen4">分图</router-link>
      <router-link to="/pages/eg/fentu/component/fen5">分图2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        exp:{},
      }
    },
    methods:{
      getData(){
      }
    }
  }
</script>


<style scoped lang="less">
  @import "./css/index.css";
  .fen {
    min-width: 600px;
    overflow-y: hidden;
    overflow-x: auto;
    .button{
      padding: 10px 20px;
      text-align: center;
      a {
        color: #f5f7f9;
        display: inline-block;
        margin: 0 5px;
        background-color: #211f23;
        width: 80px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
  .exp {
    padding:5px;
    color: #333;
    text-align: left;
    h4 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      position: relative;
    }
    p:before {
      content: '';
      position: absolute;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      left: -16px;
      top: 5px;
      background-color: #00f;
    }
  }
</style>
