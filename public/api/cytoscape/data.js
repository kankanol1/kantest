/**
 * Created by kankan on 2019-10-16.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
const fs = require('fs');

// map
fs.readFile('./data.json', function (err, data) {
  // eslint-disable-next-line no-console
  err && console.log(err);
  let allData = data.toString();
  allData = JSON.parse(allData);
  allData.data.nodes = [
    {data: {id: '0', name: '重要人员',}},

    {data: {id: 'w', name: '一级联系人',}},
    {data: {id: 'w1', name: '二级联系人',}},
    {data: {id: 'w2', name: '二级联系人',}},
    {data: {id: 'w3', name: '二级联系人',}},

    {data: {id: 'm', name: '一级联系人',}},
    {data: {id: 'm1', name: '二级联系人',}},
    {data: {id: 'm2', name: '二级联系人',}},
    {data: {id: 'm3', name: '二级联系人',}},
    {data: {id: 'm4', name: '二级联系人',}},
    {data: {id: 'm5', name: '二级联系人',}},

    {data: {id: 'h', name: '一级联系人',}},
    {data: {id: 'h1', name: '二级联系人',}},
    {data: {id: 'h2', name: '二级联系人',}},
    {data: {id: 'h3', name: '二级联系人',}},
    {data: {id: 'h4', name: '二级联系人',}},
    {data: {id: 'h5', name: '二级联系人',}},
    {data: {id: 'h6', name: '二级联系人',}},
    {data: {id: 'h7', name: '二级联系人',}},
    {data: {id: 't', name: '一级联系人',}},
    {data: {id: 't1', name: '二级联系人',}},
    {data: {id: 't2', name: '二级联系人',}},
    {data: {id: 't3', name: '二级联系人',}},
    {data: {id: 't4', name: '二级联系人',}},
    {data: {id: 't5', name: '二级联系人',}},
    {data: {id: 't6', name: '二级联系人',}},
    {data: {id: 't7', name: '二级联系人',}},
  ];
  allData.data.links = [];
  allData.data.links.push(
    ...[
      {data:
          {
            name: '重要人员-一级联系人',
            id: '0-w', source: '0', target: 'w',
            num:Math.round(Math.random()*10)+10,
          info:[
            {date:new Date().getTime(),time:Math.random()*100}
          ],}},
      {data:
          {
            name: '重要人员-一级联系人', id: '0-m', source: '0', target: 'm',
            num:Math.round(Math.random()*10)+10,
            info:[
              {date:new Date().getTime(),time:Math.random()*100}
            ],
          }},
      {data:
          {
            name: '重要人员-一级联系人', id: '0-h', source: '0', target: 'h',
            num:Math.round(Math.random()*10)+10,
            info:[
              {date:new Date().getTime(),time:Math.random()*100}
            ],
          }},
      {data:
          {
            name: '重要人员-一级联系人', id: '0-t', source: '0', target: 't',
            num:Math.round(Math.random()*10)+10,
            info:[
              {date:new Date().getTime(),time:Math.random()*100}
            ],
          }},
    ]
  );
  for (let i = 2; i < 5; i++) {
    allData.data.links.push(
      {data: {
        name: '一级联系人-'+allData.data.nodes[i].data.name,
          id: 'w-'+allData.data.nodes[i].data.id,
          source: 'w',
          target: allData.data.nodes[i].data.id,
          num:Math.round(Math.random()*10)+10,
          info:[
            {date:new Date().getTime(),time:Math.random()*100}
          ],
        },

      }
    )
  }

  for (let i = 6; i < 11; i++) {
    allData.data.links.push(
      {data: {
          name: '一级联系人-'+allData.data.nodes[i].data.name,
          id: 'm-'+allData.data.nodes[i].data.id,
          source: 'm',
          target: allData.data.nodes[i].data.id,
          num:Math.round(Math.random()*10)+10,
          info:[
            {date:new Date().getTime(),time:Math.random()*100}
          ],
        }}
    )
  }
  for (let i = 12; i < 19; i++) {
    allData.data.links.push(
      {data: {
          name: '一级联系人-'+allData.data.nodes[i].data.name,
          id: 'h-'+allData.data.nodes[i].data.id,
          source: 'h',
          target: allData.data.nodes[i].data.id,
          num:Math.round(Math.random()*10)+10,
          info:[
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
            {date:new Date().getTime(),time:Math.random()*100},
          ],
        }}
    )
  }
  for (let i = 21; i < 27; i++) {
    allData.data.links.push(
      {data: {
          name: '一级联系人-'+allData.data.nodes[i].data.name,
          id: 't-'+allData.data.nodes[i].data.id,
          source: 't',
          target: allData.data.nodes[i].data.id,
          num:Math.round(Math.random()*10)+10,
          info:[
            {date:new Date().getTime(),time:Math.random()*100}
          ],
        }}
    )
  }


  allData.total = allData.data.length;
  let s = JSON.stringify(allData);
  // eslint-disable-next-line no-console
  fs.writeFile('./data.json', s, err => console.log(err ? 'err' : 'success'))

});
