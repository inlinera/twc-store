import { makeObservable } from 'mobx'
import type { IProduct } from '@/shared/interfaces/IProduct'
import { CommonStore, commonOptions } from '../.common'

const FAVORITE_STORAGE_KEY = 'twc-favorite'

class FavoriteStore extends CommonStore<IProduct> {
  constructor() {
    super(FAVORITE_STORAGE_KEY)
    makeObservable(this, commonOptions)
  }

  addItem = (product: IProduct) => {
    if (this.items.find(item => item._id === product._id)) return
    this.items.push(product)
    this.saveToStorage()
  }

  removeItem = (id: string) => {
    this.items = this.items.filter(item => !(item._id === id))
    this.saveToStorage()
  }
}

export const favorite = new FavoriteStore()
