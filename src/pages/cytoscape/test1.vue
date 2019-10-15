<!---
    Created by kankan on 2019-10-11.
    email: lidainzhong@gl-data.com
-->


<template>
  <div id="cy-box">
    <div id="cy"></div>
    <div id="two"></div>
    <div id="three"></div>
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
        let cyc = (str) => {
          return this.$cytoscape(
            {
              container: this.$jq('#' + str),
              elements: [],
              style: [
                {
                  selector: 'node',
                  style: {
                    width: 10,
                    height: 10,
                    backgroundColor: '#ff41ad',
                    label: 'data(id)',
                  },
                },
                {
                  selector: 'edge',
                  style: {
                    width: 1,
                    lineColor: '#f00',
                    targetArrowColor: '#f00',
                    curveStyle: 'bezier',
                    targetArrowShape: 'triangle',
                  },
                },
              ],
              layout: {
                name: 'grid',
                rows: 1,
              },
              zoom: 1,
              pan: {x: 0, y: 0},
              minZoom: -100,
              maxZoom: 100,
              zoomingEnabled: true,
              userZoomingEnabled: true,
              panningEnabled: true,
              userPanningEnabled: true,
              boxSelectionEnabled: true,
              selectionType: 'circle',
              touchTapThreshold: 8,
              desktopTapThreshold: 4,
              autolock: false,
              autoungrabify: false,
              autounselectify: true,
              // rendering options:
              headless: false,
              styleEnabled: true,
              hideEdgesOnViewport: false,
              hideLabelsOnViewport: true,
              textureOnViewport: false,
              motionBlur: false,
              motionBlurOpacity: 0.2,
              // wheelSensitivity: 1,
              // pixelRatio: 'auto'
            });
        }
        let cy = cyc('cy');
        let cytwo = cyc('two');
        let cythree = cyc('three');

        let nodes = [];
        for (let i = 0; i < 100; i++) {
          nodes.push({
            group: 'nodes',
            data: {weight: 75, id: i, class: 're'},
          });
        }

        //1
        cy.add(nodes);
        cy.elements().layout({name: 'circle'}).run();
        cy.add({
          group: 'nodes',
          data: {weight: 75, id: 'center', class: 're'},
          position: {x: cy.width() / 2, y: cy.height() / 2},
        });
        let links = nodes.map(item => {
          return {
            group: 'edges',
            data: {
              id: 'center' + item.data.id,
              source: 'center',
              target: item.data.id,
            },
          }
        });
        cy.$('#center').style({width: 40, height: 40, backgroundColor: '#0f0',});
        cy.add(links);

        //2
        cytwo.add(nodes);
        let edgesT = [];
        cytwo.elements().layout({name: 'grid'}).run();
        for (let i = 0; i < nodes.length - 1; i++) {
          let num = Math.random() * 20 + 1;
          let arr = new Set();
          for (let j = 0; j < num; j++) {
            let str = Math.round(Math.random() * (nodes.length - i - 1));
            str = str ? (str + i) : (i + 1);
            arr.add(str);
          }

          let ar = [...arr].map(item => {
            return {
              group: 'edges',
              data: {
                id: i + '-' + item,
                source: i,
                target: item,
              }
            }
          });
          edgesT.push(...ar);
        }
        cytwo.add(edgesT);
        cytwo.elements().layout({name: 'breadthfirst'}).run();
        cytwo.nodes().style({
          width: 20,
          height: 20,
        });

        nodes = nodes.map((item, k) => {
          return {
            position: {
              x: cythree.width() / 2,
              y: k * 10,
            },
            ...item,
          }
        });

        let test = [];
        let sq = function (num) {
          num = num + 2;
          let n = 0;
          while (num > 2) {
            num = num / 2;
            n++;
          }
          return n;
        };

        for (let i = 0; i < nodes.length; i++) {
          let flag = Math.pow(2, sq(i)) + 1;
          test[i] = {
            ...nodes[i],
            position: {
              x: cythree.width() / flag * (i - flag + 3),
              y: (sq(i) + 1) * 40,
            },
          }
        }
        // eslint-disable-next-line no-console
        // console.log(test);


        cythree.add(nodes);
        let edgesH = [];
        for (let i = 0; i < nodes.length / 2 - 2; i++) {
          edgesH.push({
            group: 'edges',
            data: {id: nodes[i].data.id + '-' + (2 * i + 1), source: i, target: 2 * i + 1},
          });
          edgesH.push({
            group: 'edges',
            data: {id: nodes[i].data.id + '-' + (2 * i + 2), source: i, target: 2 * i + 2},
          });
        }
        // edgesH.push({group: 'edges', data: {id:0+ '-' + 17, source: 0, target: 17},});
        // edgesH.push({group: 'edges', data: {id:0+ '-' + 18, source: 0, target: 18},});
        edgesH.push({
          group: 'edges',
          data: {id:0+ '-' + (nodes.length-2), source: 0, target:nodes.length-2},});
        edgesH.push({
          group: 'edges',
          data: {id:0+ '-' + (nodes.length-1), source: 0, target: nodes.length-1},});



        cythree.add(edgesH);
        cythree.add({
          group: 'nodes',
          data: {id: '自定关系图谱'},
          position: {x: 50, y: 50}
        });
        // cythree.nodes().forEach((item,k)=>{
        //     return{
        //       position: {
        //         x: 200,
        //         y: sq(k)*20,
        //       },
        //       ...item,
        //     }
        //   });

        // cythree.elements().layout({name: 'breadthfirst'}).run();
        // eslint-disable-next-line no-console
        let ceng = [];
        // while ()
        let a = cythree.$('#0');
        ceng.push(a);
        while (a[0].length) {
          a =a.map(item => {
            return item.outgoers().targets()
          });
          ceng.push(a)
        }
        for (let m = 0; m < ceng.length; m++) {
          ceng[m][0].map(function (item, k,ele) {
            console.log(ele);
            let x = Math.pow(2,m)<ele.length ? ele.length:Math.pow(2,m);
            item.position({
              // x: cythree.width() / (ele.length+1)  * (k + 1),
              x: cythree.width() / (x+1)  * (k + 1),
              y: (m + 1) * 50,
            });
          });
        }
        // cythree.on('tap',)
      },
    },
  }
</script>

<style lang="less">

  .kan {
    background-color: #0ff;
    border: 1px solid #f00;
    width: 10px;
    height: 10px;
  }

  #cy, #two, #three {
    width: 802px;
    height: 602px;
    border: 1px solid red;

    canvas {
      left: 0;
    }
  }

</style>
