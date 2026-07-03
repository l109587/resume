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
        name: '北信源软件股份有限公司',
        time: '2022.4 ~ 2024.3',
        title: '前端开发组长',
        content: cnContents[0],
        url: 'https://www.vrv.com.cn',
      },
      {
        name: '星阑科技',
        time: '2021.4 ~ 2022.3',
        title: '前端开发成员',
        content: cnContents[1],
        url: 'https://www.starlink.com',
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
