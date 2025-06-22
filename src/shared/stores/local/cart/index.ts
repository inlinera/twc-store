import { action, makeObservable } from 'mobx'
import type { IProduct } from '@/shared/interfaces/IProduct'
import { CommonStore, commonOptions } from '../.common'

export interface CartItem extends IProduct {
  color: string
  size: string
  count: number
}

const CART_STORAGE_KEY = 'twc-cart'

const options = {
  updateItemCount: action,
  getItemMaxCount: action,
  getAvailableQuantity: action,
  ...commonOptions,
}

class CartStore extends CommonStore<CartItem> {
  constructor() {
    super(CART_STORAGE_KEY)
    makeObservable(this, options)
  }

  addItem = (product: IProduct, color: string, size: string, count: number) => {
    const existingItem = this.items.find(
      item => item.title === product.title && item.color === color && item.size === size
    )

    if (existingItem) {
      existingItem.count += count
    } else {
      this.items.push({
        ...product,
        color,
        size,
        count,
      })
    }
    this.saveToStorage()
  }

  removeItem = (id: string, color: string, size: string) => {
    this.items = this.items.filter(item => !(item._id === id && item.color === color && item.size === size))
    this.saveToStorage()
  }

  updateItemCount = (id: string, count: number) => {
    const item = this.items.find(item => item._id === id)
    if (item) {
      item.count = count
      this.saveToStorage()
    }
  }

  getItemMaxCount = (product: IProduct, color: string, size: string) => {
    if (!product?.specifications?.color?.[color as keyof typeof product.specifications.color]?.size?.[size]) {
      return 0
    }
    const maxCount = product.specifications.color[color as keyof typeof product.specifications.color].size[size]
    return maxCount
  }

  getAvailableQuantity = (product: IProduct, color: string, size: string) => {
    const maxCount = this.getItemMaxCount(product, color, size)
    const existingItem = this.items.find(
      item => item.title === product.title && item.color === color && item.size === size
    )
    return maxCount - (existingItem?.count || 0)
  }

  getTotalPrice = () => {
    const subtotal = this.items.reduce((total, item) => {
      const itemTotal = item.oldPrice ? item.oldPrice * item.count : item.price * item.count
      return total + itemTotal
    }, 0)

    const discountedTotal = this.items.reduce((total, item) => {
      return total + item.price * item.count
    }, 0)

    const discount = subtotal - discountedTotal
    const tax = 100 // Фиксированный налог
    const total = discountedTotal + tax

    return {
      subtotal,
      discount,
      tax,
      total,
    }
  }
}

export const cart = new CartStore()
