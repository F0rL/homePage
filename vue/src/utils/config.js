const AV = require('leancloud-storage')

let leancloud = {
  appId: '0mPdUUC8OXWFj8uvDMHiBCx2-gzGzoHsz',
  appKey: 'HeBrj3lGzG4a2fLz5FF1zNok',
  serverURLs: 'https://mddflwae.lc-cn-n1-shared.com'
}

AV.init({
  appId: leancloud.appId,
  appKey: leancloud.appKey,
  serverURLs: leancloud.serverURLs
})

export { AV }
