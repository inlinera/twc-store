import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Input } from '@/shared/ui/input'
import { Info } from '@/shared/icons/info'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { useForm } from 'react-hook-form'
import { order } from '@/shared/stores/api/order'
import type { IOrder } from '@/shared/interfaces/IOrder'

export const OrderPage = observer(() => {
  const { setPath } = states
  const { register, handleSubmit } = useForm<Pick<IOrder, 'id' | 'email'>>()
  const { order: orderData, getOrder } = order

  useEffect(() => {
    setPath(['Отследить заказ'])
  }, [])

  const onSubmit = (data: Pick<IOrder, 'id' | 'email'>) => {
    getOrder(data.id).then(() => console.log(orderData))
  }

  return (
    <div className="df fdc aic jcc" style={{ width: '70%' }}>
      <Breadcrumbs />
      <form className={`${s.orderPage} df fdc`} onSubmit={handleSubmit(onSubmit)}>
        <h1>Отслеживание заказа</h1>
        <p>Введите ID заказа и вашу электронную почту для получения данных</p>
        <div className={`${s.inputs} df aic`}>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>ID заказа</h3>
            <Input placeholder="ID..." {...register('id')} />
          </div>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>Email адрес</h3>
            <Input type="email" placeholder="Email address" {...register('email')} />
          </div>
        </div>
        <p className={`${s.info} df aic`}>
          <Info /> ID заказа был отправлен вам на почту
        </p>
        <Button>
          Отследить <ArrowRight />
        </Button>
      </form>
    </div>
  )
})
