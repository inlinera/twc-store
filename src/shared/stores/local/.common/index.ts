import { action, makeObservable, observable } from 'mobx'

export const commonOptions = {
  addItem: action,
  removeItem: action,
}

const options = {
  items: observable,
  saveToStorage: action,
  loadFromStorage: action,
}

export class CommonStore<T> {
  private storageKey: string
  items: T[] = []

  constructor(storageKey: string) {
    makeObservable(this, options)
    this.storageKey = storageKey
    this.loadFromStorage()
  }

  saveToStorage = () => {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items))
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error)
    }
  }

  loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(this.storageKey)
      if (stored) {
        this.items = JSON.parse(stored)
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error)
      this.items = []
    }
  }
}
