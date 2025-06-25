import { makeAutoObservable } from 'mobx'
import type { IUser } from '@/shared/interfaces/IUser'
import axios from 'axios'
import Cookies from 'js-cookie'

class AuthStore {
  user: IUser | null = null
  loading = false
  private api = `${import.meta.env.VITE_API_URL}/user`

  constructor() {
    makeAutoObservable(this)
    this.checkAuth()
  }

  checkAuth = () => {
    const userFromCookie = Cookies.get('user')

    if (userFromCookie) {
      this.user = JSON.parse(userFromCookie)
    }
  }

  register = async (user: IUser) => {
    this.loading = true
    try {
      const response = await axios.post<IUser>(`${this.api}/create`, user)

      if (response.data) {
        this.user = response.data
        Cookies.set('user', JSON.stringify(this.user), { expires: 30 })
      }

      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }

  login = async (user: Pick<IUser, 'id'>) => {
    this.loading = true
    try {
      const response = await axios.post(`${this.api}/getuserbyid/${user.id}`)

      if (response.data) {
        this.user = response.data
        Cookies.set('user', JSON.stringify(this.user), { expires: 30 })
      }

      return response.data
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }
}

export const auth = new AuthStore()
