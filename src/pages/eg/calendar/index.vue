<!---
    Created by kankan on 2019/9/4.
    email: lidainzhong@gl-data.com
-->


<template>
<div>
  <h2>日历插件</h2>
  <div id="container"></div>
  <p class="url">代码地址：<a href="https://github.com/kankanol1/calindar.git">https://github.com/kankanol1/calindar.git</a></p>

</div>

</template>

<script>
  import './javascripts/simple-calendar-es.js';
  export default {
    name: "index"
  }
</script>

<style scoped>
@import "./stylesheets/simple-calendar.css";
  .url{
    text-align: center;
    font-size: 20px;
  }
  h2{
    text-align: center;
    color: pink;
    margin-top: 50px;
  }
  #container{
    margin: 0 auto;
    float: none;
    width: 500px;
    height: 500px;
  }
</style>
