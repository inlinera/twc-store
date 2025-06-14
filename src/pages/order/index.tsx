import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Input } from '@/shared/ui/input'
import { Info } from '@/shared/icons/info'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

export const OrderPage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(['Отследить заказ'])
  }, [])

  return (
    <div className="df fdc aic jcc" style={{ width: '70%' }}>
      <Breadcrumbs />
      <form className={`${s.orderPage} df fdc`}>
        <h1>Отслеживание заказа</h1>
        <p>Введите ID заказа и вашу электронную почту для получения данных</p>
        <div className={`${s.inputs} df aic`}>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>ID заказа</h3>
            <Input placeholder="ID..." />
          </div>
          <div className={`${s.inputTitle} df fdc`}>
            <h3>Email адрес</h3>
            <Input type="email" placeholder="Email address" />
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
