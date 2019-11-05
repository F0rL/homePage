import axios from 'axios'

// 需要部署在服务器
// const bingBgUrl = `https://cn.bing.com/HPImageArchive.aspx`

// 文档 https://github.com/xCss/bing
// const ioBingBgUrl = `http://bing.ioliu.cn`

// api: 获取图片来源
// day: 1 昨天 0今天 -1明天 最早获取7天前
// num: 获取数量,最多为8
export function getHomeBgImage() {
  return axios.get('/bg/')
}
