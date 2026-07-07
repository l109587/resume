> 面向企业法律团队，构建基于 RAG + Agent 的智能知识库，实现法规检索、案例分析、引用溯源与智能问答。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

 `LLM` /  `LangChain` / `Embedding` / `BM25` / `混合检索` / `关键词工程`/ `Rerank` / `Python` / `FastAPI`/ `MySql` / `React 19` / `TypeScript` 

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 设计 PDF、Word、Markdown 文档解析流程，支持标题、表格、图片等结构化解析。
- 围绕 RAG 检索准确度优化，结合关键词扩展与同义词归一、`Qdrant` 向量检索、`BM25` 关键词召回、混合检索、`RRF` 融合排序、`Rerank` 重排模式、TopK 与相似度阈值调优，提升 30% 的检索准确率
- 支持 2000+ 法律文档、200万+ Chunk、100万+ Embedding 数据入库检索，将 Top10 Recall 从 68% 提升至 91%，平均响应耗时从 8s 优化至 3s
- 设计短期记忆与长期记忆能力，短期记忆承载会话上下文追踪，长期记忆沉淀历史会话与知识库检索结果
- 基于`Python + FastAPI + Mysql` 实现问答与文档接口，支持会话持久化、历史消息回显和知识库文档状态同步
- 基于 `Next.js + React + TypeScript` 实现前端问答工作台

==split==

> 基于 AI Coding 主导从需求拆解、原型设计到前端实现的企业考勤管理系统，覆盖员工自助、假勤申请、审批流转、排班计算与考勤报表，帮助企业完成考勤数据采集、异常处理和结果统计闭环。

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
- 负责整个考勤系统前端方案与实现，覆盖考勤日历、打卡记录、假勤申请、考勤档案、排班、考勤计算、审批中心和结果报表

==split==

> 面向知识产权律师与代理人的一体化办案协同系统，将立卷、案件跟进、资料归档、费用合同关联等办案流程软件化，减少重复录入与线下沟通成本，提升律师办案效率。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Vue` / `Vue Router` / `Vuex` / `Element Plus` / `WebSocket` / `AG Grid` / `ECharts` 

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 协同知识产权律师与代理人梳理真实办案流程，将立卷、案件跟进、流程节点、资料归档、费用合同关联等线下流程软件化
- 作为核心前端开发负责案件、客户、项目、合同、财务、流程、工时等模块建设，支撑从客户委托到费用结算的线上协同
- 应用 `WebSocket` 实现办案进程实时推送，支持代理人同步案件节点进展、邮件提醒、待办处理提醒和重要期限提醒
- 应用 `AG Grid`、`PDF.js`、`XLSX` 实现大数据列表处理、案件材料预览、Excel 导入导出与附件下载，提升办案处理效率

==split==

> 面向海量资产安全监测场景，从 0 设计高复用前端产品架构，支撑资产统计、探针监测、风险分析与报告导出等复杂数据链路，并通过模块化架构快速复用到多个产品迭代。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`React` / `Umi` / `Less` / `TypeScript` / `Antd` / `Antd Charts` / `G6` /

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责前端技术选型与架构设计，前端代码管理，发布与部署上线
- 基于 `git-submodule`、`npm workspaces` 管理公共模块、业务模块和应用依赖
- 基于 Ukey 证书、token、session 实现高强度系统登录模块
- 基于 `React-Router` 开发前端配置路由，控制角色权限，实现页面级权限和操作权限
- 基于 `G6`、`GG-Editor` 绘制网络设备拓扑关系图，实现网络设备在拓扑中的增删改查
- 基于 `html2canvas`、`html-docx-js`、`file-saver`、`Antd Charts` 实现纯前端监测风险违规 Word 报表导出功能

==split==

> 面向保密数据销毁场景的 Linux 触屏终端应用，部署在可触屏的专用消除设备上，对电脑、笔记本、U 盘、硬盘等存储介质中的数据进行彻底清除。系统支持触屏登录、设备擦除、擦除设置、系统升级、操作日志与进度反馈，满足离线设备环境下的安全擦除与审计要求。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Electron` / `Electron-Builder` / `Preload` / `ContextBridge` / `Linux` / `React` / `Umi` / `Axios` / `Antd` / `React-simple-keyboard` / `Less`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 基于 `Electron` 搭建 Linux 触屏终端应用架构，划分主进程、渲染进程与预加载脚本职责，实现前端界面与本地设备能力的稳定协同
- 应用 `IPC` 通信打通渲染进程与主进程，封装设备擦除、系统升级、操作日志、本地配置读写等桌面端能力调用
- 通过 `Preload + ContextBridge` 暴露安全 API，控制 Node 能力边界，降低渲染进程直接访问系统资源带来的安全风险
- 基于 `Electron-Builder` 配置 Linux 安装包、应用图标、产物目录与启动参数，适配专用触屏设备的部署与升级流程
- 针对触屏操作场景封装大尺寸按钮、弹框、虚拟键盘、擦除进度反馈等交互组件，提升无外接键鼠环境下的操作效率
