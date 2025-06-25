import type { IUser } from '@/shared/interfaces/IUser'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

class UserStore {
  users: IUser[] | null = null
  loading = false
  private api = `${import.meta.env.VITE_API_URL}/user`

  constructor() {
    makeAutoObservable(this)
  }

  getAllUsers = async () => {
    this.loading = true
    try {
      const response = await axios.get<IUser[]>(`${this.api}/getallusers`)

      if (response.data) {
        this.users = response.data
      }
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}

export const users = new UserStore()
