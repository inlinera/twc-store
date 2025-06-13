import { InformationBuy } from '@/entities/buy/components/information'
import s from './index.module.scss'
import { CardPayBlock } from '@/entities/buy/components/pay'
import { CartBuyBlock } from '@/entities/cart/components/buy'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { CommentInfo } from '@/entities/buy/components/comment-info'

export const BuyPage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(['Оформление заказа'])
  }, [])

  return (
    <div className={`${s.buyPage} dg`}>
      <div className={`${s.buyInfo} df fdc`}>
        <h1>Информация для оформления заказа</h1>
        <InformationBuy />
        <CardPayBlock />
      </div>
      <CartBuyBlock />
      <CommentInfo />
    </div>
  )
})
