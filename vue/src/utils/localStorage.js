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
export function saveBgInfoCache(bgInfo, exp) {
  return setLocalStorage('bgInfo', bgInfo, exp)
}

export function getBgInfoCache() {
  return getLocalStorage('bgInfo')
}

export function saveCurrentBgCache(bgInfo) {
  return setLocalStorage('currentBg', bgInfo)
}

export function getCurrentBgCache() {
  return getLocalStorage('currentBg')
}