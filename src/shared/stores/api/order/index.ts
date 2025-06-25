import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import type { IOrder } from '@/shared/interfaces/IOrder'

class OrderStore {
  orders: IOrder[] | null = null
  order: IOrder | null = {
    id: `547823`,
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'example@example.ru',
    phone: '800000000',
    address: 'Россия, г.Санкт-Петербург, улица Заставская, дом 22, к.2, лит. А, помещ. 303',
    region: 'Ленинградская область',
    city: 'Санкт-Петербург',
    postCode: '196006',
    products: {
      'Футболка Online Store': {
        id: '681fb35b1cad84bc5b9c8d6a',
        specification: {
          perple: {
            size: 'XL',
          },
        },
        count: 2,
      },
    },
    status: {
      'Заказ создан': '12.04.2025, 18:00',
    },
    price: 1000,
  }
  activeOrders: IOrder[] | null = null
  loading = false
  private api = `${import.meta.env.VITE_API_URL}/order`

  constructor() {
    makeAutoObservable(this)
  }

  createOrder = async (order: IOrder) => {
    this.loading = true
    try {
      const response = await axios.post<IOrder>(`${this.api}/create`, order)

      if (response.data) {
        this.order = response.data
        console.log(response.data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }

  getAllOrders = async () => {
    this.loading = true
    try {
      const response = await axios.get<IOrder[]>(`${this.api}/getallorders`)

      if (response.data) {
        this.orders = response.data
      }
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }

  getAllActiveOrders = async () => {
    this.loading = true
    try {
      const response = await axios.get<IOrder[]>(`${this.api}/getallactiveorders`)

      if (response.data) {
        this.activeOrders = response.data
      }
    } catch (error) {
      console.error(error)
    }
  }

  getOrder = async (id: string) => {
    this.loading = true
    try {
      const response = await axios.get<IOrder>(`${this.api}/getorder/${id}`)

      if (response.data) {
        this.order = response.data
      }
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}

export const order = new OrderStore()
