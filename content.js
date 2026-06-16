/* ============================================================
 *  content.js — 学术主页内容配置文件
 *
 *  ✏️  修改本文件即可更新网页内容，无需改动 HTML/CSS
 *  🌐  每项内容均包含 en（英文）和 zh（中文）两个版本
 * ============================================================ */

const SITE_CONTENT = {

  /* ---------- 基本信息 ---------- */
  profile: {
    name:    { en: "Hongbo Liu", zh: "刘泓伯" },
    title:   {
      en: "Research Assistant @ The Hong Kong Polytechnic University",
      zh: "研究助理 @ 香港理工大学"
    },
    email: "hong-bo.liu@connect.polyu.hk",
    // 可选：添加更多社交链接（取消注释并填入 URL）
    links: [
      // { label: "Google Scholar", url: "https://scholar.google.com/...", icon: "scholar"  },
      // { label: "GitHub",         url: "https://github.com/...",         icon: "github"   },
      // { label: "LinkedIn",       url: "https://linkedin.com/in/...",    icon: "linkedin" },
    ],
  },

  /* ---------- 研究方向 ---------- */
  research: {
    heading: { en: "Research Interests", zh: "研究方向" },
    items: [
      { en: "Blockchain & Web3",            zh: "区块链与 Web3"    },
      { en: "Decentralized Infrastructure", zh: "去中心化基础设施" },
      { en: "Edge Computing",               zh: "边缘计算"         },
      { en: "Decentralized AI",             zh: "去中心化 AI"      },
    ],
  },

  /* ---------- 教育背景 ---------- */
  education: {
    heading: { en: "Education", zh: "教育背景" },
    items: [
      {
        period: { en: "Sep 2022 – Oct 2023", zh: "2022.09 – 2023.10" },
        school: { en: "The Hong Kong Polytechnic University", zh: "香港理工大学" },
        degree: { en: "M.Sc. in Blockchain Technology",       zh: "区块链技术 理学硕士" },
        details: [
          { en: "GPA: 3.26 / 4.3", zh: "GPA: 3.26 / 4.3" },
          { en: "Scholarship: BlockSec Blockchain Security Award",
            zh: "奖学金：BlockSec 区块链安全奖" },
        ],
      },
      {
        period: { en: "Sep 2018 – Jun 2022", zh: "2018.09 – 2022.06" },
        school: { en: "Beijing University of Posts and Telecommunications",
                  zh: "北京邮电大学" },
        degree: { en: "B.Eng. in Computer Science and Technology",
                  zh: "计算机科学与技术 工学学士" },
        details: [
          { en: "GPA: 3.49 / 4.0 (85.27 / 100)", zh: "GPA: 3.49 / 4.0 (85.27 / 100)" },
          { en: "Scholarship: Third-class Scholarship, 2019",
            zh: "奖学金：2019 年三等奖学金" },
        ],
      },
    ],
  },

  /* ---------- 工作经历 ---------- */
  experience: {
    heading: { en: "Work Experience", zh: "工作经历" },
    items: [
      {
        period: { en: "Sep 2023 – Present", zh: "2023.09 – 至今" },
        org:    { en: "The Hong Kong Polytechnic University", zh: "香港理工大学" },
        role:   { en: "Research Assistant", zh: "研究助理" },
        details: [],
      },
    ],
  },

  /* ---------- 学术论文 ---------- */
  publications: {
    heading: { en: "Publications", zh: "学术论文" },
    items: [
      {
        title: {
          en: "PolyLink: A Blockchain Based Decentralized Edge AI Platform for LLM Inference",
          zh: "PolyLink：基于区块链的去中心化边缘 AI 大模型推理平台",
        },
        venue: {
          en: "IEEE International Conference on Blockchain (Blockchain 2025)",
          zh: "IEEE 国际区块链会议 (Blockchain 2025)",
        },
        authors: "Hongbo Liu, Jiannong Cao, Bo Yang, Dongbin Bai, Yinfeng Cao, Xiaoming Shen, Yinan Zhang, Jinwen Liang, Shan Jiang, Mingjin Zhang",
        highlight: true,   // 第一作者高亮
        // link: "https://doi.org/...",
      },
      {
        title: {
          en: "Decentralized Physical Infrastructure Networks: Backgrounds, Architectures, Open Issues, and Case Studies",
          zh: "去中心化物理基础设施网络：背景、架构、开放问题与案例研究",
        },
        venue: {
          en: "IEEE International Conference on Blockchain (Blockchain 2025)",
          zh: "IEEE 国际区块链会议 (Blockchain 2025)",
        },
        authors: "Jinwen Liang, Bo Yang, Dongbin Bai, Hongbo Liu, Yinfeng Cao",
      },
      {
        title: {
          en: "EdenDID: An Edge Computing and Blockchain-based Decentralized Identity System for Web3 Applications and DePIN",
          zh: "EdenDID：面向 Web3 应用和 DePIN 的边缘计算与区块链去中心化身份系统",
        },
        venue: {
          en: "Cluster Computing Journal",
          zh: "Cluster Computing 期刊",
        },
        authors: "Hongbo Liu, Jiannong Cao, Yinfeng Cao, Dongbin Bai, Jinwen Liang, Ruidong Li",
        highlight: true,
      },
      {
        title: {
          en: "Eden: An Edge Computing Empowered Proof-of-Personhood Protocol for Anti-Sybil in Blockchain-based Metaverse",
          zh: "Eden：边缘计算赋能的区块链元宇宙抗 Sybil 攻击人格证明协议",
        },
        venue: {
          en: "International Conference on Intelligent Metaverse Technologies & Applications (iMeta 2024)",
          zh: "国际智能元宇宙技术与应用会议 (iMeta 2024)",
        },
        authors: "Yinfeng Cao, Jiannong Cao, Hongbo Liu, Zeyang Cui",
      },
      {
        title: {
          en: "Efficient and Atomic Cross-blockchain Transaction Processing for Decentralized Web3 Applications",
          zh: "面向去中心化 Web3 应用的高效原子跨链交易处理",
        },
        venue: {
          en: "The 21st IEEE International Conference on Ubiquitous Intelligence and Computing (UIC 2024)",
          zh: "第 21 届 IEEE 国际普适智能与计算会议 (UIC 2024)",
        },
        authors: "Yuqin Wang, Jiannong Cao, Shan Jiang, Shan Wang, Hongbo Liu, Zhixuan Liang",
      },
    ],
  },

  /* ---------- 竞赛经历 ---------- */
  competitions: {
    heading: { en: "Competitions & Awards", zh: "竞赛与获奖" },
    items: [
      {
        title: {
          en: "Mathematical Contest in Modeling (MCM)",
          zh: "美国大学生数学建模竞赛",
        },
        details: [
          { en: "Team Leader — responsible for modeling and thesis writing",
            zh: "队长 — 负责建模与论文撰写" },
          { en: "Awarded Successful Participant",
            zh: "获 Successful Participant 奖" },
        ],
      },
      {
        title: {
          en: "Student Innovation & Entrepreneurship Competition",
          zh: "大学生创新创业实践竞赛",
        },
        details: [
          { en: "Project: Visualization App for 5G Base Station Config & O&M Data (with Huawei)",
            zh: "项目：基于 5G 基站运维配置参数的可视化 APP（与华为合作）" },
          { en: "Developed Android app for real-time monitoring; responsible for data visualization",
            zh: "开发 Android 实时监控应用；负责数据可视化编码" },
        ],
      },
    ],
  },

  /* ---------- 页脚 ---------- */
  footer: {
    en: "© 2025 Hongbo Liu. All rights reserved.",
    zh: "© 2025 刘泓伯 版权所有",
  },
};
