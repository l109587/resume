import { ExperienceProps } from './experience.component'
import { html as CNContents } from './experience_zh.md'

const cnContents = CNContents.split('==split==')

const props: {
  zh: ExperienceProps
  en: ExperienceProps
} = {
  zh: {
    title: '工作经历',
    companies: [
      {
        name: '曜斗科技',
        time: '2024.4 ~ 2026.7',
        title: '大模型应用开发/前端/后端开发',
        content: cnContents[0],
        url: '#',
      },
      {
        name: '北信源软件股份有限公司',
        time: '2021.7 ~ 2024.3',
        title: '',
        content: cnContents[1],
        url: '#',
      },
    ],
  },
  get en() {
    return {
      ...this.zh,
      title: 'Experience',
    }
  },
}

export default props
