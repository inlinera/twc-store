import { CartList } from '@/entities/cart/components/list'
import s from './index.module.scss'
import { CartBuyBlock } from '@/entities/cart/components/buy'
import { cart } from '@/shared/stores/cart'
import { products } from '../favorite'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'

export const CartPage = observer(() => {
  const { items } = cart
  const { setPath } = states

  useEffect(() => {
    setPath(['Корзина'])
  }, [])

  return (
    <div className={`${s.cartPage} dg`}>
      <CartList />
      <CartBuyBlock />
    </div>
  )
})
