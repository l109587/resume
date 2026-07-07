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
        name: '法律AI知识库',
        time: '2026.1 ~ 2026.7',
        roles: ['Creator'],
        content: cnContents[0],
      },
      {
        name: '企业考勤管理系统',
        time: '2026.4 ~ 2026.7',
        roles: ['Product', 'vibe Coding'],
        content: cnContents[1],
      },
      {
        name: '万慧达知识产权服务系统',
        time: '2024.4 ~ 2026.7',
        roles: ['Creator'],
        content: cnContents[2],
      },
      {
        name: '网络边界监测系统',
        time: '2022.7 ~ 2024.3',
        roles: ['Creator'],
        content: cnContents[3],
      },
      {
        name: '存储介质信息消除工具',
        time: '2022.4 ~ 2022.7',
        roles: ['Creator', 'Owner'],
        content: cnContents[4],
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
