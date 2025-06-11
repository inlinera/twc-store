import { makeAutoObservable } from 'mobx'

class StatesStore {
  constructor() {
    makeAutoObservable(this)
  }

  path = null as string[] | null
  setPath = (v: string[] | null) => (this.path = v)
}

export const states = new StatesStore()
