<!---
    Created by kankan on 2019-10-11.
    email: lidainzhong@gl-data.com
-->


<template>
  <div id="cy-box">
    <div id="cy"></div>
  </div>
</template>

<script>
  export default {
    name: "cytoscape",
    data() {
      return {}
    },
    mounted() {
      this.cy();
    },
    methods: {
      cy() {

        const $ = require('jquery');
        let flag;
        let deleteBox = function(){
          !flag ? undefined : flag.style({backgroundColor: 'blue',lineColor: 'blue'});
          $('.boxCon') && $('.boxCon').remove();
        };
        let cy = this.$cytoscape({
          container: document.getElementById('cy'),
          ready: function () {
          },
          style: [
            {// 节点样式
              selector: 'node',
              css: {
                content: 'data(name)',
                backgroundColor: '#00f',
                // shape:'triangle',
              },
            },
            {// 边样式
              selector: 'edge',
              css: {
                width: 1,
                curveStyle: 'bezier',
                targetArrowShape: 'triangle',
                targetArrowColor: '#00f',
                lineColor: '#00f',
              }
            }
          ],
          elements: {
            nodes: [
              {data: {id: 'a', name: '灰太狼',}},
              {data: {id: 'b', name: '红太狼',}},
              {data: {id: 'c', name: '小灰灰',}},
              {data: {id: 'd', name: '喜洋洋',}},
              {data: {id: 'e', name: '懒洋洋',}},
              {data: {id: 'f', name: '美洋洋',}},
              {data: {id: 'g', name: '沸洋洋',}},
              {data: {id: 'h', name: '老村长',}},
            ],
            edges: [
              {data: {name: '灰太狼-红太狼', id: 'a-b', source: 'a', target: 'b'}},
              {data: {name: '灰太狼-小灰灰', id: 'a-c', source: 'a', target: 'c'}},
              {data: {name: '灰太狼-喜洋洋', id: 'a-d', source: 'a', target: 'd'}},
              {data: {name: '红太狼-灰太狼', id: 'b-a', source: 'b', target: 'a'}},
              {data: {name: '红太狼-小灰灰', id: 'b-c', source: 'b', target: 'c'}},
              {data: {name: '小灰灰-灰太狼', id: 'c-a', source: 'c', target: 'a'}},
              {data: {name: '小灰灰-红太狼', id: 'c-b', source: 'c', target: 'b'}},
              {data: {name: '小灰灰-喜洋洋', id: 'c-d', source: 'c', target: 'd'}},
              {data: {name: '喜洋洋-灰太狼', id: 'd-a', source: 'd', target: 'a'}},
              {data: {name: '喜洋洋-懒洋洋', id: 'd-e', source: 'd', target: 'e'}},
              {data: {name: '喜洋洋-美洋洋', id: 'd-f', source: 'd', target: 'f'}},
              {data: {name: '喜洋洋-沸洋洋', id: 'd-g', source: 'd', target: 'g'}},
              {data: {name: '懒洋洋-老村长', id: 'e-h', source: 'e', target: 'h'}},
            ]
          }
        });
        let selectElements = {};
        let oBox = document.createElement('div');
        oBox.classList = 'boxCon';
        oBox.addEventListener('click', function () {
          this.parentElement.removeChild(this);
        });
        let option = {
          selector: 'node',
          menuRadius: 120,
          commands:item=>{
            return [{
              content: '<span class="info fa">节点</span>',
              submenu: [
                {
                  content: item.hasClass('hidechildren')? ('<span class="fa" style="color:#0ff;">'+'展示子节点'+'</span>') :('<span class="fa" style="color:white">'+'隐藏子节点'+'</span>'),
                  select: ele=>{
                    deleteBox();
                    changeColor(ele);
                    cy.startBatch();
                    if(item.hasClass('hidechildren')){
                      cy.add(selectElements[ele.data('id') + 'hidechildren']);
                      selectElements[ele.data('id') + 'hidechildren'] = undefined;
                    }else{
                      selectElements[ele.data('id') + 'hidechildren'] = ele.outgoers().targets().remove();
                    }
                    ele.toggleClass('hidechildren');
                    cy.endBatch();
                  }
                },
                {
                  content: item.hasClass('hideparents')? ('<span class="fa" style="color:#0ff;">'+'展示父节点'+'</span>') :('<span class="fa" style="color:white">'+'隐藏父节点'+'</span>'),
                  select: ele => {
                    deleteBox();changeColor(ele);
                    cy.startBatch();
                    if(item.hasClass('hideparents')){
                      cy.add(selectElements[ele.data('id') + 'hideparents']);
                      selectElements[ele.data('id') + 'hideparents'] = undefined;
                    }else{
                      selectElements[ele.data('id') + 'hideparents'] = ele.incomers().sources().remove();
                    }
                    ele.toggleClass('hideparents');
                    cy.endBatch();
                  }},
                {

                  content: item.hasClass('hideleaf')? ('<span class="fa" style="color:#0ff;">'+'展示叶节点'+'</span>') :('<span class="fa" style="color:white">'+'隐藏叶节点'+'</span>'),
                  select: ele => {
                    deleteBox();changeColor(ele);
                    cy.startBatch();
                    if(item.hasClass('hideleaf')){
                      cy.add(selectElements[ele.data('id') + 'hideleaf']);
                      selectElements[ele.data('id') + 'hideleaf'] = undefined;
                    }else{
                      selectElements[ele.data('id') + 'hideleaf'] = ele.outgoers().leaves().remove();
                    }
                    ele.toggleClass('hideleaf');
                    cy.endBatch();
                  }},
              ],
            },
              {
                content: item.hasClass('height')? ('<span class="fa" style="color:#0ff;">'+'所有联系人'+'</span>') :('<span class="fa" style="color:white">'+'一级联系人'+'</span>'),
                select: ele=>{
                  deleteBox();changeColor(ele);
                  cy.startBatch();
                  if(item.hasClass('height')){
                    cy.add(selectElements[ele.data('id') + 'height']);
                    selectElements[ele.data('id') + 'height'] = undefined;
                    ele.style({shape:'ellipse'});
                  }else{
                    let e = ele.outgoers().targets();
                    ele.style({shape:'pentagon'});
                    selectElements[ele.data('id') + 'height'] = cy.nodes().filter(item=>!e.contains(item)&& item!==ele).remove();
                  }
                  ele.toggleClass('height');
                  cy.endBatch();
                }
              },
              {
                content: item.hasClass('hideparents')? ('<span class="fa" style="color:#0ff;">'+'展示父节点'+'</span>') :('<span class="fa" style="color:white">'+'隐藏父节点'+'</span>'),
                select: ele => {
                  deleteBox();changeColor(ele);
                  cy.startBatch();
                  if(item.hasClass('hideparents')){
                    cy.add(selectElements[ele.data('id') + 'hideparents']);
                    selectElements[ele.data('id') + 'hideparents'] = undefined;
                  }else{
                    selectElements[ele.data('id') + 'hideparents'] = ele.incomers().sources().remove();
                  }
                  ele.toggleClass('hideparents');
                  cy.endBatch();
                }},
              {
                content: item.hasClass('hideleaf')? ('<span class="fa" style="color:#0ff;">'+'展示叶节点'+'</span>') :('<span class="fa" style="color:white">'+'隐藏叶节点'+'</span>'),
                select: ele => {
                  deleteBox();
                  cy.startBatch();
                  if(item.hasClass('hideleaf')){
                    cy.add(selectElements[ele.data('id') + 'hideleaf']);
                    selectElements[ele.data('id') + 'hideleaf'] = undefined;
                  }else{
                    ele.style({});
                    selectElements[ele.data('id') + 'hideleaf'] = ele.outgoers().leaves().remove();
                  }
                  ele.toggleClass('hideleaf');
                  cy.endBatch();
                }},
            ];
          },
          fillColor: 'rgba(0, 0, 0, 0.70)',
          activeFillColor: 'rgba(0, 0, 255, 0.75)',
          activePadding: 24,
          separatorWidth: 3,
          spotlightPadding: 4,
          minSpotlightRadius: 24,
          maxSpotlightRadius: 38,
          openMenuEvents: 'cxttapstart taphold',
          itemColor: 'white',
          itemTextShadowColor: 'transparent',
          zIndex: 9999,
          atMouse: false
        };
        cy.cxtmenu(option);

        let changeColor = function(e){
          !flag ? e : flag.style({backgroundColor: 'blue',lineColor: 'blue'}) ;
          e.style({backgroundColor: 'red',lineColor: 'red'}) ;
          flag = e;
        };
        cy.on('tap', function (e) {
          deleteBox();
          if(e.target !== cy) {
            !flag ? e.target : flag.style({backgroundColor: 'blue',lineColor: 'blue'}) ;
            e.target.style({backgroundColor: 'red',lineColor: 'red'}) ;
            flag = e.target;
            let str = '<span class="boxInfo" style="cursor:pointer;color:red;float:right;display: block;width: 20px;height: 20px">X</span>';
            if (e.target.group() === 'edges') {
              let name = e.target.data('name').split('-');
              str =str+ '<h1>边信息</h1>' + '<p>source：' + name[0] + '</p>' + '<p>target：' + name[1]+ '</p>' + '<p>edge：' + e.target.data('name')+ '</p>' ;
            }
            else {
              str = '<h1>节点信息</h1>' + '<p>name：' + e.target.data('name') + '</p>' + '<p>id：' + e.target.data('id') + '</p>';
            }
            str =str+ '<p>position-X：' + e.position.x.toFixed(2) + '</p>' + '<p>position-Y：' + e.position.y.toFixed(2) + '</p>' + '<p>' + '<a href="http://fannyol.fun">>></a>' + '</p>';
            oBox.innerHTML = str;
            str = undefined;
            oBox.style.left = (e.position.x > cy.width() / 2 ? (e.position.x - 200) : e.position.x) + 'px';
            oBox.style.top = (e.position.y> cy.height()/3*2?(e.position.y - 200) : e.position.y) + 'px';
            $('#cy').append(oBox);
          }
        });
      }
    }
  }
</script>
<style lang="less">
  .boxCon {
    position: absolute;
    z-index: 999999999;
    left: 0;
    top: 0;
    width: 200px;
    padding: 10px 20px;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    box-shadow: 0 0 5px #000;
    border: 1px solid #000;
  }

  .cxtmenu-item {
    color: white;
  }

  .shadow {
    color: red;
  }

  .fa {
    /*color: white;*/
    font-size: 12px;
  }

  .kan {
    background-color: #0ff;
    border: 1px solid #f00;
    width: 10px;
    height: 10px;
  }

  #cy-box {
    width: 802px;
    height: 602px;
    position: relative;
  }

  #cy, #two, #three {
    width: 802px;
    height: 602px;
    border: 1px solid red;
    position: relative;

    canvas {
      left: 0;
    }
  }

  .fa-2x {
    font-size: 12px;
    padding-left: 10px;
    position: relative;

  }

  .fa-2x:before {
    left: -5px;
    position: absolute;
  }
</style>
