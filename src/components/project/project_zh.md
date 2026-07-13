> 面向企业法律团队，构建基于 RAG + Agent 的智能知识库，实现法规检索、案例分析、引用溯源与智能问答。

<block class="project-block">
  <p><span class="project-sub-title">技术栈</span></p>
</block>

 `Qwen3.7-Plus` /  `LangChain` / `Embedding` / `dots.OCR` / `BM25` / `混合检索` / `关键词工程`/ `Rerank` / `Python` / `FastAPI`/ `MySql` / `React 19` / `TypeScript` 

<block class="project-block">
  <p><span class="project-sub-title">项目职责</span></p>
</block>

- **多模态向量建模**:使用dots.OCR模型精准解析PDF和PPT中的文本、图片等内容，采用私部署gme-Qwen2-VL-7B多模态嵌入模型，将文本与图像映射至统一向量空间，实现跨模态检索。
- **文档解析与知识入库**，设计 PDF、Word、Markdown 文档解析、切分与入库流程，支持标题、表格、图片等结构化内容提取与元数据标注。
- **构建混合检索链路**，基于 `Qdrant` 实现稠密向量检索，结合 `BM25` 关键词召回完成稀疏检索，通过多路召回与加权融合算法合并候选结果，提升法律条文、案例与合同片段的召回覆盖率。
- **RAG 检索质量持续优化**，结合`RRF` 融合排序、TopK 与相似度阈值调优，并引入 `Rerank` 模型对候选文档进行精细化重排，提升模型上下文质量和回答准确性。
- **支持 2000+ 法律文档**、200万+ Chunk、100万+ Embedding 数据入库检索，将 Top10 Recall 从 68% 提升至 91%，平均响应耗时从 8s 优化至 3s。
- **上下文工程设计**，短期记忆承载会话上下文追踪，长期记忆沉淀历史会话与知识库检索结果，提升多轮追问场景下的连续问答体验。
- **规范 JSON 结构化输出**，约束答案、引用来源、命中片段、置信度与追问建议等字段，便于前端稳定渲染和后续结果评估。
- 基于 `Python + FastAPI + MySQL` 实现问答与文档接口，支持会话持久化、历史消息回显、知识库文档状态同步和检索结果调试。
- 基于 `Next.js + React + TypeScript` 实现前端问答工作台，支持文档上传、知识库管理、流式问答、引用溯源和检索命中结果展示。

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

- 负责前端技术选型与架构设计，沉淀高复用业务组件与模块化工程方案，支撑资产监测、风险分析、告警处置和报告导出等多产品复用
- 设计大屏告警监控平台，基于 `Antd Charts` 实现资产态势、风险等级、违规事件、探针在线率和告警趋势可视化，提升安全运营态势感知能力
- 深化网络拓扑能力，基于 `G6`、`GG-Editor` 实现设备节点、链路关系、分组布局、状态染色、告警标记和交互式编辑，支持网络边界资产关系快速定位
- 结合网络安全业务建模资产指纹、端口服务、弱口令、违规外联、异常访问等风险维度，支撑边界暴露面识别与风险闭环处置
- 基于 Ukey 证书、token、session 实现高强度登录认证，结合路由权限与操作权限控制，保障敏感监测数据访问安全
- 基于 `git-submodule`、`npm workspaces` 管理公共模块、业务模块和应用依赖，统一多项目代码组织、版本升级与构建发布流程
- 基于 `html2canvas`、`html-docx-js`、`file-saver` 实现纯前端风险违规 Word 报表导出，支持监测结果归档、审计留痕和线下汇报

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
