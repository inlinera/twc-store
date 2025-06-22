import { cart } from '@/shared/stores/local/cart'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'
import { useNavigate } from 'react-router-dom'
import { states } from '@/shared/stores/states'
import { BuyList } from './item'
import type { CartItem } from '@/shared/stores/local/cart'

interface CartBuyBlockProps {
  products?: CartItem[] | null
}

export const CartBuyBlock = observer(({ products = null }: CartBuyBlockProps) => {
  const { setBuyInfo } = states
  const { getTotalPrice } = cart
  const navigate = useNavigate()
  const totals = getTotalPrice()

  const handleBuy = () => {
    setBuyInfo(products)
    navigate('/order/buy')
  }

  return (
    <div className={`${s.block} df fdc`}>
      <h2>{products ? 'Заказ' : 'Итого'}</h2>
      <BuyList />
      <div className={s.row}>
        <p>Продуктов на</p>
        <span>{totals.subtotal} ₽</span>
      </div>
      <div className={s.row}>
        <p>Доставка</p>
        <span>Бесплатно</span>
      </div>
      <div className={s.row}>
        <p>Скидка</p>
        <span>{totals.discount} ₽</span>
      </div>
      <div className={s.row}>
        <p>Налог</p>
        <span>{totals.tax} ₽</span>
      </div>
      <div className={`${s.row} ${s.total}`}>
        <p>Итого</p>
        <b>{totals.total} ₽</b>
      </div>
      <Button onClick={handleBuy}>
        {products ? 'Оформить заказ' : 'Оплатить и заказать'} <ArrowRight />
      </Button>
    </div>
  )
})
