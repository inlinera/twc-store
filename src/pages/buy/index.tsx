import s from './index.module.scss'
import { CardPayBlock, CommentInfo, InformationBuy } from '@/entities/buy'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { CartBuyBlock } from '@/entities/cart'

export const BuyPage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(['Оформление заказа'])
  }, [])

  return (
    <div className="df fdc">
      <Breadcrumbs />
      <div className={`${s.buyPage} dg`}>
        <div className={`${s.buyInfo} df fdc`}>
          <h1>Информация для оформления заказа</h1>
          <InformationBuy />
          <CardPayBlock />
        </div>
        <CartBuyBlock />
        <CommentInfo />
      </div>
    </div>
  )
})
