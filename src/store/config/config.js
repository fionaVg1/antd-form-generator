export const chartsComponents = [
  {
    name: '折线图',
    icon: 'icon-zhexiantu',
    layout: 'chart',
    e_config: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    },
    config: {
      label: '折线图',
      layoutTree: true,
      span: 12
    },
    type: 'line',
    justify: 'start',
    align: 'top'
  },
  {
    name: '饼状图',
    icon: 'icon-bingzhuangtu',
    layout: 'chart',
    e_config: {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    config: {
      label: '饼图',
      layoutTree: true,
      span: 12
    },
    type: 'pie',
    justify: 'start',
    align: 'top'
  },
  {
    name: '柱状图',
    icon: 'icon-cuzhuangzhuxingtu',
    layout: 'chart',
    e_config: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }
      ]
    },
    config: {
      label: '柱状图',
      layoutTree: true,
      span: 12
    },
    type: 'bar',
    justify: 'start',
    align: 'top'
  },
  {
    name: '散点图',
    icon: 'icon-dianzhuangtu',
    layout: 'chart',
    e_config: {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
          ],
          type: 'scatter'
        }
      ]
    },
    config: {
      label: '散点图',
      layoutTree: true,
      span: 12
    },
    type: 'scatter',
    justify: 'start',
    align: 'top'
  },
  {
    name: '雷达图',
    icon: 'icon-leidatu',
    layout: 'chart',
    e_config: {
      title: {
        text: '基础雷达图'
      },
      tooltip: {},
      legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '销售（sales）', max: 6500 },
          { name: '管理（Administration）', max: 16000 },
          { name: '信息技术（Information Techology）', max: 30000 },
          { name: '客服（Customer Support）', max: 38000 },
          { name: '研发（Development）', max: 52000 },
          { name: '市场（Marketing）', max: 25000 }
        ]
      },
      series: [
        {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }
      ]
    },
    config: {
      label: '雷达图',
      layoutTree: true,
      span: 12
    },
    type: 'radar',
    justify: 'start',
    align: 'top'
  }
];
export const inputComponents = [
  {
    layout:'colFormItem',
    name:'单行文本',    
    icon: 'icon-input',    
    config:{
      span: 12,
      tag:'a-input' ,
      showLabel:true,
      label:'单行文本'
    }
  },
  {
    layout: 'colFormItem',
    name: '多行文本',
    icon: 'icon-textarea',
    config: {
      span: 24,
      tag:'a-textarea',
      showLabel:true,
      label:'多行文本'
    }
  }
];

export const commonComponents = [
  {
    layout: 'colFormItem',
    name: '头像',
    icon: 'icon-avatar',
    config: {
      span: 12,
      shape: 'circle',
      size: 40,
      src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      tag: 'shr-avatar'
    },
    type: 'shr-avatar'
  },
  {
    layout: 'colFormItem',
    name: '时间轴',
    icon: 'icon-timeline',
    config: {
      span: 12,
      timeArr: [
        {
          id: 1,
          title: '2020-11-01',
          description: '时间轴示例1'
        },
        {
          id: 2,
          title: '2020-11-02',
          description: '时间轴示例2'
        },
        {
          id: 3,
          title: '2020-11-03',
          description: '时间轴示例3'
        }
      ],
      direction: 'vertical',
      tag: 'shr-timeline'
    },
    type: 'shr-timeline'
  },
  {
    layout: 'colFormItem',
    name: '文本',
    icon: 'icon-text',
    config: {
      span: 12,
      size: 18,
      color: 'red',
      weight: false,
      spacing: 'normal',
      decoration: 'none',
      tag: 'shr-text',
      required: 'false'
    },
    type: 'shr-text'
  },
  {
    layout: 'colFormItem',
    name: '进度条',
    icon: 'icon-progress',
    config: {
      span: 12,
      percent: 0,
      showInfo: true,
      status: 'normal',
      tag: 'shr-progress'
    },
    type: 'shr-progress'
  },
  {
    layout: 'colFormItem',
    name: '按钮',
    icon: 'icon-button',
    config: {
      span: 12,
      type: 'primary',
      textContent: '按钮',
      tag: 'shr-button'
    },
    type: 'shr-button'
  },
  {
    layout: 'colFormItem',
    name: '日历',
    icon: 'icon-calendar',
    config: {
      span: 12,
      tag: 'shr-calendar'
    },
    type: 'shr-calendar'
  },
  {
    layout: 'colFormItem',
    name: '下拉框',
    icon: 'icon-dropdown',
    config: {
      span: 12,
      placement: '下拉框',
      dropArr: ['下拉选项1', '下拉选项2', '下拉选项3'],
      tag: 'shr-dropdown'
    },
    type: 'shr-dropdown'
  },
  {
    layout: 'colFormItem',
    name: '树组件',
    icon: 'icon-tree',
    config: {
      span: 12,
      treeData: [
        {
          title: '树组件1',
          key: '0-0',
          children: [
            {
              title: '树组件1-0',
              key: '0-0-0',
              children: [
                {
                  title: '树组件1-0-0',
                  key: '0-0-0-0'
                },
                {
                  title: '树组件1-0-1',
                  key: '0-0-0-1'
                },
                {
                  title: '树组件1-0-2',
                  key: '0-0-0-2'
                }
              ]
            },
            {
              title: '树组件1-1',
              key: '0-0-1'
            },
            {
              title: '树组件1-2',
              key: '0-0-2'
            }
          ]
        }
      ],
      tag: 'shr-tree'
    },
    type: 'shr-tree'
  },
  {
    layout: 'colFormItem',
    name: '数字',
    icon: 'icon-number',
    config: {
      span: 12,
      size: 32,
      color: '#388cff',
      weight: false,
      spacing: 'normal',
      decoration: 'none',
      tag: 'shr-number',
      number: 100
    },
    type: 'shr-number'
  },
  {
    layout: 'colFormItem',
    name: '链接',
    icon: 'icon-link',
    config: {
      span: 12,
      size: 12,
      color: '#388cff',
      weight: false,
      spacing: 'normal',
      decoration: 'none',
      tag: 'shr-link'
    },
    type: 'shr-link'
  }
];
