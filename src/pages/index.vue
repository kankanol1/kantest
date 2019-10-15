<!---
    Created by kankan on 2019/9/2.
    email: lidainzhong@gl-data.com
-->
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="100" v-model="isCollapsed"
             :style="{position: 'fixed', height: '100vh',top:0, left: 0,overflow: 'auto'}">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" :style="{overflow:'auto'}">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              EG
            </template>
            <MenuItem name="1-1" :style="{padding: 0}">
              <router-link to="/pages/eg/fentu/index">分图</router-link>
            </MenuItem>
            <MenuItem name="1-2" :style="{padding: 0}">
              <router-link to="/pages/eg/calendar/index">日历</router-link>
            </MenuItem>
            <MenuItem name="1-3" :style="{padding: 0}">
              <router-link to="/pages/eg/love/index">画轴</router-link>
            </MenuItem>
            <MenuItem name="1-3" :style="{padding: 0}">
              <router-link to="/test/intro">Intro</router-link>
            </MenuItem>
            <MenuItem name="1-4" :style="{padding: 0}">
              <router-link to="/pages/eg/word/test">TEST</router-link>
            </MenuItem>
            <MenuItem name="1-5" :style="{padding: 0}">
              <router-link to="/pages/eg/point/point">point</router-link>
            </MenuItem>
            <MenuItem name="1-6" :style="{padding: 0}">
              <router-link to="/pages/eg/cytoscape/cytoscape">cytoscape</router-link>
            </MenuItem>
            <!--            cytoscape-->
            <!--            <MenuItem name="1-4" :style="{padding: 0}"><router-link to="/pages/eg/fentu//component/fen1">画轴</router-link></MenuItem>-->

          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Cytoscape
            </template>
            <MenuItem name="2-1" :style="{padding: 0}">
              <router-link to="/pages/cytoscape/test1">test1</router-link>
            </MenuItem>
            <MenuItem name="2-2" :style="{padding: 0}">
              <router-link to="/pages/cytoscape/test2">test2</router-link>
            </MenuItem>
            <MenuItem name="2-3" :style="{padding: 0}">
              <router-link to="/pages/cytoscape/test1">test1</router-link>
            </MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="3-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="3-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="3-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="4-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="4-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="4-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="5-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="5-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="5-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="6-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="6-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="6-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
          <Submenu name="7">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="7-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="7-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="7-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
          <Submenu name="8">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="8-1" :style="{padding: 0}">Option 1</MenuItem>
            <MenuItem name="8-2" :style="{padding: 0}">Option 2</MenuItem>
            <MenuItem name="8-3" :style="{padding: 0}">Option 3</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{position:'relative',width:`100vw - ${leftValue}px`,marginLeft:`${leftValue}px`}">
        <Header :style="{zIndex:999,top:'-1px',left:`${leftValue}px`,position:'fixed',width:`calc(100vw - ${leftValue}px`,display:'block',padding:'0 20px 0 0'}"
                class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon"
                :style="{lineHeight:'64px',margin: '0 0 0 10px',float:'left'}" type="md-menu" size="24"></Icon>
          <img class="byl" @click="byl()" title="冰原狼" style="margin-top:7px;width:50px;height:50px"
               src="../assets/wolf.svg" alt="冰原狼">
          <Button shape="circle" :style="{float:'right',marginTop:'16px',}" @click="logOut">退出</Button>
        </Header>
        <Content :style="{margin: '64px 8px 8px', background: '#fff'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
    <HelloWorld ref="one1" :info="{name:'kankan',time:'天长地久'}"/>
    <p style="text-align: center;font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', SimSun, 'Segoe UI', Tahoma, Helvetica, Sans-Serif">
      陕ICP备19006627号-1</p>
    <!--    <HelloWorld ref="one2"  :info="{name:'kankan',time:'天长地久'}" />-->
    <!--    <HelloWorld ref="one3"  :info="{name:'kankan',time:'天长地久'}" />-->
  </div>
</template>

<script>
  import HelloWorld from '../components/FooterCom';

  export default {
    name: "index",
    components: {
      HelloWorld,
    },
    data() {
      return {
        data: undefined,
        isCollapsed: false,
        leftValue: 200,
      }
    },

    mounted() {
      this.timeout();
      // 删除 子菜单的箭头按钮
      const a = document.querySelectorAll('.ivu-menu-submenu-title i.ivu-icon:nth-child(2)');
      for (let i = 0; i < a.length; i++) {
        a[i].parentElement.removeChild(a[i]);
      }
      this.getName();
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : '',
        ];
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : '',
        ]
      },
    },
    methods: {
      getName() {
        this.$refs.one1.timer();
        // this.$refs.one2.timer();
        // this.$refs.one3.timer();
      },
      timeout() {
        const $ = require('jquery');
        let lastTime = new Date().getTime();
        const timeOut = parseInt(JSON.parse(sessionStorage.getItem('logout')));
        $(function () {
          $(document).mouseover(function () {
            lastTime = new Date().getTime();
          });
        });
        let timer = window.setInterval(() => {
          if (new Date().getTime() - lastTime > timeOut) {
            sessionStorage.clear();
            this.$router.push({name: 'login'});
            window.clearInterval(timer);
          }
        }, 1000);
      },
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
        if (this.leftValue === 200) {
          this.$set(this, 'leftValue', 100);
        } else {
          this.$set(this, 'leftValue', 200);
        }
      },
      logOut() {
        sessionStorage.clear();
        this.$router.push({
          name: 'login',
        });
        this.$Message.success({
          content: '退出成功!',
          duration: 1
        });
      },
      byl() {
        window.open('https://kankan.fun', '_self');
      }
    },
  }
</script>

<style scoped lang="less">


  a {
    display: block;
    color: white;
  }

  .ivu-icon-md-menu:hover {
    cursor: pointer;
  }

  .ivu-menu-dark,
  .ivu-menu-vertical,
  .menu-item {
    .ivu-menu-submenu,
    .ivu-menu-item-active,
    .ivu-menu-child-item-active {
      .ivu-menu-submenu-title {
        text-align: center;
      }

      .ivu-menu {
        .ivu-menu-item,
        .ivu-menu-item-active,
        .ivu-menu-item-selected {
          font-size: 12px;
          line-height: 40px;
          height: 40px;
          text-align: center;
        }
      }
    }
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>

