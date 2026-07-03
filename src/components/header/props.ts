import { HeaderProps } from './index'

const props: {
  zh: HeaderProps
  en: HeaderProps
} = {
  zh: {
    name: '李宏斌',
    email: 'lhb109587@163.com',
    site: '',
    phone: '18333374056',
    github: {
      name: '',
      url: '',
    },
    zhihu: {
      name: '',
      url: '',
    },
    wechat: '18333374056（同微信）',
    exp: '26岁 | 一本-计算机科学与技术 | 五年前端开发',
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
