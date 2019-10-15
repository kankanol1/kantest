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
import cytoscape from 'cytoscape/dist/cytoscape.esm.min';
// import cxtmenu from 'cytoscape-cxtmenu';
import cxtmenu from '@lsvih/cytoscape-cxtmenu'
import 'font-awesome/css/font-awesome.min.css';
// import jq from 'jquery';
// Vue.use(jQuery);
// Vue.use(cytoscape);

import 'leaflet/dist/leaflet.css';
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

cytoscape.use(cxtmenu);
Vue.prototype.$cytoscape=cytoscape;
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
