import { UserInformationForm } from '@/entities/buy/components/information'
import { auth } from '@/shared/stores/api/auth'
import { useCallback } from 'react'
import type { IUser } from '@/shared/interfaces/IUser'
import type { IOrder } from '@/shared/interfaces/IOrder'
import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const RegisterPage = observer(() => {
  const navigate = useNavigate()
  const { register: registerUser } = auth

  const onSubmit = useCallback(
    (data: IOrder) => {
      const user: Omit<IUser, 'id'> = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: Number(data.phone),
        address: data.address,
        region: data.region,
        city: data.city,
        postCode: data.postCode,
      }

      registerUser(user)
      navigate('/')
    },
    [navigate, registerUser]
  )

  return (
    <div className={`${s.register} df fdc jcc aic`}>
      <h1>Регистрация</h1>
      <UserInformationForm onSubmit={onSubmit} isRegistration />
    </div>
  )
})

export default RegisterPage
