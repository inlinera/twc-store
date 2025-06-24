import Cookies from 'js-cookie'
import type { IUser } from '@/shared/interfaces/IUser'
import { useState } from 'react'

export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  const user = Cookies.get('user')

  if (user) {
    const userData = JSON.parse(user) as IUser

    console.log(userData)

    if (
      userData.email !== import.meta.env.VITE_ADMIN_EMAIL &&
      userData.phone !== import.meta.env.VITE_ADMIN_PHONE
    ) {
      setIsAdmin(false)
    } else {
      setIsAdmin(true)
    }
  }

  return true
}
