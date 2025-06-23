import type { ColorT } from './IProduct'

export interface IOrderProduct {
  id: string
  specification: {
    [key in ColorT]?: {
      size: string
    }
  }
  count: number
}

export interface IOrderStatus {
  [key: string]: string
}

export interface IOrder {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  region: string
  city: string
  postCode: string
  products: IOrderProduct[]
  status: IOrderStatus
  price: number
  company?: string
}
