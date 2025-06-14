import { makeAutoObservable } from 'mobx'

class StatesStore {
  constructor() {
    makeAutoObservable(this)
  }

  path = null as string[] | null
  setPath = (v: string[] | null) => (this.path = v)

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
