> 面向企业法律场景的 AI 知识库系统，基于 RAG 架构构建法律文档智能问答、案例检索、引用溯源与会话留存能力。系统支持法律法规、合同文本、办案记录、PDF/Word/Markdown 等多类型资料入库，通过文档解析、语义切分、向量化、关键词检索、混合召回与大模型生成，帮助用户在企业私有知识库中快速获得有依据、可追溯的法律辅助分析。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

 `AI大模型` / `RAG` /  `LangChain` / `Qdrant` / `Embedding` / `BM25` / `Hybrid Search` / `Prompt Engineering` / `ReadableStream` / `Python` / `FastAPI`/ `MySql` / `React 19` / `TypeScript` 

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责法律 AI 知识库前端架构与核心交互开发，构建对话侧边栏、流式问答区、知识库文档管理、引用来源展示等完整产品闭环
- 开发法律知识库文档管理模块，支持 `txt`、`md`、`pdf`、`docx` 上传入库、分页查询、关键词搜索、原文预览、引用查看和文档删除
- 实现 RAG 核心链路设计与联调，围绕文档加载、文本切分、Embedding 向量化、向量召回、关键词召回、融合排序和 LLM 生成优化问答效果
- 引入 `Hybrid Search` 检索策略，结合 `Qdrant` 语义向量检索与 `BM25` 关键词检索，并通过 `RRF` 融合排序提升法律长文档场景下的召回稳定性
- 基于`Python + FastAPI + Mysql` 实现问答与文档接口，支持会话持久化、历史消息回显和知识库文档状态同步
- 基于 `Next.js + React + TypeScript` 实现单页问答工作台，使用组件化状态管理承载会话切换、删除状态、问答 loading 等复杂 UI 状态
- 基于 `fetch + ReadableStream` 接入后端流式问答接口，实现大模型回答逐字增量渲染、事件解析、异常兜底

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

> 利用保密认证的专业设备，对电脑、笔记本、U 盘、硬盘等存储介质中保存的数据信息进行彻底清除。擦除后数据无法恢复，达到国家保密要求。主要功能包括系统登录、系统升级、设备擦除、擦除设置、操作日志等。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

`Electron` / `Electron-Builder` / `React` / `Umi` / `Axios` / `Antd` / `React-simple-keyboard` / `Less`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 基于 Electron 技术搭建桌面应用架构
- 基于 `Electron-Builder` 打包跨 Windows、macOS、Linux 三平台桌面应用，通过架构优化减小应用体积并提高打包效率
- 封装通用组件，包括表格、通知、表单、弹框、输入框、选择框等
- 基于 `React-simple-keyboard` 封装虚拟键盘组件
- 设置 HTTP 拦截器，使用 Axios 二次包装公共请求头和异常统一处理，使用 `async/await` 进行异步流程控制
