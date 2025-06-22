import { makeAutoObservable } from 'mobx'
import type { IProduct } from '@/shared/interfaces/IProduct'
import axios from 'axios'

class ProductsStore {
  items: IProduct[] | null = null
  loading = false
  private api = `${import.meta.env.VITE_API_URL}/product`

  constructor() {
    makeAutoObservable(this)
  }

  getProducts = async () => {
    this.loading = true
    try {
      const response = await axios.get<IProduct[]>(`${this.api}/getallproducts`)
      this.items = response.data
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }

  getProductById = async (id: string) => {
    this.loading = true
    try {
      const response = await axios.get<IProduct>(`${this.api}/getproduct/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}

export const products = new ProductsStore()
