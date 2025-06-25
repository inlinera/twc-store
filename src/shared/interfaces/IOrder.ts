import type { ColorT } from './IProduct'

type OrderStatus =
  | 'Заказ создан'
  | 'Заказ оплачен и подтверждён администратором'
  | 'Заказ успешно отправлен'
  | 'Заказ поступил в город получателя'
  | 'Заказ у Курьера'
  | 'Заказ вручен! Спасибо за покупку'

export type IOrderStatus = {
  [key in OrderStatus]?: string
}

export interface IOrderProduct {
  id: string
  specification: {
    [key in ColorT]?: {
      size: string
    }
  }
  count: number
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
