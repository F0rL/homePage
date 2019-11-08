const iconFontUrl = `//at.alicdn.com/t/font_1494383_8rhcobribfs.js`

export function setIconFontJs() {
  const node = document.querySelector('head')
  const jsNode = document.createElement('script')
  jsNode.setAttribute('src', iconFontUrl)
  node.appendChild(jsNode)
}

export function setFontSize() {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
}

export function numToChinese(num) {
  num = parseInt(num)
  switch (num) {
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
    case 6:
      return '六'
    case 7:
      return '日'
    default:
      return 'Error'
  }
}