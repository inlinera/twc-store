import s from './index.module.scss'
import { CardPayBlock, CommentInfo, UserInformationForm } from '@/entities/buy'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useCallback, useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { CartBuyBlock } from '@/entities/cart'
import type { IOrder } from '@/shared/interfaces/IOrder'

export const BuyPage = observer(() => {
  const { setPath } = states

  const onSubmit = useCallback((data: IOrder) => {
    console.log(data)
  }, [])

  useEffect(() => {
    setPath(['Оформление заказа'])
  }, [])

  return (
    <div className="df fdc">
      <Breadcrumbs />
      <div className={`${s.buyPage} dg`}>
        <div className={`${s.buyInfo} df fdc`}>
          <h1>Информация для оформления заказа</h1>
          <UserInformationForm onSubmit={onSubmit} />
          <CardPayBlock />
        </div>
        <CartBuyBlock />
        <CommentInfo />
      </div>
    </div>
  )
})
