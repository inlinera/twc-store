import { CartList, CartBuyBlock } from '@/entities/cart/'
import s from './index.module.scss'
import { cart } from '@/shared/stores/cart'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

export const CartPage = observer(() => {
  const { items } = cart
  const { setPath } = states

  useEffect(() => {
    setPath(['Корзина'])
  }, [])

  return (
    <div className="df fdc" style={{ width: '100%' }}>
      <Breadcrumbs />
      <div className={`${s.cartPage} dg`}>
        <CartList />
        <CartBuyBlock />
      </div>
    </div>
  )
})
