import { isJSON, stringify, deserialize } from './helper'

class Store {
  constructor(type = 'local') {
    if (type === 'local') {
      this.type = type
    } else {
      this.type = 'session'
    }
  }

  getStorage() {
    let storeName = this.type + 'Storage'
    return window[storeName]
  }

  set(key, val, type = 'local') {
    let storage = this.getStorage()
    if (key && !isJSON(key)) {
      storage.setItem(key, stringify(val))
    } else if (key && isJSON(key) && !val) {
      for (var a in key) this.set(a, key[a])
    }
  }

  get(key) {
    let storage = this.getStorage()
    let data = storage.getItem(key)
    return deserialize(data)
  }

  remove(key) {
    let storage = this.getStorage()
    var val = this.get(key)
    storage.removeItem(key)
    return val
  }

  clear() {
    let storage = this.getStorage()
    storage.clear()
  }
}

export const localStore = new Store('local')
export const sessionStore = new Store('session')

export default { localStore, sessionStore }
