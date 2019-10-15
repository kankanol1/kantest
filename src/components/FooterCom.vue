<template>
 <div style="text-align: right;padding-right: 20px">

     <p>
       明天的你一定会感谢现在拼命的自己！
       ----<span>{{info.name}}</span>
     </p>
   <p>{{time.toLocaleString().replace(/\//g,'-')}}</p>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['info'],
  data(){
    return{
      time:new Date(),
    }
  },

  mounted(){
    // this.timer();
  },
  methods:{
    timer(){
      setInterval(() =>{
        this.$set(this,'time',(new Date()),);
      },1000)
    }
  }
}
</script>

<style scoped lang="less">
  div{
    p{
      span{
        font-size: 12px;
        font-style: italic;
      }
    }
  }

</style>
