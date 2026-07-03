import { ProjectProps } from './project.component'
import { html as CNContents } from './project_zh.md'

const cnContents = CNContents.split('==split==')

const props: {
  zh: ProjectProps
  en: ProjectProps
} = {
  zh: {
    title: '项目经历',
    projects: [
      {
        name: 'AI 知识库应用',
        time: '2026.6 ~ 至今',
        roles: ['Creator', 'Owner'],
        content: cnContents[0],
      },
      {
        name: '网络边界监测系统',
        time: '2022.7 ~ 2024.3',
        roles: ['Creator', 'Owner'],
        content: cnContents[1],
      },
      {
        name: '存储介质信息消除工具',
        time: '2022.4 ~ 2022.7',
        roles: ['Creator', 'Owner'],
        content: cnContents[2],
      },
      {
        name: '萤火 API Intelligence',
        time: '2021.9 ~ 2022.3',
        roles: ['Creator', 'Owner'],
        content: cnContents[3],
      },
    ],
  },
  get en() {
    return {
      ...this.zh,
      title: 'Projects',
    }
  },
}

export default props
