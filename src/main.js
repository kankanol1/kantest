import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueIntro from 'vue-introjs';
import 'intro.js/introjs.css'

import 'iview/dist/styles/iview.css';
import router from './router/router'

Vue.use(VueAxios,axios);
Vue.use(iView);
import "./assets/icon_custom/bird/iconfont.css";
import "./assets/icon_custom/basesite/iconfont.css";
// import cytoscape from 'cytoscape/dist/cytoscape.esm.min';
import cytoscape from 'cytoscape';
// import cxtmenu from 'cytoscape-cxtmenu';
import avsdf from 'cytoscape-avsdf';
import cola from 'cytoscape-cola';
import bilkent from 'cytoscape-cose-bilkent';
import cxtmenu from '@lsvih/cytoscape-cxtmenu';
import 'font-awesome/css/font-awesome.min.css';
// import jq from 'jquery';
// Vue.use(jQuery);
// Vue.use(cytoscape);

import 'leaflet/dist/leaflet.css';

cytoscape.use(cxtmenu);
cytoscape.use(avsdf);
cytoscape.use(cola);
cytoscape.use(bilkent);
// cytoscape.use(avsdf,cola,bilkent,cxtmenu);
Vue.prototype.$cytoscape=cytoscape;

Vue.prototype.$leafletOption = {
  center: [37.770518, 119.05331],
  zoom: 10,
  minZoom: 10,
  maxZoom: 18,
  // leftTop: [37.937308, 118.866345,],
  // rightBottom: [37.643474, 121],
  // maxBounds: [[38, 118,], [36, 120],],
  zoomReverse: false,
  zoomControl: false,
  attributionControl: false,
  preferCanvas: true,
  keyboard: true,
};

Vue.prototype.$tileLayerUrl = 'http://mt3.google.cn/vt/lyrs=y&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil';


Vue.prototype.$jq=require('jquery');
Vue.use(VueIntro);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/*
* https://www.cnblogs.com/WQLong/p/8135553.html
* to:router即将进入的路由对象
* from:当前导航即将离开的路由
* next:Function,进行管道中的一个钩子，如果执行完了，
* 则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
* */
router.beforeEach((to, from, next) => {
  if(to.name === 'login'){
    next();
  }else{
    if(!(sessionStorage.getItem('userInfo')) || !(JSON.parse(sessionStorage.getItem('userInfo')).name)){
      next({name:'login'});
    }else{
      next();
    }
  }
});
Date.prototype.format = function (format) {
  // yyyy-MM-dd HH:mm:ss.SSS
  let date = {
    "yyyy": `${this.getFullYear()}`,
    "yy": (`${this.getFullYear()}`).substr(2),
    "MM": this.getMonth() + 1 < 10 ? `0${this.getMonth() + 1}` : `${this.getMonth() + 1}`,
    "dd": this.getDate() < 10 ? `0${this.getDate()}` : `${this.getDate()}`,
    "HH": this.getHours() < 10 ? `0${this.getHours()}` : `${this.getHours()}`,
    "hh": this.getHours() < 10 ? `0${this.getHours()}` : `${this.getHours()}`,
    "mm": this.getMinutes() < 10 ? `0${this.getMinutes()}` : `${this.getMinutes()}`,
    "m": this.getMinutes() < 10 ? `0` : `${parseInt(this.getMinutes() / 10)}`,
    "ss": this.getSeconds() < 10 ? `0${this.getSeconds()}` : `${this.getSeconds()}`,
    "SSS": this.getMilliseconds() < 100 ? (this.getMilliseconds() < 10 ? `00${this.getMilliseconds()}` : `0${this.getMilliseconds()}`) : `${this.getMilliseconds()}`,
    "SS": (this.getMilliseconds() < 100 ? (this.getMilliseconds() < 10 ? `00${this.getMilliseconds()}` : `0${this.getMilliseconds()}`) : `${this.getMilliseconds()}`).substr(0, 2),
    "S": (this.getMilliseconds() < 100 ? (this.getMilliseconds() < 10 ? `00${this.getMilliseconds()}` : `0${this.getMilliseconds()}`) : `${this.getMilliseconds()}`).substr(0, 1),
  };
  for (let k in date) {
    if (format.indexOf(k) > -1) {
      format = format.replace(k, date[k]);
    }
  }
  return format;
};
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
