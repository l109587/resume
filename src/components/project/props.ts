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
        name: '法律AI 知识库',
        time: '2026.6 ~ 至今',
        roles: ['Creator'],
        content: cnContents[0],
      },
      {
        name: '企业考勤管理系统',
        time: '2026.5 ~ 2026.6',
        roles: ['Product', 'vibe Coding'],
        content: cnContents[1],
      },
      {
        name: '网络边界监测系统',
        time: '2022.7 ~ 2024.3',
        roles: ['Creator'],
        content: cnContents[2],
      },
      {
        name: '存储介质信息消除工具',
        time: '2022.4 ~ 2022.7',
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
