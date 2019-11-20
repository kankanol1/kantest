
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
        $('.boxInfo').click(function(){
          deleteBox();
        });
        let deleteBox = function(){

          !flag ? undefined : flag.style({backgroundColor: 'blue',lineColor: 'blue',targetArrowColor:'blue'});
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
                content:'data(num)',
                width: 1,
                curveStyle: 'bezier',
                targetArrowShape: 'triangle',
                targetArrowColor: '#00f',
                lineColor: '#00f',
                color:'#fff',
              }
            }
          ],
          elements: {
            nodes: [
              {
                "data": {
                  "id": "0",
                  "name": "动物"
                }
              },
              {
                "data": {
                  "id": "w",
                  "name": "狼"
                }
              },
              {
                "data": {
                  "id": "w1",
                  "name": "灰太狼"
                }
              },
              {
                "data": {
                  "id": "w2",
                  "name": "红太狼"
                }
              },
              {
                "data": {
                  "id": "w3",
                  "name": "小灰灰"
                }
              },
              {
                "data": {
                  "id": "m",
                  "name": "羊"
                }
              },
              {
                "data": {
                  "id": "m1",
                  "name": "喜洋洋"
                }
              },
              {
                "data": {
                  "id": "m2",
                  "name": "懒洋洋"
                }
              },
              {
                "data": {
                  "id": "m3",
                  "name": "美洋洋"
                }
              },
              {
                "data": {
                  "id": "m4",
                  "name": "沸洋洋"
                }
              },
              {
                "data": {
                  "id": "m5",
                  "name": "羊村长"
                }
              },
              {
                "data": {
                  "id": "h",
                  "name": "葫芦娃"
                }
              },
              {
                "data": {
                  "id": "h1",
                  "name": "葫芦娃1"
                }
              },
              {
                "data": {
                  "id": "h2",
                  "name": "葫芦娃2"
                }
              },
              {
                "data": {
                  "id": "h3",
                  "name": "葫芦娃3"
                }
              },
              {
                "data": {
                  "id": "h4",
                  "name": "葫芦娃4"
                }
              },
              {
                "data": {
                  "id": "h5",
                  "name": "葫芦娃5"
                }
              },
              {
                "data": {
                  "id": "h6",
                  "name": "葫芦娃6"
                }
              },
              {
                "data": {
                  "id": "h7",
                  "name": "葫芦娃7"
                }
              }
            ],
            edges: [
              {
                "data": {
                  "name": "动物-狼",
                  "id": "0-w",
                  "source": "0",
                  "target": "w",
                  "num": 12,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 90.38723074925397
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "动物-羊",
                  "id": "0-m",
                  "source": "0",
                  "target": "m",
                  "num": 11,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 70.49279860040059
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "动物-葫芦娃",
                  "id": "0-h",
                  "source": "0",
                  "target": "h",
                  "num": 11,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 95.26555979579292
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "狼-灰太狼",
                  "id": "w-w1",
                  "source": "w",
                  "target": "w1",
                  "num": 16,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 62.76286451316662
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "狼-红太狼",
                  "id": "w-w2",
                  "source": "w",
                  "target": "w2",
                  "num": 17,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 85.18927424518445
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "狼-小灰灰",
                  "id": "w-w3",
                  "source": "w",
                  "target": "w3",
                  "num": 17,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 8.04643952153905
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "羊-喜洋洋",
                  "id": "m-m1",
                  "source": "m",
                  "target": "m1",
                  "num": 18,
                  "info": [
                    {
                      "date": 1571212352088,
                      "time": 40.53874116338634
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "羊-懒洋洋",
                  "id": "m-m2",
                  "source": "m",
                  "target": "m2",
                  "num": 14,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 10.856934137770157
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "羊-美洋洋",
                  "id": "m-m3",
                  "source": "m",
                  "target": "m3",
                  "num": 11,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 51.52151017557507
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "羊-沸洋洋",
                  "id": "m-m4",
                  "source": "m",
                  "target": "m4",
                  "num": 17,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 24.34101717407371
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "羊-羊村长",
                  "id": "m-m5",
                  "source": "m",
                  "target": "m5",
                  "num": 19,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 9.382387414880577
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃1",
                  "id": "h-h1",
                  "source": "h",
                  "target": "h1",
                  "num": 18,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 3.140033129480191
                    },
                    {
                      "date": 1571212352089,
                      "time": 80.72915736531903
                    },
                    {
                      "date": 1571212352089,
                      "time": 93.26423949471243
                    },
                    {
                      "date": 1571212352089,
                      "time": 78.91780987496355
                    },
                    {
                      "date": 1571212352089,
                      "time": 79.55476259300967
                    },
                    {
                      "date": 1571212352089,
                      "time": 22.93534527014387
                    },
                    {
                      "date": 1571212352089,
                      "time": 37.707037612748984
                    },
                    {
                      "date": 1571212352089,
                      "time": 52.514748189041825
                    },
                    {
                      "date": 1571212352089,
                      "time": 76.28015685914
                    },
                    {
                      "date": 1571212352089,
                      "time": 97.88760865213102
                    },
                    {
                      "date": 1571212352089,
                      "time": 7.3695686125406334
                    },
                    {
                      "date": 1571212352089,
                      "time": 48.009137570470315
                    },
                    {
                      "date": 1571212352089,
                      "time": 86.67355114985615
                    },
                    {
                      "date": 1571212352089,
                      "time": 61.546364766894854
                    },
                    {
                      "date": 1571212352089,
                      "time": 34.614869067043344
                    },
                    {
                      "date": 1571212352089,
                      "time": 83.99064707790632
                    },
                    {
                      "date": 1571212352089,
                      "time": 44.49249454361252
                    },
                    {
                      "date": 1571212352089,
                      "time": 31.399430996907384
                    },
                    {
                      "date": 1571212352089,
                      "time": 63.487127154973756
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃2",
                  "id": "h-h2",
                  "source": "h",
                  "target": "h2",
                  "num": 14,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 31.61450044632268
                    },
                    {
                      "date": 1571212352089,
                      "time": 32.64858344474775
                    },
                    {
                      "date": 1571212352089,
                      "time": 37.50352394981014
                    },
                    {
                      "date": 1571212352089,
                      "time": 14.380954547826441
                    },
                    {
                      "date": 1571212352089,
                      "time": 70.38399955207171
                    },
                    {
                      "date": 1571212352089,
                      "time": 48.04359589186509
                    },
                    {
                      "date": 1571212352089,
                      "time": 62.97718461808011
                    },
                    {
                      "date": 1571212352089,
                      "time": 34.11066021890654
                    },
                    {
                      "date": 1571212352089,
                      "time": 53.0706961100571
                    },
                    {
                      "date": 1571212352089,
                      "time": 23.574245405744755
                    },
                    {
                      "date": 1571212352089,
                      "time": 48.5269869860556
                    },
                    {
                      "date": 1571212352089,
                      "time": 86.82530371596235
                    },
                    {
                      "date": 1571212352089,
                      "time": 26.210616796870532
                    },
                    {
                      "date": 1571212352089,
                      "time": 71.7676062018865
                    },
                    {
                      "date": 1571212352089,
                      "time": 67.20282239561716
                    },
                    {
                      "date": 1571212352089,
                      "time": 13.900475919374466
                    },
                    {
                      "date": 1571212352089,
                      "time": 25.373648346764877
                    },
                    {
                      "date": 1571212352089,
                      "time": 88.54269646757523
                    },
                    {
                      "date": 1571212352089,
                      "time": 84.23507243013042
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃3",
                  "id": "h-h3",
                  "source": "h",
                  "target": "h3",
                  "num": 18,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 17.902022133204397
                    },
                    {
                      "date": 1571212352089,
                      "time": 62.967732636217974
                    },
                    {
                      "date": 1571212352089,
                      "time": 67.79035005259016
                    },
                    {
                      "date": 1571212352089,
                      "time": 3.263116054816506
                    },
                    {
                      "date": 1571212352089,
                      "time": 59.92494549512208
                    },
                    {
                      "date": 1571212352089,
                      "time": 49.67281602300157
                    },
                    {
                      "date": 1571212352089,
                      "time": 1.2087568685727135
                    },
                    {
                      "date": 1571212352089,
                      "time": 24.921431961516948
                    },
                    {
                      "date": 1571212352089,
                      "time": 63.07114496229427
                    },
                    {
                      "date": 1571212352089,
                      "time": 76.90313299147304
                    },
                    {
                      "date": 1571212352089,
                      "time": 8.073730355162612
                    },
                    {
                      "date": 1571212352089,
                      "time": 98.80631213094071
                    },
                    {
                      "date": 1571212352089,
                      "time": 27.035124440923287
                    },
                    {
                      "date": 1571212352089,
                      "time": 44.28955482347943
                    },
                    {
                      "date": 1571212352089,
                      "time": 9.429275387455016
                    },
                    {
                      "date": 1571212352089,
                      "time": 31.135429816407665
                    },
                    {
                      "date": 1571212352089,
                      "time": 51.07770200856183
                    },
                    {
                      "date": 1571212352089,
                      "time": 47.87388685274849
                    },
                    {
                      "date": 1571212352089,
                      "time": 38.1574914967066
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃4",
                  "id": "h-h4",
                  "source": "h",
                  "target": "h4",
                  "num": 12,
                  "info": [
                    {
                      "date": 1571212352089,
                      "time": 32.88807237421996
                    },
                    {
                      "date": 1571212352089,
                      "time": 99.7714143618175
                    },
                    {
                      "date": 1571212352089,
                      "time": 58.957649040521275
                    },
                    {
                      "date": 1571212352089,
                      "time": 27.39647418274245
                    },
                    {
                      "date": 1571212352089,
                      "time": 73.52974479272906
                    },
                    {
                      "date": 1571212352091,
                      "time": 52.7049354423921
                    },
                    {
                      "date": 1571212352091,
                      "time": 51.57951373487681
                    },
                    {
                      "date": 1571212352091,
                      "time": 22.264930345955
                    },
                    {
                      "date": 1571212352091,
                      "time": 98.63703565386646
                    },
                    {
                      "date": 1571212352091,
                      "time": 1.320883433965947
                    },
                    {
                      "date": 1571212352091,
                      "time": 47.162146035716205
                    },
                    {
                      "date": 1571212352091,
                      "time": 48.27648440998982
                    },
                    {
                      "date": 1571212352091,
                      "time": 81.97803567631836
                    },
                    {
                      "date": 1571212352091,
                      "time": 17.659787045079266
                    },
                    {
                      "date": 1571212352091,
                      "time": 5.073448437090167
                    },
                    {
                      "date": 1571212352091,
                      "time": 87.96297337239352
                    },
                    {
                      "date": 1571212352091,
                      "time": 17.787568683288725
                    },
                    {
                      "date": 1571212352091,
                      "time": 36.63567379387198
                    },
                    {
                      "date": 1571212352091,
                      "time": 48.680713140243135
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃5",
                  "id": "h-h5",
                  "source": "h",
                  "target": "h5",
                  "num": 15,
                  "info": [
                    {
                      "date": 1571212352091,
                      "time": 23.159690912650422
                    },
                    {
                      "date": 1571212352091,
                      "time": 33.62248984637637
                    },
                    {
                      "date": 1571212352091,
                      "time": 34.783085983547245
                    },
                    {
                      "date": 1571212352091,
                      "time": 17.317517330081778
                    },
                    {
                      "date": 1571212352091,
                      "time": 52.139111725814026
                    },
                    {
                      "date": 1571212352091,
                      "time": 53.57621552969012
                    },
                    {
                      "date": 1571212352091,
                      "time": 60.781402511699454
                    },
                    {
                      "date": 1571212352091,
                      "time": 94.20336922275693
                    },
                    {
                      "date": 1571212352091,
                      "time": 55.583360938009285
                    },
                    {
                      "date": 1571212352091,
                      "time": 47.853149810892816
                    },
                    {
                      "date": 1571212352091,
                      "time": 15.530261707666249
                    },
                    {
                      "date": 1571212352091,
                      "time": 94.56079366946403
                    },
                    {
                      "date": 1571212352091,
                      "time": 89.84719319372529
                    },
                    {
                      "date": 1571212352091,
                      "time": 32.08288378123234
                    },
                    {
                      "date": 1571212352091,
                      "time": 36.958754245667635
                    },
                    {
                      "date": 1571212352091,
                      "time": 39.586972055898784
                    },
                    {
                      "date": 1571212352091,
                      "time": 42.300410740208584
                    },
                    {
                      "date": 1571212352091,
                      "time": 65.93361094245236
                    },
                    {
                      "date": 1571212352091,
                      "time": 55.491054948630136
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃6",
                  "id": "h-h6",
                  "source": "h",
                  "target": "h6",
                  "num": 13,
                  "info": [
                    {
                      "date": 1571212352091,
                      "time": 82.88594354490142
                    },
                    {
                      "date": 1571212352091,
                      "time": 88.92635097162913
                    },
                    {
                      "date": 1571212352091,
                      "time": 1.8071483800506938
                    },
                    {
                      "date": 1571212352091,
                      "time": 43.518742277132304
                    },
                    {
                      "date": 1571212352091,
                      "time": 93.81824147635483
                    },
                    {
                      "date": 1571212352091,
                      "time": 17.261616554307025
                    },
                    {
                      "date": 1571212352091,
                      "time": 20.392059836884656
                    },
                    {
                      "date": 1571212352091,
                      "time": 15.288842101985999
                    },
                    {
                      "date": 1571212352091,
                      "time": 50.567155483571426
                    },
                    {
                      "date": 1571212352091,
                      "time": 26.50054806043254
                    },
                    {
                      "date": 1571212352091,
                      "time": 81.09431319260769
                    },
                    {
                      "date": 1571212352091,
                      "time": 14.631395469283625
                    },
                    {
                      "date": 1571212352091,
                      "time": 58.11628992855149
                    },
                    {
                      "date": 1571212352091,
                      "time": 62.392380069481426
                    },
                    {
                      "date": 1571212352091,
                      "time": 95.74407428704816
                    },
                    {
                      "date": 1571212352091,
                      "time": 87.98031236641333
                    },
                    {
                      "date": 1571212352091,
                      "time": 10.565210192133389
                    },
                    {
                      "date": 1571212352091,
                      "time": 37.29826982129154
                    },
                    {
                      "date": 1571212352091,
                      "time": 15.848325162811715
                    }
                  ]
                }
              },
              {
                "data": {
                  "name": "葫芦娃-葫芦娃7",
                  "id": "h-h7",
                  "source": "h",
                  "target": "h7",
                  "num": 15,
                  "info": [
                    {
                      "date": 1571212352091,
                      "time": 23.3337036836351
                    },
                    {
                      "date": 1571212352091,
                      "time": 18.791072416253908
                    },
                    {
                      "date": 1571212352091,
                      "time": 86.58946259415376
                    },
                    {
                      "date": 1571212352091,
                      "time": 70.15694314425154
                    },
                    {
                      "date": 1571212352091,
                      "time": 1.4676888241236918
                    },
                    {
                      "date": 1571212352091,
                      "time": 77.8448294481986
                    },
                    {
                      "date": 1571212352091,
                      "time": 23.665744185673574
                    },
                    {
                      "date": 1571212352091,
                      "time": 26.17229445666125
                    },
                    {
                      "date": 1571212352091,
                      "time": 66.20626005731134
                    },
                    {
                      "date": 1571212352091,
                      "time": 51.55846320496982
                    },
                    {
                      "date": 1571212352091,
                      "time": 6.538793775313434
                    },
                    {
                      "date": 1571212352091,
                      "time": 25.534667830372058
                    },
                    {
                      "date": 1571212352091,
                      "time": 74.88508744315388
                    },
                    {
                      "date": 1571212352091,
                      "time": 54.424285255430924
                    },
                    {
                      "date": 1571212352091,
                      "time": 58.26684515804648
                    },
                    {
                      "date": 1571212352091,
                      "time": 61.34990884860292
                    },
                    {
                      "date": 1571212352091,
                      "time": 83.75828488628001
                    },
                    {
                      "date": 1571212352091,
                      "time": 40.63948466946235
                    },
                    {
                      "date": 1571212352091,
                      "time": 22.48625349843938
                    }
                  ]
                }
              }
            ],
          },
          zoom:1,

        });
        let selectElements = {};
        let oBox = document.createElement('div');
        oBox.classList = 'boxCon';
        let option = {
          selector: 'node',
          menuRadius: 120,
          commands:item=>{
            return [
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
                  cy.fit();
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
                  cy.fit();
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
                  cy.fit();
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
          atMouse: false,
        };
        cy.cxtmenu(option);
        cy.layout({ name: 'cola' }).run();
        let changeColor = function(e){
          !flag ? e : flag.style({backgroundColor: 'blue',lineColor: 'blue',targetArrowColor:'blue'});
          e.style({backgroundColor: 'red',lineColor: 'red',targetArrowColor:'red'}) ;
          flag = e;
        };
        cy.on('tap', function (e) {
          let s = e.originalEvent;
          deleteBox();
          if(e.target !== cy) {
            !flag ? e.target :
              flag.style({backgroundColor: 'blue',lineColor: 'blue',targetArrowColor:'blue'}) ;
            e.target.style({backgroundColor: 'red',lineColor: 'red',targetArrowColor:'red'}) ;
            flag = e.target;
            let str = '<span class="boxInfo">X</span>';
            if (e.target.group() === 'edges') {
              let info ='<ul class="phone"><li><span>通话日期</span><span>通话时长</span></li>';
              for(let i =0;i<e.target.data('info').length;i++){
                info = info +'<li><span>'+new Date(e.target.data('info')[i].date).format('yyyy年mm月dd日')+'</span><span>'+e.target.data('info')[i].time.toFixed(2)+'</span></li>';
              }
              info = info +'</ul>';
              str =str+ '<h1 class="title">通话记录 </h1>' +
                '<p>通话关系：' + e.target.data('name')+ '</p>' +
                '<p>呼出者：' + e.target.data('name').split('-')[0]+ '</p>' +
                '<p>接受者：' + e.target.data('name').split('-')[1]+ '</p>' +
                '<p>通话次数：' + e.target.data('num')+ '</p>' +
                '<p>通话信息：<span class="detail">详情>></span></p>' +info;
            }
            else {
              str = '<h1 class="title">'+e.target.data('name')+'信息</h1>' + '<p>name：' + e.target.data('name') + '</p>' + '<p>id：' + e.target.data('id') + '</p>';
            }
            oBox.innerHTML = str;
            str = undefined;
            oBox.style.left = (e.position.x > cy.width() / 4 ? (s.layerX - 220) : s.layerX) + 'px';
            oBox.style.top = (e.position.y> cy.height()/2?(s.layerY -  (e.target.group() === 'edges'?200:100)) : s.layerY) + 'px';
            $('#cy-box').append(oBox);
          }
        });
      }
    }
  }
</script>
<style lang="less">

  .boxCon {
    position: absolute;
    left: 0;
    top: 0;
    width: 220px;
    padding: 10px 10px;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    box-shadow: 4px 4px 8px #000;
    border: 1px solid #000;
    .boxInfo{
      cursor:pointer;
      color:red;
      float: right;
      display: block;
      width: 20px;
      height: 20px
    }
    p{

      .detail{
        color: blue;
        cursor:pointer;
      }
    }
    .title{
      text-align: center
    }
    .phone{
      list-style: none;
      width: 100%;
      max-height: 100px;
      overflow-y: auto;
      text-align: center;
      li{
        width: 100%;
        span{
          width: 50%;
          display: inline-block;
        }
      }
    }
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
