const iconFontUrl = `//at.alicdn.com/t/font_1494383_x8aen4cntn.js`

export function setIconFontJs(){
  const node = document.querySelector('head')
  const jsNode = document.createElement('script')
  jsNode.setAttribute('src', iconFontUrl)
  node.appendChild(jsNode)
}

export function setFontSize(){
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
}