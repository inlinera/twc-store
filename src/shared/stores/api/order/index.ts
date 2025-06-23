import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import type { IOrder } from '@/shared/interfaces/IOrder'

class OrderStore {
  order: IOrder | null = null
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

  getOrder = async (id: string) => {
    this.loading = true
    try {
      const response = await axios.get<IOrder>(`${this.api}/getorder/${id}`)

      if (response.data) {
        this.order = response.data
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const order = new OrderStore()
