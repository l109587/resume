> 面向企业法律场景的 AI 知识库系统，基于 RAG 架构构建法律文档智能问答、案例检索、引用溯源与会话留存能力。系统支持法律法规、合同文本、办案记录、PDF/Word/Markdown 等多类型资料入库，通过文档解析、语义切分、向量化、关键词检索、混合召回与大模型生成，帮助用户在企业私有知识库中快速获得有依据、可追溯的法律辅助分析。

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

 `RAG` / `LangChain` / `Qdrant` / `Embedding` / `BM25` / `Hybrid Search` / `Prompt Engineering` / `ReadableStream` / `Python` / `FastAPI`/ `MySql` / `React 19` / `TypeScript` /

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责法律 AI 知识库前端架构与核心交互开发，构建对话侧边栏、流式问答区、知识库文档管理、引用来源展示等完整产品闭环
- 开发法律知识库文档管理模块，支持 `txt`、`md`、`pdf`、`docx` 上传入库、分页查询、关键词搜索、原文预览、引用查看和文档删除
- 实现 RAG 核心链路设计与联调，围绕文档加载、文本切分、Embedding 向量化、向量召回、关键词召回、融合排序和 LLM 生成优化问答效果
- 引入 `Hybrid Search` 检索策略，结合 `Qdrant` 语义向量检索与 `BM25` 关键词检索，并通过 `RRF` 融合排序提升法律长文档场景下的召回稳定性
- 设计回答引用溯源能力，将检索片段的文档 ID、文件名、预览地址与回答结果关联，保证法律分析结果有来源、可核验
- 针对法律问答场景优化 Prompt 约束，要求模型区分用户事实与检索材料、避免无依据结论、输出风险提示和下一步建议，提升法律辅助分析的可信度
- `Python + FastAPI + Mysql` 实现问答与文档接口，支持会话持久化、历史消息回显和知识库文档状态同步
- 基于 `Next.js + React + TypeScript` 实现单页问答工作台，使用组件化状态管理承载会话切换、删除状态、问答 loading 等复杂 UI 状态
- 基于 `fetch + ReadableStream` 接入后端流式问答接口，实现大模型回答逐字增量渲染、事件解析、异常兜底

==split==

> 从 0 开始编写前端。该系统是基于 React、Umi、Antd 的 SPA 项目，用于对用户资产进行分析统计，计算资源分布，部署探针监测用户资产安全风险，并根据监测配置提供风险违规监测报告。项目中公共组件和系统配置、系统维护相关功能，通过 webpack 配置、git-submodule、npm-workspace 实现公共架构管理。

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
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
  <p><span class="project-sub-title">前端技术栈</span></p>
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

==split==

> 基于 React、TypeScript、Umi 的 SPA 项目，TypeScript 类型覆盖 95% 以上，减少生产环境 bug 数量与团队协作成本。项目通过 API 统一管控、API 风险发现、API 实时监控技术，对每个用户、资产、业务的行为模式进行自动分析建模，应对漏洞攻击、黑客入侵、数据泄露以及账号滥用风险。

<block class="project-block">
  <p><span class="project-sub-title">前端技术栈</span></p>
</block>

`React` / `Recoil` / `Umi` / `TailwindCSS` / `immer` / `TypeScript` / `Antd` / `MockJs` / `ahooks`

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- 负责前端技术选型与架构设计、前端项目管理、Code Review
- 使用 `Recoil` 替换 Umi 自带的 Dva，实现更轻量便捷的 Hook 化共享状态管理
- 基于 `ScatterChart`、`Heatmap` 开发 API/IP 画像模块，通过数组 `map`、`reduce` 方法和对象 `entries`、`values` 方法实现数据动态补偿
- 基于 `useSessionStorage`、`QueryFilter`、`ProTable` 开发事件风险模块，通过风险类型、威胁等级等多维度进行检索，并实现页面关键状态持久化
- 基于 Antd 封装基础组件
- 基于 `G6`、`G2Plot` 开发资产拓扑图等数据可视化组件，实现大数据量节点快速绘制
- 与运维一起推进 CI/CD 标准化，以及 alpha、dev、staging、hotfix、production 多套环境的自动化部署机制
