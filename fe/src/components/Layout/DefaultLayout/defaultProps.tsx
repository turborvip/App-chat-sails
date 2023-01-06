import AntdIcon from "../../icons/AntdIcons"

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/welcome",
        name: "Welcome",
        icon: AntdIcon.SmileFilled,
      },
      {
        path: "/admin",
        name: "Admin",
        icon: AntdIcon.CrownFilled,
        access: "canAdmin",
        routes: [
          {
            path: "/admin/todo",
            name: "To Do",
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
          },
          {
            path: "/admin/sub-page2",
            name: "sub2",
            icon: AntdIcon.CrownFilled,
          },
          {
            path: "/admin/sub-page3",
            name: "sub3",
            icon: AntdIcon.CrownFilled,
          },
        ],
      },
      {
        path: "/chat",
        name: "Chat",
        icon: AntdIcon.MessageFilled ,
      },
      {
        name: "List",
        icon: AntdIcon.TabletFilled,
        path: "/list",
        routes: [
          {
            path: "/list/sub-page",
            name: "sub-list1",
            icon: AntdIcon.CrownFilled,
            routes: [
              {
                path: "sub-sub-page1",
                name: "sub-1",
                icon: AntdIcon.CrownFilled,
              },
              {
                path: "sub-sub-page2",
                name: "sub2",
                icon: AntdIcon.CrownFilled,
              },
              {
                path: "sub-sub-page3",
                name: "sub3",
                icon: AntdIcon.CrownFilled,
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "sub-list2",
            icon: AntdIcon.CrownFilled ,
          },
          {
            path: "/list/sub-page3",
            name: "sub-list3",
            icon: AntdIcon.CrownFilled,
          },
        ],
      },
      
    ],
  },
  location: {
    pathname: "/",
  },
  appList: [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "Ant Design",
      desc: "UI",
      url: "https://ant.design",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
      title: "AntV",
      desc: "Turborvip",
      url: "https://antv.vision/",
      target: "_blank",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
      title: "Pro Components",
      desc: "专业级 UI 组件库",
      url: "https://procomponents.ant.design/",
    },
    {
      icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
      title: "umi",
      desc: "插件化的企业级前端应用框架。",
      url: "https://umijs.org/zh-CN/docs",
    },

    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
      title: "qiankun",
      desc: "可能是你见过最完善的微前端解决方案🧐",
      url: "https://qiankun.umijs.org/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
      title: "语雀",
      desc: "知识创作与分享工具",
      url: "https://www.yuque.com/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
      title: "Kitchen ",
      desc: "Sketch 工具集",
      url: "https://kitchen.alipay.com/",
    },
    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
      title: "dumi",
      desc: "为组件开发场景而生的文档工具",
      url: "https://d.umijs.org/zh-CN",
    },
  ],
};
