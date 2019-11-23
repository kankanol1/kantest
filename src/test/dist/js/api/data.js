/**
 * Created by kankan on 2019-09-27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
const fs = require('fs');


// 联系人数据
fs.readFile('./graph/connect.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  let allData = data.toString();//将二进制的数据转换为字符串
  allData = JSON.parse(allData);//将字符串转换为json对象
  const address = {
    'dy': ['东营区', '河口区', '垦利区', '广饶县', '利津县']
  };
  const warnType = ['重点人员预警', '重点车辆预警', '特定区域预警',
    '异常开关机预警', '非法入侵预警', '异常滞留预警', '关键词预警', '意图感知预警',
  ];
  const education = ['无', '小学', '初中', '高中', '本科', '硕士', '其他'];

  allData.data = [];

  let a = {
    name: '王忠旺',
    tel: '13963354222',
    time: '2019-04-23',
    connectNum: Math.round(Math.random() * 10 + 5),
    other: '重要人员',
    value: 85,
    alarmInfo: [
      {
        type: '非法入侵预警',
        position: '(37.85323,119.05111)',
        time: '2019-04-28'
      },
      {
        type: '特定区域预警',
        position: '(37.756589,119.162953)',
        time: '2019-04-26'
      },
      {
        type: '异常开关机预警',
        position: '(37.762660,119.154670)',
        time: '2019-04-25'
      },
      {
        type: '异常滞留预警',
        position: '(37.756589,119.162953)',
        time: '2019-04-20'
      },
      {
        type: '特定区域预警',
        position: '(37.751123,119.162953)',
        time: '2019-04-20'
      },
    ],
    address: '山东省东营市' + address.dy[Math.round(Math.random() * (address.dy.length - 1))],
    info: '370522198507170419',
    member: '初中',
    type: '无',
    num: 5,
    percent: '85',
    columns1: [
      {title: '重点人员预警', key: 'type1', value: 0},
      {title: '重点车辆预警', key: 'type2', value: 0},
      {title: '特定区域预警', key: 'type3', value: 20},
      {title: '异常开关机预警', key: 'type4', value: 15},
      {title: '非法入侵预警', key: 'type5', value: 20},
      {title: '异常滞留预警', key: 'type6', value: 20},
      {title: '关键词预警', key: 'type7', value: 0},
      {title: '意图感知预警', key: 'type7', value: 0},
      {title: '学历', key: 'type8', value: 10},
      {title: '前科信息', key: 'type9', value: 0},
      {title: '亲属前科信息', key: 'type10', value: 0},
      {title: '外地人员', key: 'type11', value: 0},
      {title: '重点人员', key: 'type12', value: 0},
    ],
  };
  // let a={name:'王忠旺',tel:'13963354222',num:Math.round(Math.random()*10+5),other:'重要人员'};

  allData.data.push(a);
  const firstName = [ // 部分单姓 百家姓
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王',
    '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨',
    '朱', '秦', '尤', '许', '何', '吕', '施', '张',
    '孔', '曹', '严', '华', '金', '魏', '陶', '姜',
    '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
    '云', '苏', '潘', '葛', '奚', '范', '彭', '郎',
    '鲁', '韦', '昌', '马', '苗', '凤', '花', '方',
    '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐',
    '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤',
  ];
  const secondName = [ // 部分复姓
    '诸葛', '上官', '独孤', '南宫', '欧阳', '太史',
    '公孙', '东郭', '南郭', '司徒', '司马', '西门',
    '单于', '纳兰', '慕容', '完颜', '宇文', '令狐',
  ];
  let tel = [153, 183, 132, 158, 179, 168, 152, 150, 187];
  const str = [
    '晏', '海', '清', '马', '靖', '怡', '姚', '威', '锣', '豪',
    '晓', '泽', '秋', '叶', '炘', '欣', '梓', '瀚', '雅', '琪',
    '宗', '浩', '若', '瑜', '佩', '晨', '艺', '康', '梓', '妍',
    '小', '宁', '钰', '益', '伊', '瑾', '思', '潼', '翔', '栩',
    '艾', '宁', '骁', '峡', '琛', '阳', '沙', '溢', '佳', '宜',
    '广', '允', '温', '升', '梓', '腾', '思', '璇', '梓', '睿',
    '浩', '楠', '硕', '晨', '妍', '慈', '明', '活', '楷', '果',
    '弈', '泓', '梓', '凯', '张', '科', '紫', '柃', '瑞', '阳',
    '弈', '橙', '逸', '菲', '一', '贤', '玉', '僧', '炜', '铭',
    '凌', '榕', '君', '楠', '昱', '灵', '舒', '卿', '小', '艺',
    '雨', '谣', '星', '峂', '宜', '涵', '凯', '心', '苏', '宸',
    '思', '颖', '韫', '玉', '明', '星', '俊', '剀', '湫', '函',
  ];
  const num = 199;
  for (let i = 0; i < num; i++) {
    let n = 0;
    let name =
      ((Math.random() > 0.01
          ? firstName[Math.round((Math.random() * (firstName.length - 1)))]
          : secondName[Math.round((Math.random() * (secondName.length - 1)))]
        ) +
        str[Math.round((Math.random() * (str.length - 1)))] +
        (Math.random() > 0.2
          ? str[Math.round((Math.random() * (str.length - 1)))]
          : ''));
    let telNum = tel[Math.round(Math.random() * (tel.length - 1))].toString()
      + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString()
      + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString();

    let alarmItems = [];
    let columns1 = [
      {title: '重点人员预警', value: 0},
      {title: '重点车辆预警', value: 0},
      {title: '特定区域预警', value: 0},
      {title: '异常开关机预警', value: 0},
      {title: '非法入侵预警', value: 0},
      {title: '异常滞留预警', value: 0},
      {title: '关键词预警', value: 0},
      {title: '学历', value: Math.round(Math.random() * 8)},
      {title: '前科信息', value: Math.round(Math.random() * 8)},
      {title: '亲属前科信息', value: Math.round(Math.random() * 8)},
      {title: '外地人员', value: Math.round(Math.random() * 8)},
      {title: '重点人员', value: Math.round(Math.random() * 8)},
    ];
    let len = Math.round(Math.random() * 4) + 1;
    for (let j = 0; j < len; j++) {
      let mouth = new Date().getMonth() - Math.round(Math.random() * (new Date().getMonth() / 2));
      mouth = mouth.toString().length > 1 ? mouth : ("0" + mouth);
      let day = new Date().getDate() - Math.round(Math.random() * (new Date().getDate() / 2));
      day = day.toString().length > 1 ? day : ("0" + day);
      let rand = Math.round(Math.random() * (warnType.length - 1));
      columns1[rand].value = 8 + Math.round(Math.random() * 10);
      n = n + columns1[rand].value;
      alarmItems.push({
        type: warnType[rand],
        position: '(37.74' + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString()
          + ',119.15' + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString() + ')',
        time: '2019-' + mouth + '-' + day,
      });
    }

    let mouth = new Date().getMonth() - Math.round(Math.random() * 4);
    mouth = mouth.toString().length > 1 ? mouth : ("0" + mouth);
    let day = new Date().getDay() - Math.round(Math.random() * (new Date().getDay() / 2));
    day = day.toString().length > 1 ? day : ("0" + day);

    let b = {
      name: name,
      tel: telNum,
      connectNum: Math.round(Math.random() * 10 + 5),
      other: Math.random() > 0.7 ? "一级联系人" : '二级联系人',

      time: '2019-' + mouth + '-' + day,
      alarmInfo: alarmItems,
      address: '山东省东营市' + address.dy[Math.round(Math.random() * (address.dy.length - 1))],
      info: '37052219' + (50 + Math.round(Math.random() * 70))
        + '0' + (Math.round((Math.random() * 9) + 1))
        + (10 + Math.round(Math.random() * 18))
        + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString(),
      member: education[Math.round(Math.random() * (education.length - 1))],
      num: alarmItems.length,
      percent: n,
      value: n,
      columns1: columns1,
    };
    allData.data.push(b);
  }


  allData.total = allData.data.length;//定义一下总条数，为以后的分页打基础
  let s = JSON.stringify(allData);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  fs.writeFile('./graph/connect.json', s, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('success');

  })
});

// 节点数据
fs.readFile('./graph/data.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  let allData = data.toString();//将二进制的数据转换为字符串
  allData = JSON.parse(allData);//将字符串转换为json对象

  let nodes = [];
  let links = [];

  nodes.push({
    name: '重要人员', category: 0
  });
  for (let i = 1; i < 10; i++) {
    nodes.push({
      name: '联系人' + i,
      category: 0
    });
    links.push({
      source: '重要人员',
      target: '联系人' + i,
    });

    for (let j = 1; j < 8; j++) {
      nodes.push({
        name: '联系人' + i + '-' + j,
        category: i,
      });
      links.push({
        source: '联系人' + i,
        target: '联系人' + i + '-' + j,
      })
    }

  }
  allData.data.nodes = nodes;
  allData.data.links = links;

  // console.log(allData);
  allData.total = allData.data.length;//定义一下总条数，为以后的分页打基础
  let s = JSON.stringify(allData);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  fs.writeFile('./graph/data.json', s, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('success');
  })
});

// 犯罪得分数据
fs.readFile('./crime/data.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  let allData = data.toString();//将二进制的数据转换为字符串
  allData = JSON.parse(allData);//将字符串转换为json对象
  const address = {
    'dy': ['东营区', '河口区', '垦利区', '广饶县', '利津县']
  };
  const warnType = ['重点人员预警', '重点车辆预警', '特定区域预警',
    '异常开关机预警', '非法入侵预警', '异常滞留预警', '关键词预警', '意图感知预警',
  ];
  const education = ['无', '小学', '初中', '高中', '本科', '硕士', '其他'];


  let a = {
    name: '王忠旺',
    tel: '13963354222',
    time: '2019-04-23',
    value: 85,
    alarmInfo: [
      {
        type: '非法入侵预警',
        position: '(37.85323,119.05111)',
        time: '2019-04-28'
      },
      {
        type: '特定区域预警',
        position: '(37.756589,119.162953)',
        time: '2019-04-26'
      },
      {
        type: '异常开关机预警',
        position: '(37.762660,119.154670)',
        time: '2019-04-25'
      },
      {
        type: '异常滞留预警',
        position: '(37.756589,119.162953)',
        time: '2019-04-20'
      },
      {
        type: '特定区域预警',
        position: '(37.751123,119.162953)',
        time: '2019-04-20'
      },
    ],
    address: '山东省东营市' + address.dy[Math.round(Math.random() * (address.dy.length - 1))],
    info: '370522198507170419',
    member: '初中',
    type: '无',
    num: 5,
    percent: '85',
    columns1: [
      {title: '重点人员预警', key: 'type1', value: 0},
      {title: '重点车辆预警', key: 'type2', value: 0},
      {title: '特定区域预警', key: 'type3', value: 20},
      {title: '异常开关机预警', key: 'type4', value: 15},
      {title: '非法入侵预警', key: 'type5', value: 20},
      {title: '异常滞留预警', key: 'type6', value: 20},
      {title: '关键词预警', key: 'type7', value: 0},
      {title: '意图感知预警', key: 'type7', value: 0},
      {title: '学历', key: 'type8', value: 10},
      {title: '前科信息', key: 'type9', value: 0},
      {title: '亲属前科信息', key: 'type10', value: 0},
      {title: '外地人员', key: 'type11', value: 0},
      {title: '重点人员', key: 'type12', value: 0},
    ],
  };

  allData.data = [];
  allData.data.push(a);
  const firstName = [ // 部分单姓 百家姓
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王',
    '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨',
    '朱', '秦', '尤', '许', '何', '吕', '施', '张',
    '孔', '曹', '严', '华', '金', '魏', '陶', '姜',
    '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
    '云', '苏', '潘', '葛', '奚', '范', '彭', '郎',
    '鲁', '韦', '昌', '马', '苗', '凤', '花', '方',
    '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐',
    '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤',
  ];
  const secondName = [ // 部分复姓
    '诸葛', '上官', '独孤', '南宫', '欧阳', '太史',
    '公孙', '东郭', '南郭', '司徒', '司马', '西门',
    '单于', '纳兰', '慕容', '完颜', '宇文', '令狐',
  ];
  let tel = [153, 183, 132, 158, 179, 168, 152, 150, 187];
  const str = [
    '晏', '海', '清', '马', '靖', '怡', '姚', '威', '锣', '豪',
    '晓', '泽', '秋', '叶', '炘', '欣', '梓', '瀚', '雅', '琪',
    '宗', '浩', '若', '瑜', '佩', '晨', '艺', '康', '梓', '妍',
    '小', '宁', '钰', '益', '伊', '瑾', '思', '潼', '翔', '栩',
    '艾', '宁', '骁', '峡', '琛', '阳', '沙', '溢', '佳', '宜',
    '广', '允', '温', '升', '梓', '腾', '思', '璇', '梓', '睿',
    '浩', '楠', '硕', '晨', '妍', '慈', '明', '活', '楷', '果',
    '弈', '泓', '梓', '凯', '张', '科', '紫', '柃', '瑞', '阳',
    '弈', '橙', '逸', '菲', '一', '贤', '玉', '僧', '炜', '铭',
    '凌', '榕', '君', '楠', '昱', '灵', '舒', '卿', '小', '艺',
    '雨', '谣', '星', '峂', '宜', '涵', '凯', '心', '苏', '宸',
    '思', '颖', '韫', '玉', '明', '星', '俊', '剀', '湫', '函',
  ];
  const num = 299;
  for (let i = 0; i < num; i++) {
    let n = 0;
    let name =
      ((Math.random() > 0.01
          ? firstName[Math.round((Math.random() * (firstName.length - 1)))]
          : secondName[Math.round((Math.random() * (secondName.length - 1)))]
        ) +
        str[Math.round((Math.random() * (str.length - 1)))] +
        (Math.random() > 0.2
          ? str[Math.round((Math.random() * (str.length - 1)))]
          : ''));
    let telNum = tel[Math.round(Math.random() * (tel.length - 1))].toString()
      + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString()
      + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString();

    let alarmItems = [];
    let columns1 = [
      {title: '重点人员预警', value: 0},
      {title: '重点车辆预警', value: 0},
      {title: '特定区域预警', value: 0},
      {title: '异常开关机预警', value: 0},
      {title: '非法入侵预警', value: 0},
      {title: '异常滞留预警', value: 0},
      {title: '关键词预警', value: 0},
      {title: '学历', value: Math.round(Math.random() * 8)},
      {title: '前科信息', value: Math.round(Math.random() * 8)},
      {title: '亲属前科信息', value: Math.round(Math.random() * 8)},
      {title: '外地人员', value: Math.round(Math.random() * 8)},
      {title: '重点人员', value: Math.round(Math.random() * 8)},
    ];
    let len = Math.round(Math.random() * 4) + 1;
    for (let j = 0; j < len; j++) {
      let mouth = new Date().getMonth() - Math.round(Math.random() * (new Date().getMonth() / 2));
      mouth = mouth.toString().length > 1 ? mouth : ("0" + mouth);
      let day = new Date().getDate() - Math.round(Math.random() * (new Date().getDate() / 2));
      day = day.toString().length > 1 ? day : ("0" + day);
      let rand = Math.round(Math.random() * (warnType.length - 1));
      columns1[rand].value = 8 + Math.round(Math.random() * 10);
      n = n + columns1[rand].value;
      alarmItems.push({
        type: warnType[rand],
        position: '(37.74' + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString()
          + ',119.15' + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString() + ')',
        time: '2019-' + mouth + '-' + day,
      });
    }

    let mouth = new Date().getMonth() - Math.round(Math.random() * 4);
    mouth = mouth.toString().length > 1 ? mouth : ("0" + mouth);
    let day = new Date().getDay() - Math.round(Math.random() * (new Date().getDay() / 2));
    day = day.toString().length > 1 ? day : ("0" + day);

    let b = {
      name: name,
      tel: telNum,
      time: '2019-' + mouth + '-' + day,
      alarmInfo: alarmItems,
      address: '山东省东营市' + address.dy[Math.round(Math.random() * (address.dy.length - 1))],

      info: '37052219' + (50 + Math.round(Math.random() * 70))
        + '0' + (Math.round((Math.random() * 9) + 1))
        + (10 + Math.round(Math.random() * 18))
        + (Math.round(Math.random() * (9999 - 1234)) + 1234).toString(),
      member: education[Math.round(Math.random() * (education.length - 1))],
      type: Math.random() > 0.2 ? "无" : "有",
      num: alarmItems.length,
      percent: n,
      value: n,
      columns1: columns1,
    };
    allData.data.push(b);
  }
  allData.total = allData.data.length;//定义一下总条数，为以后的分页打基础
  let s = JSON.stringify(allData);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  fs.writeFile('./crime/data.json', s, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('success');

  })
});

// 数据统计数据
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
fs.readFile('./datashow/data.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  let allData = data.toString();//将二进制的数据转换为字符串
  allData = JSON.parse(allData);//将字符串转换为json对象

  let date = new Date().format('yyyyMMdd');
  allData.data.distinct = allData.data.distinct.map((item, k) => {
    allData.data.locas = allData.data.locas.map(i => {
      // console.log(i["日期"] ,item.riqi);
      if (i["日期"] === item.riqi) {
        return {
          "日期": (parseInt(date) - k).toString(),
          "归属地区号": i["归属地区号"],
          "归属地名称": i["归属地名称"],
          "统计人数": i["统计人数"],
        }
      } else {
        return i;
      }
    });
    return {
      "riqi": (parseInt(date) - k).toString(),
      "all": item.all,
      "distinct_all": item.distinct_all,
    }
  });

/*
  for (let i = 3; i < 6; i++) {
    let a = allData.data.locas.filter(item => item['日期'] === "2019100" + (i + 3));
    a = a.map(item => {
      return {
        "日期": "2019100" + i,
        "归属地区号": item["归属地区号"],
        "归属地名称": item["归属地名称"],
        "统计人数": item["统计人数"],
      }
    });
    for (let j = 0; j < a.length; j++) {
      allData.data.locas.push(a[j]);
    }
  }
*/


  const response = {
    "status": 30001, "msg": "查询成功!", "data": {
      "distinct": [
        {"riqi": "20191001", "all": "29534", "distinct_all": "7638"},
        {"riqi": "20191002", "all": "70896", "distinct_all": "17768"},
        {"riqi": "20191003", "all": "81431", "distinct_all": "20194"},
        {"riqi": "20191004", "all": "38769", "distinct_all": "11076"},
      ],
      "locas":
        [
          {"日期": "20191002", "归属地区号": "635", "归属地名称": "聊城市", "统计人数": "201"},
          {
            "日期": "20191003",
            "归属地区号": "635",
            "归属地名称": "聊城市",
            "统计人数": "197"
          },
          {"日期": "20191004", "归属地区号": "635", "归属地名称": "聊城市", "统计人数": "135"}, {
          "日期": "20191001",
          "归属地区号": "635",
          "归属地名称": "聊城市",
          "统计人数": "102"
        }, {"日期": "20191004", "归属地区号": "543", "归属地名称": "滨州", "统计人数": "252"}, {
          "日期": "20191001",
          "归属地区号": "543",
          "归属地名称": "滨州",
          "统计人数": "287"
        }, {"日期": "20191002", "归属地区号": "543", "归属地名称": "滨州", "统计人数": "711"}, {
          "日期": "20191003",
          "归属地区号": "543",
          "归属地名称": "滨州",
          "统计人数": "666"
        }, {"日期": "20191003", "归属地区号": "534", "归属地名称": "德州", "统计人数": "458"}, {
          "日期": "20191002",
          "归属地区号": "534",
          "归属地名称": "德州",
          "统计人数": "363"
        }, {"日期": "20191004", "归属地区号": "534", "归属地名称": "德州", "统计人数": "193"}, {
          "日期": "20191001",
          "归属地区号": "534",
          "归属地名称": "德州",
          "统计人数": "152"
        }, {"日期": "20191002", "归属地区号": "22", "归属地名称": "天津", "统计人数": "357"}, {
          "日期": "20191003",
          "归属地区号": "22",
          "归属地名称": "天津",
          "统计人数": "540"
        }, {"日期": "20191004", "归属地区号": "22", "归属地名称": "天津", "统计人数": "321"}, {
          "日期": "20191001",
          "归属地区号": "22",
          "归属地名称": "天津",
          "统计人数": "160"
        }, {"日期": "20191004", "归属地区号": "539", "归属地名称": "临沂", "统计人数": "127"}, {
          "日期": "20191001",
          "归属地区号": "539",
          "归属地名称": "临沂",
          "统计人数": "75"
        }, {"日期": "20191003", "归属地区号": "535", "归属地名称": "烟台", "统计人数": "251"}, {
          "日期": "20191002",
          "归属地区号": "535",
          "归属地名称": "烟台",
          "统计人数": "347"
        }, {"日期": "20191004", "归属地区号": "535", "归属地名称": "烟台", "统计人数": "201"}, {
          "日期": "20191001",
          "归属地区号": "535",
          "归属地名称": "烟台",
          "统计人数": "87"
        }, {"日期": "20191002", "归属地区号": "533", "归属地名称": "淄博", "统计人数": "1434"}, {
          "日期": "20191003",
          "归属地区号": "533",
          "归属地名称": "淄博",
          "统计人数": "1258"
        }, {"日期": "20191004", "归属地区号": "533", "归属地名称": "淄博", "统计人数": "627"}, {
          "日期": "20191001",
          "归属地区号": "533",
          "归属地名称": "淄博",
          "统计人数": "526"
        }, {"日期": "20191004", "归属地区号": "531", "归属地名称": "济南", "统计人数": "1090"}, {
          "日期": "20191001",
          "归属地区号": "531",
          "归属地名称": "济南",
          "统计人数": "505"
        }, {"日期": "20191002", "归属地区号": "531", "归属地名称": "济南", "统计人数": "1985"}, {
          "日期": "20191003",
          "归属地区号": "531",
          "归属地名称": "济南",
          "统计人数": "2297"
        }, {"日期": "20191003", "归属地区号": "536", "归属地名称": "潍坊", "统计人数": "782"}, {
          "日期": "20191002",
          "归属地区号": "536",
          "归属地名称": "潍坊",
          "统计人数": "754"
        }, {"日期": "20191004", "归属地区号": "536", "归属地名称": "潍坊", "统计人数": "468"}, {
          "日期": "20191001",
          "归属地区号": "536",
          "归属地名称": "潍坊",
          "统计人数": "307"
        }, {"日期": "20191002", "归属地区号": "538", "归属地名称": "泰安", "统计人数": "172"}, {
          "日期": "20191003",
          "归属地区号": "538",
          "归属地名称": "泰安",
          "统计人数": "220"
        }, {"日期": "20191004", "归属地区号": "10", "归属地名称": "北京", "统计人数": "1504"}, {
          "日期": "20191001",
          "归属地区号": "10",
          "归属地名称": "北京",
          "统计人数": "1177"
        }, {"日期": "20191002", "归属地区号": "10", "归属地名称": "北京", "统计人数": "2016"}, {
          "日期": "20191003",
          "归属地区号": "10",
          "归属地名称": "北京",
          "统计人数": "2299"
        }, {"日期": "20191003", "归属地区号": "546", "归属地名称": "东营", "统计人数": "3338"}, {
          "日期": "20191002",
          "归属地区号": "546",
          "归属地名称": "东营",
          "统计人数": "2794"
        }, {"日期": "20191004", "归属地区号": "546", "归属地名称": "东营", "统计人数": "1533"}, {
          "日期": "20191001",
          "归属地区号": "546",
          "归属地名称": "东营",
          "统计人数": "1463"
        }, {"日期": "20191002", "归属地区号": "312", "归属地名称": "保定", "统计人数": "164"}, {
          "日期": "20191003",
          "归属地区号": "312",
          "归属地名称": "保定",
          "统计人数": "175"
        }, {"日期": "20191004", "归属地区号": "312", "归属地名称": "保定", "统计人数": "124"}, {
          "日期": "20191001",
          "归属地区号": "312",
          "归属地名称": "保定",
          "统计人数": "53"
        }, {"日期": "20191004", "归属地区号": "460", "归属地名称": "未识别", "统计人数": "1420"}, {
          "日期": "20191001",
          "归属地区号": "460",
          "归属地名称": "未识别",
          "统计人数": "1048"
        }, {"日期": "20191002", "归属地区号": "460", "归属地名称": "未识别", "统计人数": "2464"}, {
          "日期": "20191003",
          "归属地区号": "460",
          "归属地名称": "未识别",
          "统计人数": "2747"
        }, {"日期": "20191003", "归属地区号": "311", "归属地名称": "石家庄", "统计人数": "262"}, {
          "日期": "20191002",
          "归属地区号": "311",
          "归属地名称": "石家庄",
          "统计人数": "193"
        }, {"日期": "20191004", "归属地区号": "311", "归属地名称": "石家庄", "统计人数": "221"}, {
          "日期": "20191001",
          "归属地区号": "311",
          "归属地名称": "石家庄",
          "统计人数": "53"
        }, {"日期": "20191002", "归属地区号": "532", "归属地名称": "青岛", "统计人数": "821"}, {
          "日期": "20191003",
          "归属地区号": "532",
          "归属地名称": "青岛",
          "统计人数": "1180"
        }, {"日期": "20191004", "归属地区号": "532", "归属地名称": "青岛", "统计人数": "588"}, {
          "日期": "20191001",
          "归属地区号": "532",
          "归属地名称": "青岛",
          "统计人数": "243"
        }]
    }
  };
  // console.log(response);


  allData.total = allData.data.length;//定义一下总条数，为以后的分页打基础
  let s = JSON.stringify(allData);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  fs.writeFile('./datashow/data.json', s, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('success');

  })
});
