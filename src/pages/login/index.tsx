import { auth } from '@/shared/stores/api/auth'
import s from './index.module.scss'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IUser } from '@/shared/interfaces/IUser'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'

export const LoginPage = observer(() => {
  const { register, handleSubmit } = useForm<Pick<IUser, 'email' | 'phone'>>()
  const { login: loginUser, user } = auth
  const navigate = useNavigate()

  const onSubmit = useCallback(
    (data: Pick<IUser, 'email' | 'phone'>) => {
      loginUser(data)
    },
    [loginUser]
  )

  if (user) return navigate('/')

  return (
    <div className={`${s.login} df fdc jcc aic`}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="df fdc jcc aic">
        <div className={`${s.input} df fdc`}>
          <h3>Email</h3>
          <Input placeholder="Email" {...register('email', { required: true })} />
        </div>
        <div className={`${s.input} df fdc`}>
          <h3>Phone</h3>
          <Input placeholder="Phone" {...register('phone', { required: true })} />
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  )
})
