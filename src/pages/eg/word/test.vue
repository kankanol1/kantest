<!---
    Created by kankan on 2019-09-29.
    email: lidainzhong@gl-data.com
-->


<template>
  <div>
    <div>
      <div  class="item" id="main"></div>
    </div>
    <div>
      <div class="item" id="map"></div>
    </div>


  </div>

</template>

<script>
  export default {
    name: "test",
    mounted(){
      this.world();
      this.map();
    },
    methods: {


      world() {
        const echarts = require('echarts');
        require('echarts-wordcloud');
        let data = {
          value: [
            {
              "name": "冰原狼",
              "value": 1846
            },
            {
              "name": "汽车",
              "value": 928
            },
            {
              "name": "视频",
              "value": 906
            },
            {
              "name": "电视",
              "value": 825
            },
            {
              "name": "Lover Boy 88",
              "value": 514
            },
            {
              "name": "动漫",
              "value": 486
            },
            {
              "name": "音乐",
              "value": 53
            },
            {
              "name": "直播",
              "value": 163
            },
            {
              "name": "广播电台",
              "value": 86
            },
            {
              "name": "戏曲曲艺",
              "value": 17
            },
            {
              "name": "演出票务",
              "value": 6
            },
            {
              "name": "给陌生的你听",
              "value": 1
            },
            {
              "name": "资讯",
              "value": 1437
            },
            {
              "name": "商业财经",
              "value": 422
            },
            {
              "name": "娱乐八卦",
              "value": 353
            },
            {
              "name": "军事",
              "value": 331
            },
            {
              "name": "科技资讯",
              "value": 313
            },
            {
              "name": "社会时政",
              "value": 307
            },
            {
              "name": "时尚",
              "value": 43
            },
            {
              "name": "网络奇闻",
              "value": 15
            },
            {
              "name": "旅游出行",
              "value": 438
            },
            {
              "name": "景点类型",
              "value": 957
            },
            {
              "name": "国内游",
              "value": 927
            },
            {
              "name": "远途出行方式",
              "value": 908
            },
            {
              "name": "酒店",
              "value": 693
            },
            {
              "name": "关注景点",
              "value": 611
            },
            {
              "name": "旅游网站偏好",
              "value": 512
            },
            {
              "name": "出国游",
              "value": 382
            },
            {
              "name": "交通票务",
              "value": 312
            },
            {
              "name": "旅游方式",
              "value": 187
            },
            {
              "name": "旅游主题",
              "value": 163
            },
            {
              "name": "港澳台",
              "value": 104
            },
            {
              "name": "本地周边游",
              "value": 3
            },
            {
              "name": "小卖家",
              "value": 1331
            },
            {
              "name": "全日制学校",
              "value": 941
            },
            {
              "name": "基础教育科目",
              "value": 585
            },
            {
              "name": "考试培训",
              "value": 473
            },
            {
              "name": "语言学习",
              "value": 358
            },
            {
              "name": "留学",
              "value": 246
            },
            {
              "name": "K12课程培训",
              "value": 207
            },
            {
              "name": "艺术培训",
              "value": 194
            },
            {
              "name": "技能培训",
              "value": 104
            },
            {
              "name": "IT培训",
              "value": 87
            },
            {
              "name": "高等教育专业",
              "value": 63
            },
            {
              "name": "家教",
              "value": 48
            },
            {
              "name": "体育培训",
              "value": 23
            },
            {
              "name": "职场培训",
              "value": 5
            },
            {
              "name": "金融财经",
              "value": 1328
            },
            {
              "name": "银行",
              "value": 765
            },
            {
              "name": "股票",
              "value": 452
            },
            {
              "name": "保险",
              "value": 415
            },
            {
              "name": "贷款",
              "value": 253
            },
            {
              "name": "基金",
              "value": 211
            },
            {
              "name": "信用卡",
              "value": 180
            },
            {
              "name": "外汇",
              "value": 138
            },
            {
              "name": "P2P",
              "value": 116
            },
            {
              "name": "贵金属",
              "value": 98
            },
            {
              "name": "债券",
              "value": 93
            },
            {
              "name": "网络理财",
              "value": 92
            },
            {
              "name": "信托",
              "value": 90
            },
            {
              "name": "征信",
              "value": 76
            },
            {
              "name": "期货",
              "value": 76
            },
            {
              "name": "公积金",
              "value": 40
            },
            {
              "name": "银行理财",
              "value": 36
            },
            {
              "name": "银行业务",
              "value": 30
            },
            {
              "name": "典当",
              "value": 7
            },
            {
              "name": "海外置业",
              "value": 1
            },
            {
              "name": "汽车",
              "value": 1309
            },
            {
              "name": "汽车档次",
              "value": 965
            },
            {
              "name": "汽车品牌",
              "value": 900
            },
            {
              "name": "汽车车型",
              "value": 727
            },
            {
              "name": "购车阶段",
              "value": 461
            },
            {
              "name": "二手车",
              "value": 309
            },
            {
              "name": "汽车美容",
              "value": 260
            },
            {
              "name": "新能源汽车",
              "value": 173
            },
            {
              "name": "汽车维修",
              "value": 155
            },
            {
              "name": "租车服务",
              "value": 136
            },
            {
              "name": "车展",
              "value": 121
            },
            {
              "name": "违章查询",
              "value": 76
            },
            {
              "name": "汽车改装",
              "value": 62
            },
            {
              "name": "汽车用品",
              "value": 37
            },
            {
              "name": "路况查询",
              "value": 32
            },
            {
              "name": "汽车保险",
              "value": 28
            },
            {
              "name": "陪驾代驾",
              "value": 4
            },
            {
              "name": "网络购物",
              "value": 1275
            },
            {
              "name": "做我的猫",
              "value": 1088
            },
            {
              "name": "只想要你知道",
              "value": 907
            },
            {
              "name": "团购",
              "value": 837
            },
            {
              "name": "比价",
              "value": 201
            },
            {
              "name": "海淘",
              "value": 195
            },
            {
              "name": "移动APP购物",
              "value": 179
            },
            {
              "name": "支付方式",
              "value": 119
            },
            {
              "name": "代购",
              "value": 43
            },
            {
              "name": "体育健身",
              "value": 1234
            },
            {
              "name": "体育赛事项目",
              "value": 802
            },
            {
              "name": "运动项目",
              "value": 405
            },
            {
              "name": "体育类赛事",
              "value": 337
            },
            {
              "name": "健身项目",
              "value": 199
            },
            {
              "name": "健身房健身",
              "value": 78
            },
            {
              "name": "运动健身",
              "value": 77
            },
            {
              "name": "家庭健身",
              "value": 36
            },
            {
              "name": "健身器械",
              "value": 29
            },
            {
              "name": "办公室健身",
              "value": 3
            },
            {
              "name": "商务服务",
              "value": 1201
            },
            {
              "name": "法律咨询",
              "value": 508
            },
            {
              "name": "化工材料",
              "value": 147
            },
            {
              "name": "广告服务",
              "value": 125
            },
            {
              "name": "会计审计",
              "value": 115
            },
            {
              "name": "人员招聘",
              "value": 101
            },
            {
              "name": "印刷打印",
              "value": 66
            },
            {
              "name": "知识产权",
              "value": 32
            },
            {
              "name": "翻译",
              "value": 22
            },
            {
              "name": "安全安保",
              "value": 9
            },
            {
              "name": "公关服务",
              "value": 8
            },
            {
              "name": "商旅服务",
              "value": 2
            },
            {
              "name": "展会服务",
              "value": 2
            },
            {
              "name": "特许经营",
              "value": 1
            },
            {
              "name": "休闲爱好",
              "value": 1169
            },
            {
              "name": "收藏",
              "value": 412
            },
            {
              "name": "摄影",
              "value": 393
            },
            {
              "name": "温泉",
              "value": 230
            },
            {
              "name": "博彩彩票",
              "value": 211
            },
            {
              "name": "美术",
              "value": 207
            },
            {
              "name": "书法",
              "value": 139
            },
            {
              "name": "DIY手工",
              "value": 75
            },
            {
              "name": "舞蹈",
              "value": 23
            },
            {
              "name": "钓鱼",
              "value": 21
            },
            {
              "name": "棋牌桌游",
              "value": 17
            },
            {
              "name": "KTV",
              "value": 6
            },
            {
              "name": "密室",
              "value": 5
            },
            {
              "name": "采摘",
              "value": 4
            },
            {
              "name": "电玩",
              "value": 1
            },
            {
              "name": "真人CS",
              "value": 1
            },
            {
              "name": "轰趴",
              "value": 1
            },
            {
              "name": "家电数码",
              "value": 1111
            },
            {
              "name": "手机",
              "value": 885
            },
            {
              "name": "电脑",
              "value": 543
            },
            {
              "name": "大家电",
              "value": 321
            },
            {
              "name": "家电关注品牌",
              "value": 253
            },
            {
              "name": "网络设备",
              "value": 162
            },
            {
              "name": "摄影器材",
              "value": 149
            },
            {
              "name": "影音设备",
              "value": 133
            },
            {
              "name": "办公数码设备",
              "value": 113
            },
            {
              "name": "生活电器",
              "value": 67
            },
            {
              "name": "厨房电器",
              "value": 54
            },
            {
              "name": "智能设备",
              "value": 45
            },
            {
              "name": "个人护理电器",
              "value": 22
            },
            {
              "name": "服饰鞋包",
              "value": 1047
            },
            {
              "name": "服装",
              "value": 566
            },
            {
              "name": "饰品",
              "value": 289
            },
            {
              "name": "鞋",
              "value": 184
            },
            {
              "name": "箱包",
              "value": 168
            },
            {
              "name": "奢侈品",
              "value": 137
            },
            {
              "name": "母婴亲子",
              "value": 1041
            },
            {
              "name": "孕婴保健",
              "value": 505
            },
            {
              "name": "母婴社区",
              "value": 299
            },
            {
              "name": "早教",
              "value": 103
            },
            {
              "name": "奶粉辅食",
              "value": 66
            },
            {
              "name": "童车童床",
              "value": 41
            },
            {
              "name": "关注品牌",
              "value": 271
            },
            {
              "name": "宝宝玩乐",
              "value": 30
            },
            {
              "name": "母婴护理服务",
              "value": 25
            },
            {
              "name": "纸尿裤湿巾",
              "value": 16
            },
            {
              "name": "妈妈用品",
              "value": 15
            },
            {
              "name": "宝宝起名",
              "value": 12
            },
            {
              "name": "童装童鞋",
              "value": 9
            },
            {
              "name": "胎教",
              "value": 8
            },
            {
              "name": "宝宝安全",
              "value": 1
            },
            {
              "name": "宝宝洗护用品",
              "value": 1
            },
            {
              "name": "软件应用",
              "value": 1018
            },
            {
              "name": "系统工具",
              "value": 896
            },
            {
              "name": "理财购物",
              "value": 440
            },
            {
              "name": "生活实用",
              "value": 365
            },
            {
              "name": "影音图像",
              "value": 256
            },
            {
              "name": "社交通讯",
              "value": 214
            },
            {
              "name": "手机美化",
              "value": 39
            },
            {
              "name": "办公学习",
              "value": 28
            },
            {
              "name": "应用市场",
              "value": 23
            },
            {
              "name": "母婴育儿",
              "value": 14
            },
            {
              "name": "游戏",
              "value": 946
            },
            {
              "name": "手机游戏",
              "value": 565
            },
            {
              "name": "PC游戏",
              "value": 353
            },
            {
              "name": "网页游戏",
              "value": 254
            },
            {
              "name": "游戏机",
              "value": 188
            },
            {
              "name": "模拟辅助",
              "value": 166
            },
            {
              "name": "个护美容",
              "value": 942
            },
            {
              "name": "护肤品",
              "value": 177
            },
            {
              "name": "彩妆",
              "value": 133
            },
            {
              "name": "美发",
              "value": 80
            },
            {
              "name": "香水",
              "value": 50
            },
            {
              "name": "个人护理",
              "value": 46
            },
            {
              "name": "美甲",
              "value": 26
            },
            {
              "name": "SPA美体",
              "value": 21
            },
            {
              "name": "花鸟萌宠",
              "value": 914
            },
            {
              "name": "绿植花卉",
              "value": 311
            },
            {
              "name": "狗",
              "value": 257
            },
            {
              "name": "其他宠物",
              "value": 131
            },
            {
              "name": "水族",
              "value": 125
            },
            {
              "name": "猫",
              "value": 122
            },
            {
              "name": "动物",
              "value": 81
            },
            {
              "name": "鸟",
              "value": 67
            },
            {
              "name": "宠物用品",
              "value": 41
            },
            {
              "name": "宠物服务",
              "value": 26
            },
            {
              "name": "书籍阅读",
              "value": 913
            },
            {
              "name": "网络小说",
              "value": 483
            },
            {
              "name": "关注书籍",
              "value": 128
            },
            {
              "name": "文学",
              "value": 105
            },
            {
              "name": "报刊杂志",
              "value": 77
            },
            {
              "name": "人文社科",
              "value": 22
            },
            {
              "name": "建材家居",
              "value": 907
            },
            {
              "name": "装修建材",
              "value": 644
            },
            {
              "name": "家具",
              "value": 273
            },
            {
              "name": "家居风格",
              "value": 187
            },
            {
              "name": "家居家装关注品牌",
              "value": 140
            },
            {
              "name": "家纺",
              "value": 107
            },
            {
              "name": "厨具",
              "value": 47
            },
            {
              "name": "灯具",
              "value": 43
            },
            {
              "name": "家居饰品",
              "value": 29
            },
            {
              "name": "家居日常用品",
              "value": 10
            },
            {
              "name": "生活服务",
              "value": 883
            },
            {
              "name": "物流配送",
              "value": 536
            },
            {
              "name": "家政服务",
              "value": 108
            },
            {
              "name": "摄影服务",
              "value": 49
            },
            {
              "name": "搬家服务",
              "value": 38
            },
            {
              "name": "物业维修",
              "value": 37
            },
            {
              "name": "婚庆服务",
              "value": 24
            },
            {
              "name": "二手回收",
              "value": 24
            },
            {
              "name": "鲜花配送",
              "value": 3
            },
            {
              "name": "维修服务",
              "value": 3
            },
            {
              "name": "殡葬服务",
              "value": 1
            },
            {
              "name": "求职创业",
              "value": 874
            },
            {
              "name": "创业",
              "value": 363
            },
            {
              "name": "目标职位",
              "value": 162
            },
            {
              "name": "目标行业",
              "value": 50
            },
            {
              "name": "兼职",
              "value": 21
            },
            {
              "name": "期望年薪",
              "value": 20
            },
            {
              "name": "实习",
              "value": 16
            },
            {
              "name": "雇主类型",
              "value": 10
            },
            {
              "name": "星座运势",
              "value": 789
            },
            {
              "name": "星座",
              "value": 316
            },
            {
              "name": "算命",
              "value": 303
            },
            {
              "name": "解梦",
              "value": 196
            },
            {
              "name": "风水",
              "value": 93
            },
            {
              "name": "面相分析",
              "value": 47
            },
            {
              "name": "手相",
              "value": 32
            },
            {
              "name": "公益",
              "value": 90
            }
          ],
          // 小鸟图片
          // image: "data:image/png;base64,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"

          // 鱼
          // image:"data:image/png;base64,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",

          // 海豚
          // image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAPT0lEQVR4Xu2debC/1RzHX6UkFYoWLVSKdkk1rZYIJQqJNlmihaS0KbvSSlN2ZYSYNstEyqBhpJGhJm3I1ihK0UIylph3nZ/5dbv3+/3e53vOc5bnfWbu3D/ucz6fz3l9nvd9tnM+ZxHcTMAE5iSwiNmYgAnMTcAC8dlhAiMIWCA+PUzAAvE5YALdCPgK0o2bew2EgAUykER7mN0IWCDduLnXQAhYIANJtIfZjYAF0o2bew2EgAUykER7mN0IWCDduLnXQAhYIANJtIfZjYAF0o2bew2EgAUykER7mN0IWCDduLnXQAhYIANJtIfZjYAF0o2bew2EgAUykER7mN0IWCDduLnXQAhYIANJtIfZjYAF0o2bew2EgAUykER7mN0IWCDduLnXQAhYIANJtIfZjYAF0o2bew2EgAVSf6KXBTYA1gdWmmU4fwRuBK4C7qx/uP2OwALpl3cMbxsBzwW2BLYCVpuH0ZuAy4DzgAvn0W+wh1ogdaR+LWAPYC9g7UghfxA4JpKtZs1YIGWn9kXAEeGKETvSA4FPxDbamj0LpMyM6kpxVHiuSBXhjsDFqYy3YtcCKSuTLwFOBNbtISw92F/Xg5+qXVggZaRvY+CjwNY9hXM/8CjgXz35q9aNBZI3dY8EjgcOAfrMxdWAROk2hkCfSXEyHkpAt1HnAhtmAPMZYN8MfqtzaYH0nzIxPxQ4Dliif/cPeHwdcFYm31W5tUD6TdejgfMBvUHK2dYEfpszgFp8WyD9ZWpl4KIC7v1vnufX9/4IFejJAuknKc8ALgFW6MfdSC+nAwcXEEcVIVggcdOkW6ilZvzoYfzjgP5WQnsO8P0SAqkhBgtk8iytGOZBrQM8GVglzJ7VDFr9PHFyU9mOvANYPpv3Ch1bIA9PmiYD6r++fjSF/Knh99IV5ndmyO8H3tPAOHobwpAFoluhLcJDs75FSAyb9ka+f0f3hYfzP/fvul6PQxPIs4HtAd2H9zWto5SzQ1NZDiolmFriGIJANgN2B14F6FXrENs/wnPTn4Y4+GnG3KJAHgE8C9g5/Kw+DaBG+npxVMdEtiSQxYE3hFVyq3bk0WK3vwBrAPe0OLjUY2pFIPsFYcxnfXZqtiXZfxNwRkkB1RJL7QI5DHj7HNU8aslBX3G+Czi2L2et+KlVIKrqcSagSXdukxM4BTh88sN9ZG0C0cc6zSXSdG23bgRUqEEFG9wmIFCTQDYHzgkPnBMMzYeMIKBiDbsBfzOl0QRqEcj+wGmAlqi6xSFwJaAPpxbJCJ41CES3BBKIW3wCPwozCyySOdiWLhCt2datgFs6Aj8GXgjclc5FvZZLFciiwJeBXepFW1Xk14fqjZ6KMiNtpQpEE+veXNUpVn+wvwiTOG+tfyjxRlCiQFSOxl994+V4PpZ+Hh7cfSUJ1EoTiBYnqaiZqv655SFwQ7jdui2P+7K8liaQy8O+F2VRGl402nBHsxVuGd7QHzrikgSi9Rr6EOhWBgHVzdp26CIpRSCKQ/e/usVyK4fAL8MuVoNdpluKQLRRjPeqKEcYC0eiL+5aovzXMsNLG1UpAtGtlW6x3MokcCnwvDJDSxtVCQLRElmtdiulsFpa4vVa/xKwZ73hd4u8BIHobYn+Q7mVT+BI4KTyw4wXYQkCUSGz98Ybki0lJrA3cHZiH8WYL0EgmnP18mKIOJBJCGgvxW9McmDtx5QgkKsK2BKg9jz2Hb/qbG0D/LRvx337K0Egf6ik8HPfuSndn/KmbR2anrdVgkC0DuGxpZ8Njm9WAlpwpSJ9ze6WW4JAbgee4BOwWgJN1/wtQSBah+ApJtXq44HAXx127K17FLNEX4JAvg7s1BzZYQ3oXuCZgP7ZNdVyCkSV1lWOX2Uxl2uK6jAHc03YX+WfLQ0/h0BUuucY4CiX8WnpVHpgLB8CVA62mda3QDStRGV8ntYMQQ9kJoGmNgntSyBaQqudXl0ytH1B/RpYq5Vh9iEQPWt8C9igFWgex1gCxwNHjz2qggNSC0QP31e09B+lgpyWEuLGoQBHKfF0iiO1QDwRsVNamuik6jQSSdUtpUA2auE/SNXZzR+83lZqf8RqW0qBvBP4QLVkHHgMApr1+xRAExurbCkF4qrsVZ4S0YP+LPD66FZ7MphSIO8HtC+e27AJ3A88Hbi2RgwpBaK5OT+pEYpjjk5Ar/lV2qm6llIggnEB8IrqqDjgFAS2BLR+pKqWWiD6DnIRsEVVVBxsCgJ65b9rCsMpbaYWyILYjwBOTDkQ266CgN5o/aaKSEOQfQlE7hZMb38j8PiaIDnWaASqW33Yp0AWprw78FJgO2CFaPhtqHQC94UCHXeXHuiC+HIJZDY+uvxqFqheCeYqQ7oJoJpPsdvbgEvCHu8a4+rA2sCa4SfXeGOPcxJ7rwU+N8mBJRxTkkBK4LEkoJL/q0YO5t1jZhVoTb5eZCz42RBYLHIMpZj7NvCCUoIZF4cF8nBCzweUxJjtVODQeRiUUDcPgtGt6Fbz6FvDoSvWUk/LApn9dNLJrOWjsdrngX2mMKbntJeFEq1albn4FLZK6PpW4CMlBDIuBgtkbkIfAw4cB3DCv6uObaxnGxXZ01VFRaS3n9B/aYdVs9+IBTL3qSM2XwT0xm3aps1Jt57WyCz9VwtVYbSUeZUE9lOZ1CzfZYB/p3IQy64FMp6kbgXeMv6wkUdo/8V1p7QxrruuUAcAO4w7sJC/q2TpDwqJZc4wLJDJMrQf8MnJDp31KBV41oNpH21T4OSwr2Af/rr60EzvY7t27qufBTI5aX230DZkOgG7tL5Z61WqpveUuuz1u4DeGBbd+k5a0TAmDK7rG67HZNopVnVzTynwGeXvwFITMs92mAXSDb0eiLVtnL4KT/pBbw3gd93cTd1Ldcm0PvxwYImprcUzoA+yt8QzF9+SBTIdU00b0bp7bWE9jqVElXtt9pPD94dYr5yno/fg1tJFb+A6LqnTAhhK//XCmy5tk6xbqZmttNsJ7Ql5VnjVmjNH+wOfyhnAON8WyDhC8/+7PuJpFaVW0OnBXu18YLf5m0raQ1c/bT2xTlIvo43PdwpO76FaIL0jL8rh0oCqjuRa6Vf8KkMLpKjzNVswRwInZPBefDEHCyTDWVGoS32T+Cqgq0pf7TJg276cdfFjgXSh1m4fPY9cHBZ09THKK8PWbX346uTDAumErelOywKafdzHGpQ+5qhNlSwLZCp8zXbWEuALefA7RcqmTT9zvkUbOzYLZCyiwR6gL+56Jkk5O1iF5PQ6vNhmgRSbmmICk0h2SRRNzIVkSUK0QJJgbcqodiXWug2tkY/d9DW/6H0rLZDYKW/T3uNCXd3YuxNrlrEmUBbbLJBiU1NcYFreq2r9MQv9aU/1mMUxokOzQKIjbdqg6nXp495sEzK7DFxbIuhrerHNAik2NcUGprXk34lUekjfXO4qdqQTrGEoOXbHlo+A6lqdNqX7W0Od3inNpO3uK0havi1b163RNCVEVas45TeWKOwtkCgYB2lEVVpuAHSb1KUdDxzdpWOffSyQPmm350vlUL/ScViaZrIT8KuO/XvpZoH0grlpJyqF1LX65NVhUqSWJBfZLJAi01JVUPouoi0jVDO4Syu6PpYF0iWl7jOTgEqzTlOtfdz+KdmIWyDZ0Dfn+L9TjkgVIHXLVVSzQIpKR7XBqGLLuVNGfy2gL/VFNQukqHRUG8w1wAYRoleR8E9HsBPNhAUSDeVgDe0IXBRp9Pq6rhKt2j+kiGaBFJGGqoP4YeT160VVW7RAqj43swe/TYJNcK4H1s8+shCABVJKJuqMQ7dWusWK3bRR6fdiG+1izwLpQs19REAP5Xo4T9G+ALwmheH52rRA5kvMxy8gcE7Y9iEFET2kaxJk9od1CyRFetu3qcrwNyYe5l5hl+HEbkabt0Cy4q/W+RnAvomj1yxhbSORtVkgWfFX6Xxl4KZ5bD3XdZD3hgmQ/+lqIEY/CyQGxWHZ+DBwSE9DVsV5zfbN1iyQbOirdKz6WNpnccmeon9f2Cy1J3cPd2OBZENfpeP3zDhh7wvfK7RlwhVBPDcDWo67EvB04ABgi46j/RqgVYvZmgWSDX11jnXV0Mm/HCBhnAToduueCUayKXBmEMwEh///EG2brblZ2ZoFkg19dY4PDVUQNdtWe67f0WEEJwJHzLOfbuvunmefaIdbINFQNm1IBaxVUVEP55qcOE3bJ1xNFpvQiLZH0DYJWZoFkgV7dU71TKFbKd1axWjzmSL/SuCCGE672LBAulBznxgEdJt27ASGVP1dVeCzNAskC3Y7DQT09ksFrEe104GDcxGzQHKRt18RWDWUDBr1XeW8hJMix2bBAhmLyAckJqDyo8eN8KE1J6rAmKVZIFmw2+kMAr8PV5PZwFzaw267cybEAvG5WgKBUdsp6At91y/xU4/NApkaoQ1EIKBnEM0QXn4WWz/r8AU+QkgPmrBAoqG0oSkJaGKiSpDObNdFqrnVKTwLpBM2d0pAQJMbbwEWnWH7KmCTBP4mMmmBTITJB/VEQLN3d57h63Jg6578P8yNBZKLvP3ORmBX4PwZf/BbLJ8rJhAI6GH9NmCZhYh8E3hxLkK+guQib79zETgb2HOhP+qKourxWZoFkgW7nY4gsMeMcj/amEffSbI0CyQLdjsdQUBbud250CeIdwAn5CJmgeQib7+jCPwY2CwcsDeg264szQLJgt1OxxA4GTgsHJO19I8F4nO1RAI7AHp7pbYOoD3VszQLJAt2Ox1DQK95F1RLWQrIto+6BeJztVQCV4bJi6vlDNACyUnfvkcRUB2tNYHtcmKyQHLSt+9RBA4C1guVGbORskCyobfjMQS2D9PcT81JygLJSd++RxF4UhDIgrdZWWhZIFmw2+mEBLTC8PYJj01ymAWSBKuNtkLAAmklkx5HEgIWSBKsNtoKAQuklUx6HEkIWCBJsNpoKwQskFYy6XEkIWCBJMFqo60QsEBayaTHkYSABZIEq422QsACaSWTHkcSAhZIEqw22goBC6SVTHocSQhYIEmw2mgrBCyQVjLpcSQhYIEkwWqjrRCwQFrJpMeRhIAFkgSrjbZCwAJpJZMeRxICFkgSrDbaCgELpJVMehxJCFggSbDaaCsELJBWMulxJCFggSTBaqOtELBAWsmkx5GEgAWSBKuNtkLAAmklkx5HEgIWSBKsNtoKAQuklUx6HEkIWCBJsNpoKwQskFYy6XEkIWCBJMFqo60Q+B91lWbY0RcHFAAAAABJRU5ErkJggg==",

          //企鹅
          // image:"data:image/png;base64,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",

          // ♥
          image:"data:image/png;base64,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",

          // 情侣
          // image:"data:image/png;base64,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",

          // 狼头
          // image: "data:image/png;base64,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",


        };
        let myChart = echarts.init(document.getElementById('main'));
        //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
        let maskImage = new Image();
        maskImage.src = data.image;
        maskImage.onload = function () {
          myChart.setOption({
            backgroundColor: '#fff',
            title:{
              text:'Echarts词云',
              left:'center',
              top:'2%',
              colro:'#000',
              fontSize:24,
              fontFamily: '微软雅黑',
              subtext:'echarts,echarts-wordcloud',
              subtextStyle:{
                color:'#000',
              }
            },
            tooltip: {
              show: true,
              formatter: (params) => {
                return "<div style='padding: 10px 20px;font-size: 20px'>" + params.name + ":" + params.value + "</div>";
              },

            },
            /*series: [{
              type: 'wordCloud',
              gridSize: 1,
              sizeRange: [12, 55],
              rotationRange: [-45, 0, 45, 90],
              maskImage: maskImage,
              textStyle: {
                normal: {
                  color: function() {
                    return 'rgb(' +
                      Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) + ')'
                  }
                }
              },
              left: 'center',
              top: 'center',
              // width: '96%',
              // height: '100%',
              right: null,
              bottom: null,
              // width: 300,
              // height: 200,
              // top: 20,
              data: data.value
            }],*/

            series: [{
              type: 'wordCloud',

              // The shape of the "cloud" to draw. Can be any polar equation represented as a
              // callback function, or a keyword present. Available presents are circle (default),
              // cardioid (apple or heart shape curve, the most known polar equation), diamond (
              // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

              shape: 'circle',

              // A silhouette image which the white area will be excluded from drawing texts.
              // The shape option will continue to apply as the shape of the cloud to grow.

              maskImage: maskImage,

              // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
              // Default to be put in the center and has 75% x 80% size.

              left: 'center',
              top: 'center',
              width: '70%',
              height: '80%',
              right: null,
              bottom: null,

              // Text size range which the value in data will be mapped to.
              // Default to have minimum 12px and maximum 60px size.

              sizeRange: [12,30],

              // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

              rotationRange: [-90, 90],
              // rotationRange: [0, 10],
              rotationStep: 45,
              // rotationStep: 45,

              // size of the grid in pixels for marking the availability of the canvas
              // the larger the grid size, the bigger the gap between words.

              gridSize: 8,

              // set to true to allow word being draw partly outside of the canvas.
              // Allow word bigger than the size of the canvas to be drawn
              drawOutOfBound: false,

              // Global text style
              textStyle: {
                normal: {
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  // fontSize:12,
                  // Color can be a callback function or a color string
                  color: function () {
                    // Random color
                    return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')';
                  }
                },
                emphasis: {
                  shadowBlur: 4,
                  shadowColor: '#000'
                }
              },

              // Data is an array. Each array item must have name and value property.
              data: data.value,
            }]
          })
        }
      },
      map(){
        require('echarts/map/js/china');
        require('echarts-gl');
        let addr = {
          "钓鱼岛":[123.5291260000,25.7718760000],
          "台北市": [121.5200759999999,25.031773884554273],
          "香港": [114.16546000000001,22.277206484384898],
          "澳门": [113.54913,22.20061750478515],
          "北京市": [116.46, 39.92],
          "天津市": [117.2, 39.13],
          "河北省": [114.48, 38.03],
          "山西省": [112.53, 37.87],
          "内蒙古自治区": [111.65, 40.82],
          "辽宁省": [123.38, 41.8],
          "吉林省": [125.35, 43.88],
          "黑龙江省": [126.63, 45.75],
          "上海市": [121.48, 31.22],
          "江苏省": [118.78, 32.04],
          "浙江省": [120.19, 30.26],
          "安徽省": [117.27, 31.86],
          "福建省": [119.3, 26.08],
          "江西省": [115.89, 28.68],
          "山东省": [116.75199, 36.65],
          "河南省": [113.65, 34.76],
          "湖北省": [114.31, 30.52],
          "湖南省": [113, 28.21],
          "广东省": [113.23, 23.16],
          "广西壮族自治区": [110.28, 25.29],
          "海南省": [110.35, 20.02],
          "重庆市": [106.54, 29.59],
          "四川省": [104.06, 30.67],
          "贵州省": [106.71, 26.57],
          "云南省": [102.73, 25.04],
          "西藏自治区": [91.11, 29.97],
          "陕西省": [108.95, 34.27],
          "甘肃省": [103.73, 36.03],
          "青海省": [101.74, 36.56],
          "宁夏回族自治区": [106.27, 38.47],
          "新疆维吾尔自治区": [87.68, 43.77],
        };
        let city = {
          110001:"台北市",
          110002:"香港",
          110003:"澳门",
          110004:"钓鱼岛",
          110000: "北京市",
          120000: "天津市",
          130000: "河北省",
          140000: "山西省",
          150000: "内蒙古自治区",
          210000: "辽宁省",
          220000: "吉林省",
          230000: "黑龙江省",
          310000: "上海市",
          320000: "江苏省",
          330000: "浙江省",
          340000: "安徽省",
          350000: "福建省",
          360000: "江西省",
          370000: "山东省",
          410000: "河南省",
          420000: "湖北省",
          430000: "湖南省",
          440000: "广东省",
          450000: "广西壮族自治区",
          460000: "海南省",
          500000: "重庆市",
          510000: "四川省",
          520000: "贵州省",
          530000: "云南省",
          540000: "西藏自治区",
          610000: "陕西省",
          620000: "甘肃省",
          630000: "青海省",
          640000: "宁夏回族自治区",
          650000: "新疆维吾尔自治区"
        };
        const echarts = require('echarts');
        this.$axios.get("/api/test/map.json",{}).then((response) => {
            let data = response.data.data.map(item => {
              let arr = addr[city[item.code]];
              arr.push(item.count);
              return {
                ...item,
                name: city[item.code],
                value: arr,
              }
            });
            let option = {
              title: {
                text: '中国地图及省会',
                left:'center',
                top:'2%',
                colro:'#000',
                fontSize:24,
                x: 'left',
                textStyle: {
                  color: '#000',
                  fontSize: 14
                },
                subtext:'echarts,echarts-gl',
                subtextStyle: {
                  color:'#000',
                }
              },
              tooltip: {
                show: true,
                formatter: (params) => {
                  return "<div style='padding: 10px 20px'>" + params.name + "</br>" +
                    "数量：" + params.data.value[2] + "</br>" +
                    "比例：" + params.data.percent * 100 + "%" +
                    "</div>";
                },
              },
              visualMap: [
                {
                  show: false,
                  type: 'continuous',
                  seriesIndex: 0,
                  text: ['bar3D'],
                  calculable: true,
                  max: 300,
                  inRange: {
                    color: ['red']
                  }
                },
                {
                  show: false,
                  type: 'continuous',
                  seriesIndex: 1,
                  text: ['scatter3D'],
                  left: 'right',
                  max: 100,
                  calculable: true,
                  inRange: {
                    color: ['#000', 'blue', 'purple']
                  }
                }
              ],
              geo3D: {
                map: 'china',
                label: {
                  show: false,
                  textStyle: {
                    color: "#fff", // 地图初始化区域字体颜色
                    fontSize: 12, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: "rgba(0,23,11,0)" // 字体背景色
                  }
                },
                itemStyle: {
                  areaColor: "#136ac8",
                  color: "rgb(0,13,48)",
                  opacity: 1,
                  borderWidth: 1,
                  borderColor: "#0ff"
                },
                emphasis: {
                  label: {
                    show: false
                  },
                  itemStyle: {
                    areaColor: "blue",
                    color: '#000',
                  }
                },
                viewControl: {
                  autoRotate: false,
                  autoRotateSpeed: 6,
                  minBeta: -360,
                  maxBeta: 360,
                  distance: 98,
                  alpha: 50,
                  beta: 10,
                  zoomSensitivity: 0,//是否缩放
                }
              },
              series: [
                {
                  name: 'bar3D',
                  type: "bar3D",
                  coordinateSystem: 'geo3D',
                  barSize: 1, //柱子粗细
                  shading: 'lambert',
                  opacity: 1,
                  bevelSize: 0.3,
                  label: {
                    show: false,
                    formatter: '{b}'
                  },
                  data: data,
                },
              ]
            };
            let show = echarts.init(document.getElementById('map'));
            show.clear();
            show.setOption(option);
            show.setOption({textStyle: {color: '#fff'}});
        }).catch(() => {
          this.$Message.error('请求失败!');
        });
      }
    },
  }
</script>

<style scoped lang="less">
.item{
  box-shadow: 0 0 10px #0ff inset;
  padding: 10px;
  margin:0 auto;
  width: 800px;
  height: 600px
}
</style>
