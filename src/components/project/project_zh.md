> 面向企业法律场景的 AI 知识库系统，基于 RAG 架构构建法律文档智能问答、案例检索、引用溯源与会话留存能力。系统支持法律法规、合同文本、办案记录、PDF/Word/Markdown 等多类型资料入库，通过文档解析、语义切分、向量化、关键词检索、混合召回与大模型生成，帮助用户在企业私有知识库中快速获得有依据、可追溯的法律辅助分析。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

 `LLM` / `RAG` /  `LangChain` / `Qdrant` / `Embedding` / `BM25` / `混合检索` / `关键词工程`/ `Rerank` / `Python` / `FastAPI`/ `MySql` / `React 19` / `TypeScript` 

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责法律 AI 知识库架构设计，提升检索效果，优化问答体验，提升用户满意度
- 围绕 RAG 检索准确度优化，结合关键词扩展与同义词归一、`Qdrant` 向量检索、`BM25` 关键词召回、混合检索、`RRF` 融合排序、`Rerank` 重排模式、TopK 与相似度阈值调优，提升 30% 的检索准确率
- 实现 RAG 核心链路设计与联调，围绕文档加载、文本切分、Embedding 向量化、向量召回、关键词召回、融合排序和 LLM 生成优化问答效果
- 设计短期记忆与长期记忆能力，短期记忆承载会话上下文追踪，长期记忆沉淀历史会话与知识库检索结果
- 基于`Python + FastAPI + Mysql` 实现问答与文档接口，支持会话持久化、历史消息回显和知识库文档状态同步
- 基于 `Next.js + React + TypeScript` 实现前端问答工作台，

==split==

> 面向企业人事与考勤管理场景的考勤系统，覆盖员工自助与后台考勤管理两大业务域。系统支持我的考勤日历、打卡记录、请假/加班/补签申请、审批中心、考勤档案、出勤记录、排班管理、考勤计算、考勤结果明细与汇总报表等能力，通过统一权限、业务单据流转和考勤计算结果展示，帮助企业完成从考勤数据采集、异常处理到结果统计的完整闭环。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Vue 3` / `Vue Router` / `Vuex` / `Element Plus` / `Axios` / `AG Grid` / `FullCalendar` / `Sass`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 作为项目负责人主导考勤系统从需求到交付的落地，负责总需求文档、功能原型、模块边界、排期拆解与交付质量把控
- 深度使用 `Codex`、`Claude Code`、`Cursor` 等 vibe Coding 工具推进开发，约 90% 代码由 AI 辅助实现，并负责需求校验、代码审查、联调验收和问题闭环
- 推动公司开发模式从传统手写代码向 AI 编程转型，沉淀需求拆解、提示词、代码生成、审查验收等协作流程，显著提升研发效率与交付速度
- 拆解复杂考勤业务，统一员工自助、后台管理、审批流转、排班计算、结果报表等模块的页面结构、权限边界与交互规范
- 负责整个考勤系统前端方案与实现，覆盖考勤日历、打卡记录、假勤申请、考勤档案、排班、考勤计算、审批中心和结果报表

==split==

> 面向知识产权律师与代理人的一体化办案协同系统，通过将立卷、商标/专利/版权/诉讼/保护等案件办理流程软件化，串联客户、项目、合同、财务、流程、工时、资料与业绩分析等模块，帮助律师沉淀标准办案流程、减少重复录入与线下沟通成本，提升案件办理效率。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Vue 3` / `Vue Router` / `Vuex` / `Element Plus` / `Axios` / `WebSocket` / `AG Grid` / `ECharts` / `FullCalendar` / `WangEditor` / `PDF.js` / `XLSX` / `Sass`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 深度协同知识产权律师与代理人梳理真实办案流程，将立卷、案件跟进、流程节点、资料归档、费用合同关联等线下流程沉淀为可复用的软件化工作流
- 作为核心前端开发负责案件、客户、项目、合同、财务、流程、工时等模块建设，支撑律师从客户委托到案件办理、费用结算的全链路线上协同
- 应用 `WebSocket` 实现办案进程实时推送，支持代理人传递案件节点进展，并向律师同步邮件提醒、待办处理提醒和重要期限提醒
- 应用 `AG Grid` 实现案件、费用、合同等大数据列表的筛选、排序、分页与批量操作，提升律师高频检索和批量处理效率
- 应用 `PDF.js`、`XLSX` 和 Blob 文件流实现案件材料在线预览、Excel 导入导出、附件下载等能力，减少线下文件流转成本
- 主导商标、专利、保护等多类型案件页面抽象，沉淀列表检索、详情编辑、侧边抽屉、流程记录等高复用业务组件，降低复杂页面开发成本
- 梳理案件、合同、费用、客户、项目之间的业务关联与数据流转，完成跨模块页面联动、状态回显、权限控制和操作闭环，减少重复录入并提升办案效率
- 处理权限菜单、路由懒加载、复杂表单、富文本等高频难点场景，提升系统可维护性与用户体验

==split==

> 从 0 开始编写前端。该系统是基于 React、Umi、Antd 的 SPA 项目，用于对用户资产进行分析统计，计算资源分布，部署探针监测用户资产安全风险，并根据监测配置提供风险违规监测报告。项目中公共组件和系统配置、系统维护相关功能，通过 webpack 配置、git-submodule、npm-workspace 实现公共架构管理。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`React` / `Umi` / `Less` / `TypeScript` / `Antd` / `Antd Charts` / `G6` / `MockJs` / `ahooks` / `html2canvas` / `html-docx-js` / `file-saver`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责前端技术选型与架构设计，前端代码管理，发布与部署上线
- 基于 `React + Umi` 搭建项目架构，实现按需引入、路由懒加载，配置多环境
- 基于 `git-submodule`、`npm workspaces` 管理公共模块、业务模块和应用依赖，精简工作流程
- 封装基础组件，将项目中组件封装率提升至 80%，提高开发效率
- 基于 Ukey 证书、token、session 实现高强度系统登录模块
- 基于 `React-Router` 开发前端配置路由，控制角色权限，实现页面级权限和操作权限
- 封装 Dva 模块管理全局状态，结合 LocalStorage 实现状态持久化
- 实现记忆菜单、主题切换、表格项显隐控制等功能
- 基于 `G6`、`GG-Editor` 绘制网络设备拓扑关系图，实现网络设备在拓扑中的增删改查
- 基于 `html2canvas`、`html-docx-js`、`file-saver`、`Antd Charts` 实现纯前端监测风险违规 Word 报表导出功能

==split==

> 面向保密数据销毁场景的 Linux 触屏终端应用，部署在可触屏的专用消除设备上，对电脑、笔记本、U 盘、硬盘等存储介质中的数据进行彻底清除。系统支持触屏登录、设备擦除、擦除设置、系统升级、操作日志与进度反馈，满足离线设备环境下的安全擦除与审计要求。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Electron` / `Electron-Builder` / `IPC` / `Preload` / `ContextBridge` / `Linux` / `React` / `Umi` / `Axios` / `Antd` / `React-simple-keyboard` / `Less`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 基于 `Electron` 搭建 Linux 触屏终端应用架构，划分主进程、渲染进程与预加载脚本职责，实现前端界面与本地设备能力的稳定协同
- 应用 `IPC` 通信打通渲染进程与主进程，封装设备擦除、系统升级、操作日志、本地配置读写等桌面端能力调用
- 通过 `Preload + ContextBridge` 暴露安全 API，控制 Node 能力边界，降低渲染进程直接访问系统资源带来的安全风险
- 基于 `Electron-Builder` 配置 Linux 安装包、应用图标、产物目录与启动参数，适配专用触屏设备的部署与升级流程
- 针对触屏操作场景封装大尺寸按钮、弹框、虚拟键盘、擦除进度反馈等交互组件，提升无外接键鼠环境下的操作效率
