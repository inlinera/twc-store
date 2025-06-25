import { auth } from '@/shared/stores/api/auth'
import s from './index.module.scss'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IUser } from '@/shared/interfaces/IUser'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'

const LoginPage = observer(() => {
  const { register, handleSubmit } = useForm<Pick<IUser, 'id'>>()
  const { login: loginUser, user } = auth
  const navigate = useNavigate()

  const onSubmit = useCallback(
    (data: Pick<IUser, 'id'>) => {
      loginUser(data)
    },
    [loginUser]
  )

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  return (
    <div className={`${s.login} df fdc jcc aic`}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="df fdc jcc aic">
        <div className={`${s.input} df fdc`}>
          <h3>Your ID</h3>
          <Input placeholder="ID..." {...register('id', { required: true })} />
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  )
})

export default LoginPage
