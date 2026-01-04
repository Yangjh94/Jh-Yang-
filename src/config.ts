
// 个人网站配置文件
// 您可以在这里直接修改个人信息、知识库文章等内容

export const config = {
  // 网站基础信息
  site: {
    title: "JH YANG",
    footerText: "© 2026 JH YANG",
    footerSubtext: "Structural Engineering Research | 结构风工程",
  },

  // 导航菜单
  nav: [
    { label: "首页", href: "/" },
    { label: "应用程序", href: "/app" },
    { label: "知识库", href: "/knowledge" }, // 指向新的知识库页面
    { label: "联系我", href: "/contact" },
  ],

  // 首页 Hero 区域
  hero: {
    badge: "结构风工程研究",
    title: {
      line1: "高层建筑",
      highlight: "抗风与结构安全",
    },
    description: "专注于高层建筑抗风性能研究。\n结合风洞试验、有限元分析与频域计算，确保结构安全与舒适。",
    buttons: {
      primary: "启动计算器",
      secondary: "浏览知识库", // 修改文案
    },
  },

  // 关于我区域
  about: {
    title: "研究领域",
    description: "主要从事高层建筑风工程研究，致力于通过先进的实验与计算手段解决复杂的流固耦合问题。熟练运用 OpenSEESPy、SAP2000 等专业软件进行非线性结构分析与抗震/抗风设计。",
    features: [
      { title: "风洞试验", desc: "高频天平测力与测压" },
      { title: "有限元分析", desc: "OpenSEESPy / SAP2000" },
      { title: "频域计算", desc: "随机振动与风致响应" },
      { title: "结构优化", desc: "抗风设计与阻尼减振" },
    ],
  },

  // 知识库区域
  knowledgeBase: {
    title: "学术成果 & 知识库",
    description: "发表的学术论文与工程实践笔记。",
    viewAll: "Google Scholar 主页",
    viewAllLink: "https://scholar.google.com/citations?user=QQPVVXAAAAAJ&hl=zh-CN",
    readArticle: "阅读摘要",
    // 首页精选文章 (保留用于首页展示)
    articles: [
      { 
        id: 1, 
        title: "Wind-induced response analysis of super-tall buildings based on HFBB tests", 
        category: "SCI 论文", 
        date: "2024",
        summary: "基于高频天平(HFBB)试验的超高层建筑风致响应分析研究。" 
      },
      { 
        id: 2, 
        title: "Nonlinear seismic and wind performance assessment using OpenSEESPy", 
        category: "会议论文", 
        date: "2023",
        summary: "利用 OpenSEESPy 进行非线性地震与抗风性能评估的框架探讨。" 
      },
    ],
    // 知识库目录树结构 (用于 /knowledge 页面)
    // type: 'markdown' (在线渲染) | 'file' (下载/预览)
    tree: [
      {
        category: "概览",
        items: [
          { title: "欢迎访问", type: "markdown", path: "/docs/intro.md" },
        ]
      },
      {
        category: "研究笔记",
        items: [
          { title: "超高层风致响应", type: "markdown", path: "/docs/research.md" },
        ]
      },
      {
        category: "实验数据 & 附件",
        items: [
          { title: "推导过程 (PDF)", type: "file", path: "/docs/files/derivation.pdf" },
          { title: "演示文稿 (PPT)", type: "file", path: "/docs/files/presentation.pptx" },
        ]
      }
    ]
  },

  // 计算器应用
  calculator: {
    userLabel: "当前用户",
    logout: "退出",
    history: "计算历史",
    noHistory: "暂无计算记录",
    login: {
      title: "访问计算器",
      desc: "开放访问",
      username: "用户名",
      password: "密码",
      submit: "进入",
      back: "返回首页",
    }
  },

  // 联系方式
  contact: {
    title: "联系我",
    subtitle: "学术交流与工程咨询",
    info: [
      { label: "电话", value: "+86 185-3009-9573" }, // 请手动更新
      { label: "邮箱", value: "yangjh941@163.com" }, // 请手动更新
      { label: "地址", value: "结构风工程实验室" },
    ]
  }
};
