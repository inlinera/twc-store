import { makeAutoObservable } from 'mobx'
import type { CartItem } from '../local/cart'

class StatesStore {
  constructor() {
    makeAutoObservable(this)
  }

  // for breadcrumbs ui
  path = null as string[] | null
  setPath = (v: string[] | null) => (this.path = v)

  // for buy page
  buyInfo = null as CartItem[] | null
  setBuyInfo = (v: CartItem[] | null) => (this.buyInfo = v)

  theme = document.documentElement.getAttribute('data-theme')
  setTheme = () => {
    const isDark = this.theme === 'dark'
    if (isDark) {
      this.theme = 'light'
    } else {
      this.theme = 'dark'
    }
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
  }
}

export const states = new StatesStore()
