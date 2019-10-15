/**
 * Created by kankan on 2019/9/2.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let router = [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['../pages/index'], resolve),
    children:[
      {
        path: '/pages/eg/fentu/index',
        name: 'fenIndex',
        component: (resolve) => require(['../pages/eg/fentu/index'], resolve),
        children:[
          {
            path: '/pages/eg/fentu/component/fen1',
            name: 'fen1',
            component: (resolve) => require(['../pages/eg/fentu/component/fen1'], resolve),
          },
          {
            path: '/pages/eg/fentu/component/fen2',
            name: 'fen2',
            component: (resolve) => require(['../pages/eg/fentu/component/fen2'], resolve),
          },
          {
            path: '/pages/eg/fentu/component/fen3',
            name: 'fen3',
            component: (resolve) => require(['../pages/eg/fentu/component/fen3'], resolve),
          },
          {
            path: '/pages/eg/fentu/component/fen4',
            name: 'fen4',
            component: (resolve) => require(['../pages/eg/fentu/component/fen4'], resolve),
          },
          {
            path: '/pages/eg/fentu/component/fen5',
            name: 'fen5',
            component: (resolve) => require(['../pages/eg/fentu/component/fen5'], resolve),
          },
        ],
      },
      {
        path: '/pages/eg/calendar/index',
        name: 'calendar',
        component: (resolve) => require(['../pages/eg/calendar/index'], resolve),
      },
      {
        path: '/pages/eg/love/index',
        name: 'love',
        component: (resolve) => require(['../pages/eg/love/index'], resolve),
      },

      {
        path: '/pages/eg/word/test',
        name: 'test',
        component: (resolve) => require(['../pages/eg/word/test'], resolve),
      },
      {
        path: '/pages/eg/point/point',
        name: 'point',
        component: (resolve) => require(['../pages/eg/point/point'], resolve),
      },
      {
        path: '/pages/eg/cytoscape/cytoscape',
        name: 'cytoscape',
        component: (resolve) => require(['../pages/eg/cytoscape/cytoscape'], resolve),
      },
      {
        path: '/pages/cytoscape/test1',
        name: 'cytest1',
        component: (resolve) => require(['../pages/cytoscape/test1'], resolve),
      },
      {
        path: '/pages/cytoscape/test2',
        name: 'cytest2',
        component: (resolve) => require(['../pages/cytoscape/test2'], resolve),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['../pages/login'], resolve),
  },
];

export default new Router({
  routes: router,
  mode: 'history'
});
