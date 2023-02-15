import type { EChartsOption } from 'echarts'
import { nanoid } from 'nanoid'

const chartColors = [
  '#2ec7c9',
  '#b6a2de',
  '#5ab1ef',
  '#ffb980',
  '#d87a80',
  '#8d98b3',
  '#e5cf0d',
  '#97b552',
  '#95706d',
  '#dc69aa',
  '#07a2a4',
  '#9a7fd1',
  '#588dd5',
  '#f5994e',
  '#c05050',
  '#59678c',
  '#c9ab00',
  '#7eb00a',
  '#6f5553',
  '#c14089'
]

export const chart1Option: EChartsOption = {
  color: chartColors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  grid: {
    top: 40,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value + ' ml'
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Precipitation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value + ' ml'
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value: any) {
          return value + ' °C'
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
}

export const chart2Option: EChartsOption = {
  color: chartColors,
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  },
  radar: {
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
}

export const chart3Option: EChartsOption = {
  color: chartColors,
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  },
  legend: {
    top: 'bottom'
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 120],
      center: ['50%', '38%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' }
      ]
    }
  ]
}

export const chart4Option: EChartsOption = {
  color: chartColors,
  grid: {
    top: 10,
    bottom: 0,
    left: 0,
    right: 0,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        data: [[{ type: 'min' }, { type: 'max' }]]
      }
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [62, 82, 91, 84, 109, 110, 120]
    }
  ]
}

export const tableData = [
  {
    orderNo: 'Ac3B566d-Ac9A-8b75-DAe9-aC2964',
    price: 14347.5,
    status: 0
  },
  {
    orderNo: 'b4e3cD9c-3dE7-f46E-FF7E-D9cEDc',
    price: 6469.8,
    status: 0
  },
  {
    orderNo: 'cc58cC49-f83E-e68c-6d9e-Ae946C',
    price: 11588.1,
    status: 0
  },
  {
    orderNo: '8FAe8d9f-8cDf-c38A-1A1a-b6cb1d',
    price: 2525.3,
    status: 0
  },
  {
    orderNo: 'Ddb60cc1-25DE-Ea8B-ceFb-b7fF7b',
    price: 12143.3,
    status: 0
  },
  {
    orderNo: 'D72B0Fcc-cf27-F1bE-0442-D1DDd2',
    price: 13244.58,
    status: 1
  },
  {
    orderNo: 'eCDe5BfF-6BED-F836-Af02-e2eCCc',
    price: 10257,
    status: 1
  },
  {
    orderNo: 'EC00EB39-BA76-CCD7-B1b1-e673B6',
    price: 2523.4,
    status: 1
  }
]

export const todolist = [
  {
    id: nanoid(),
    label: 'star this repository'
  },
  {
    id: nanoid(),
    label: 'fork this repository'
  },
  {
    id: nanoid(),
    label: 'follow author'
  },
  {
    id: nanoid(),
    label: 'vue-element-admin'
  },
  {
    id: nanoid(),
    label: 'vue'
  },
  {
    id: nanoid(),
    label: 'element-plus'
  },
  {
    id: nanoid(),
    label: 'axios'
  },
  {
    id: nanoid(),
    label: 'vite'
  }
]

export const technologyList = [
  {
    id: nanoid(),
    label: 'Vue',
    progress: 70
  },
  {
    id: nanoid(),
    label: 'JavaScript',
    progress: 18
  },
  {
    id: nanoid(),
    label: 'CSS',
    progress: 12
  },
  {
    id: nanoid(),
    label: 'ESLint',
    progress: 100
  }
]
