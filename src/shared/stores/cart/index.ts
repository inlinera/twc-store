import { makeAutoObservable } from 'mobx'
import type { IProduct } from '@/shared/interfaces/IProduct'

interface CartItem {
  id: string
  product: IProduct
  color: string
  size: string
  count: number
}

class CartStore {
  items: CartItem[] = []

  constructor() {
    makeAutoObservable(this, {
      addItem: true,
      removeItem: true,
      updateItemCount: true,
      getItemMaxCount: true,
      getAvailableQuantity: true,
      getTotalPrice: true,
    })
  }

  addItem = (product: IProduct, color: string, size: string, count: number) => {
    const existingItem = this.items.find(
      item => item.product.title === product.title && item.color === color && item.size === size
    )

    if (existingItem) {
      existingItem.count += count
    } else {
      this.items.push({
        id: Math.random().toString(36).substr(2, 9),
        product,
        color,
        size,
        count,
      })
    }
  }

  removeItem = (id: string) => {
    this.items = this.items.filter(item => item.id !== id)
  }

  updateItemCount = (id: string, count: number) => {
    const item = this.items.find(item => item.id === id)
    if (item) {
      item.count = count
    }
  }

  getItemMaxCount = (product: IProduct, color: string, size: string) => {
    return product.specifications.color[color as keyof typeof product.specifications.color].size[size]
  }

  getAvailableQuantity = (product: IProduct, color: string, size: string) => {
    const maxCount = this.getItemMaxCount(product, color, size)
    const existingItem = this.items.find(
      item => item.product.title === product.title && item.color === color && item.size === size
    )
    return maxCount - (existingItem?.count || 0)
  }

  getTotalPrice = () => {
    const subtotal = this.items.reduce((total, item) => {
      const itemTotal = item.product.oldPrice
        ? item.product.oldPrice * item.count
        : item.product.price * item.count
      return total + itemTotal
    }, 0)

    const discountedTotal = this.items.reduce((total, item) => {
      return total + item.product.price * item.count
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
