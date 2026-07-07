import { HeaderProps } from './index'

const props: {
  zh: HeaderProps
  en: HeaderProps
} = {
  zh: {
    name: '李宏斌',
    email: 'lhb109587@163.com',
    site: '五年软件开发',
    phone: '18333374056',
    github: {
      name: '',
      url: '',
    },
    zhihu: {
      name: '',
      url: '',
    },
    exp: '26岁 | 一本-计算机科学与技术',
    location: '河北省唐山市',
  },
  get en() {
    return {
      ...this.zh,
      name: 'Hongbin Li',
    }
  },
}

export default props
