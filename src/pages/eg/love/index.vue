<!---
    Created by kankan on 2019/9/5.
    email: lidainzhong@gl-data.com
-->


<template>
  <div class="love">
    <div>
      <div class="content">
        <div class="l-pic-index"></div>
        <div class="r-pic-index"></div>
        <div class="l-bg-index"></div>
        <div class="r-bg-index"></div>
        <div class="main-index">
          <h1 class="title">
            <img src="./img/i.svg" class="no left" alt="">
            <img src="./img/xin.svg" class="change" alt="">
            <img src="./img/u.svg" class="no right" alt="">
          </h1>
          <div class="con">
            <div class="left">
              <p class="intro-text">
                我希望有一天能够为你写一首诗<br>
                诗里面有阳光，海水和整片的甘蔗林<br>
                阳光明媚，海水平静<br>
                当风吹过的时候<br>
                整个林子都在我心里晃动<br>
                很多年再很多年以后<br>
                我们的影子会停靠在这首诗里<br>
                沿着右下角的岁月一页页排列<br>
                每一页都有我们经过的长廊<br>
                曲折而无悔<br>
                我听说风吹过海面扬起的浪花<br>
                会有晚霞的颜色<br>
                我听说风过后的海边<br>
              </p>
            </div>
            <div class="right">
              <p class="intro-text">

                会积满白色的沙<br>
                我知道每个下午都有太阳<br>
                我知道下一次风起会带走白沙<br>
                可是有的故事不会重复<br>
                但是在欢乐的沙滩上<br>
                我偷偷的刻上你的名字<br>
                当我们渐渐的走远<br>
                浪花把它带到了海底<br>
                所有的鱼儿都会传抄我给你写的诗行<br>
                等待下一次风起的时候<br>
                我想牵着你的手<br>
                踩着风儿的尾巴<br>
                一起走遍这角角落落的沙滩
              </p>
            </div>

          </div>
          <img src="./img/you.svg" class="you" alt="">

        </div>
      </div>
      <p style="text-align: center;margin-top: 20px">github代码：<a style="color: white;text-decoration: #27fff9"
                                                                 href="https://github.com/kankanol1/huajuan.git">https://github.com/kankanol1/huajuan.git</a>
      </p>
      <audio src="../mp3/gzxbz.mp3" autoplay="autoplay" controls loop id="mp"></audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    mounted() {
      this.start();
    },
    methods: {
      start() {
        const $ = require('jquery');
        $(".love").ready(function () {
          //卷轴展开效果
          $(".l-pic-index").animate({'left': '8px'}, 1500);
          $(".r-pic-index").animate({'right': '59px'}, 1500);
          $(".l-bg-index").animate({'width': '432px', 'left': '73px'}, 1500);
          $(".r-bg-index").animate({'width': '432px', 'left': '504px'}, 1500, function () {
            $(".main-index").fadeIn(1500);
          });
        });
        /*let cW = window.innerWidth - 50;
        let cH = window.innerHeight - 50;

        let imgL = [
          '../img/i.svg',
          '../img/xin.svg',
          '../img/u.svg',
          '../img/you.svg',
        ];
        let speed = 1;
        let l = 30;*/
        /*let heartL = [];
        for (let i = 0; i < 20; i++) {
          let oImg = document.createElement('img');

          oImg.src = imgL[i % imgL.length];
          oImg.calssName = 'fImg';
          oImg.style.left = Math.random() * cW + "px";
          oImg.style.top = Math.random() * cH + "px";
          oImg.style.position = 'fixed';
          oImg.style.width = l + 'px';
          oImg.style.width = l + 'px';
          oImg.style.zIndex = 10;
          oImg.setAttribute('dataX', (0.5 - Math.random()) * speed);
          oImg.setAttribute('dataY', (0.5 - Math.random()) * speed);

          heartL.push(oImg);
          document.querySelector('body').appendChild(oImg);
        }*/

       /* setInterval(function () {
          for (let i = 0; i < heartL.length; i++) {
            // console.log(parseFloat(heartL[i].style.left),parseFloat(heartL[i].getAttribute('dataX')));
            heartL[i].style.left = parseFloat(heartL[i].style.left) + parseFloat(heartL[i].getAttribute('dataX')) + 'px';
            heartL[i].style.top = parseFloat(heartL[i].style.top) + parseFloat(heartL[i].getAttribute('dataY')) + 'px';
            if (parseFloat(heartL[i].style.left) < 0 || parseFloat(heartL[i].style.left) > cW) {
              heartL[i].setAttribute('dataX', -parseFloat(heartL[i].getAttribute('dataX')));
            }
            if (parseFloat(heartL[i].style.top) < 0 || parseFloat(heartL[i].style.top) > cH) {
              heartL[i].setAttribute('dataY', -parseFloat(heartL[i].getAttribute('dataY')));
            }

          }

        }, 20);*/
      }
    }
  }
</script>

<style scoped>
  .love {
    background-color: red;
    height: 100vh;
    width: calc(100vw - 200px);
    padding: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }
  #mp{
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
  }
  .love>div{
    margin: 0 auto;
  }

  /*通用样式*/
  ul, li, p, h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-size: 100%;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    background: transparent;
  }

  a:focus {
    outline: none;
  }

  img {
    border: 0;
  }

  .content {
    position: relative;
    margin: 40px auto 0;
    width: 1026px;
    height: 460px;
  }


  .l-pic-index {
    position: absolute;
    left: 450px;
    z-index: 2;
    width: 79px;
    height: 460px;
    background: url("./img/zhou.jpg") no-repeat right 0;
    background-size: auto 100%;

  }

  .r-pic-index {
    position: absolute;
    right: 450px;
    top: 0;
    z-index: 2;
    width: 82px;
    *width: 82px;
    height: 460px;
    background: url("./img/zhou.jpg") no-repeat left 0;
    background-size: auto 100%;
    transform: rotate3d(0, 0, 1, 180deg);
  }

  .l-bg-index {
    position: absolute;
    top: 0;
    left: 485px;
    z-index: 1;
    width: 20px;
    height: 459px;
    background: url("./img/love1.png") right 0 no-repeat;
    background-size: auto 100%;
  }

  .r-bg-index {
    position: absolute;
    top: 0;
    left: 504px;
    z-index: 1;
    width: 20px;
    height: 459px;
    background: url("./img/love2.png") -2px 0 no-repeat;
    background-size: auto 100%;
  }

  .main-index {
    display: none;
    position: absolute;
    z-index: 5;
    width: 820px;
    left: 110px;
    color: #eee;
  }

  .intro-text {
    margin: 10px 0 0;
    line-height: 1.8;
    color: #fff;
  }

  .left,
  .right {
    display: inline-block;
    width: 320px;
    padding-left: 80px;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: left;
  }

  .title {
    position: relative;
    margin: 0 auto;
    height: 70px;
    padding-top: 10px;
    text-align: center;
  }

  .title .no {
    display: inline-block;
    width: 50px;
    padding-left: 0;
  }

  .you {
    width: 50px;
    text-align: center;
    padding-left: 350px;
  }

  /*----------------------------------怦然心动-------------------------------*/
  @keyframes kankan {
    0% {
      width: 30px;
    }
    25% {
      width: 70px;
    }
    100% {
      width: 30px;
    }
  }

  @-webkit-keyframes kankan /* Safari 与 Chrome */
  {
    0% {
      width: 30px;
    }
    25% {
      width: 70px;
    }
    100% {
      width: 30px;
    }
  }

  .change {
    animation: kankan 1s;
    -webkit-animation: kankan 1s;
    animation-iteration-count: infinite;

  }
</style>
