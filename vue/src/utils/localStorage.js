import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, value, exp) {
  return localStorage.set(key, value, exp)
}

export function getLocalStorage(key) {
  return localStorage.get(key)
}

export function removeLocalStorage(key) {
  return localStorage.delete(key)
}

export function clearLocalStorage() {
  return localStorage.clear()
}

// 返回的是保存的数据
// 背景图数据缓存
export function saveBgInfoCache(bgInfo, exp) {
  return setLocalStorage('bgInfo', bgInfo, exp)
}

export function getBgInfoCache() {
  return getLocalStorage('bgInfo')
}

// 当前背景图链接缓存
export function saveCurrentBgCache(bgInfo) {
  return setLocalStorage('currentBg', bgInfo)
}

export function getCurrentBgCache() {
  return getLocalStorage('currentBg')
}

// token缓存
export function saveToken(token) {
  return setLocalStorage('token', token)
}

export function getToken() {
  return getLocalStorage('token')
}

export function clearToken() {
  return removeLocalStorage('token')
}