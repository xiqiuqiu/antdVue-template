import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

export const constantRoutes = [{
  path: '/login',
  name: '',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '*',
  name: '404',
  component: () => import('@/views/Exception/404'),
  hidden: true
},
{
  path: '/',
  name: '首页',
  redirect: '/DashboardFourIndices',
  component: Layout,
  hidden: true
},
{
  path: '/Dashboard',
  component: Layout,
  name: '数据看板',
  redirect: '/DashboardFourIndices',
  meta: {
    title: '数据看板',
    icon: 'dashboard'
  },
  children: [{
    path: '/DashboardFourIndices',
    name: '四项指数',
    meta: {
      title: '四项指数',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardFourIndices')
  },
  {
    path: 'oneMap',
    name: '一张图',
    meta: {
      title: '一张图',
      icon: 'dashboard'
    },
    component: () => import('@/views/Dashboard/oneMap')
  },
  {
    path: '/DashboardAccident',
    name: '事故数据',
    meta: {
      title: '事故数据',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardAccident')
  },
  {
    path: '/DashboardDriver',
    name: '驾驶人数据',
    meta: {
      title: '驾驶人数据',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardDriver')
  },
  {
    path: '/DashboardCorporation',
    name: '企业数据',
    meta: {
      title: '企业数据',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardCorporation')
  },
  {
    path: '/DashboardVehicle',
    name: '车辆数据',
    meta: {
      title: '车辆数据',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardVehicle')
  },
  {
    path: '/DashboardViolation',
    name: '违法数据',
    meta: {
      title: '违法数据',
      icon: 'table'
    },
    component: () => import('@/views/Dashboard/DashboardViolation')
  }
  ]
},
{
  path: '/EarlyWarning',
  component: Layout,
  name: '预警中心',
  redirect: '/EarlyWarning/Rules',
  meta: {
    title: '预警中心',
    icon: 'alert'
  },
  children: [{
    path: 'Rules',
    name: '业务预警',
    component: () => import('@/views/EarlyWarning/Rules'),
    meta: {
      title: '业务预警',
      icon: 'form'
    }
  },
  {
    path: 'Prejudged',
    name: '预判预警',
    component: () => import('@/views/EarlyWarning/Prejudged'),
    meta: {
      title: '预判预警',
      icon: 'form'
    }
  },
  {
    path: 'Admin',
    name: '预警管理',
    component: () => import('@/views/EarlyWarning/Admin'),
    meta: {
      title: '预警管理',
      icon: 'form'
    }
  }
  ]
},

{
  path: '/RiskSupervision',
  component: Layout,
  name: '风险监管',
  redirect: '/RiskSupervision/Corporation',
  meta: {
    title: '风险监管',
    icon: 'heat-map'
  },
  children: [{
    path: 'Corporation',
    name: '企业风险',
    meta: {
      title: '企业风险',
      icon: 'user'
    },
    component: () => import('@/views/RiskSupervision/Corporation')
  },
  {
    path: 'Driver',
    name: '驾驶人风险',
    meta: {
      title: '驾驶人风险',
      icon: 'user'
    },
    component: () => import('@/views/RiskSupervision/Driver')
  },
  {
    path: 'Region',
    name: '区域风险',
    meta: {
      title: '区域风险',
      icon: 'user'
    },
    component: () => import('@/views/RiskSupervision/Region')
  },
  {
    path: 'Road',
    name: '道路风险',
    redirect: '/RiskSupervision/Road/sgdfdd',
    component: () => import('@/views/RiskSupervision/Road'),
    meta: {
      title: '道路风险',
      icon: 'user'
    },
    children: [{
      path: 'sgdfdd',
      name: '事故多发点段',
      component: () => import('@/views/RiskSupervision/Road/sgdfdd/index'),
      meta: {
        title: '事故多发点段'
      }
    },
    {
      path: 'wfdfdd',
      name: '违法多发点段',
      component: () => import('@/views/RiskSupervision/Road/wfdfdd/index'),
      meta: {
        title: '违法多发点段'
      }
    }
    ]
  },
  {
    path: 'Vehicle',
    name: '车辆风险',
    meta: {
      title: '车辆风险',
      icon: 'user'
    },
    component: () => import('@/views/RiskSupervision/Vehicle')
  }
  ]
},
{
  path: '/HazardAdmin',
  component: Layout,
  name: 'HazardAdmin',
  redirect: '/HazardAdmin/Evaluation',
  meta: {
    title: '隐患治理',
    icon: 'thunderbolt'
  },
  children: [{
    path: 'Evaluation',
    name: '隐患治理督办单',
    component: () => import('@/views/HazardAdmin/Evaluation'),
    meta: {
      title: '隐患治理督办单',
      icon: 'form'
    }
  },
  {
    path: 'Order',
    name: '治理效果评估',
    component: () => import('@/views/HazardAdmin/Order'),
    meta: {
      title: '治理效果评估',
      icon: 'form'
    }
  }
  ]
},
{
  path: '/Document',
  component: Layout,
  name: 'Document',
  redirect: '/Document/Report',
  meta: {
    title: '报表报告',
    icon: 'reconciliation'
  },
  children: [{
    path: 'Report',
    name: '研判报告',
    component: () => import('@/views/Document/Report'),
    meta: {
      title: '研判报告',
      icon: 'form'
    }
  },
  {
    path: 'Sheet',
    name: '报表报告',
    component: () => import('@/views/Document/Sheet'),
    meta: {
      title: '报表报告',
      icon: 'form'
    }
  }
  ]
},
{
  path: '/Statistics',
  component: Layout,
  name: '统计分析中心',
  redirect: '/Statistics/Accident',
  meta: {
    title: '统计分析中心',
    icon: 'radar-chart'
  },
  children: [{
    path: 'Accident',
    name: '事故统计分析',
    component: () => import('@/views/Statistics/Accident'),
    meta: {
      title: '事故统计分析',
      icon: 'form'
    }
  },
  {
    path: 'Violation',
    name: '违法统计分析',
    component: () => import('@/views/Statistics/Violation'),
    meta: {
      title: '违法统计分析',
      icon: 'form'
    }
  }
  ]
},
{
  path: '/DataAdmin',
  component: Layout,
  name: '数据管理',
  redirect: '/DataAdmin/RegionBorder',
  meta: {
    title: '数据管理',
    icon: 'control'
  },
  children: [{
    path: 'RegionBorder',
    name: '辖区边界',
    component: () => import('@/views/DataAdmin/RegionBorder/index'),
    meta: {
      title: '辖区边界',
      icon: 'control'
    }
  } 
  // {
  //   path: '',
  //   name: '辖区边界',
  //   component: () => import('@/views/DataAdmin/RegionBorder/index'),
  //   meta: {
  //     title: '辖区边界',
  //     icon: 'control'
  //   }
  // }
  ]
}

  // 备份多层级菜单
  // {
  //   path: 'menu2',
  //   name: 'Menu2',
  //   meta: { title: 'Menu2', icon: 'user', breadcrumb: false },
  //   component: () => import('@/views/menu/menu'),
  //   redirect: 'menu2/index',
  //   children: [
  //     {
  //       path: '',
  //       name: 'Menu2-1',
  //       component: () => import('@/views/menu/menu2'),
  //       meta: { title: 'Menu2-1' }
  //     }

  //   ]
  // }
]

// 解决面包屑重复点击路由导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
