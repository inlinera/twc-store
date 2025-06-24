import { CartList, CartBuyBlock } from '@/entities/cart/'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { cart } from '@/shared/stores/local/cart'

const CartPage = observer(() => {
  const { items } = cart
  const { setPath, setBuyInfo } = states

  useEffect(() => {
    setPath(['Корзина'])
    setBuyInfo(null)
  }, [])

  return (
    <div className="df fdc" style={{ width: '100%' }}>
      <Breadcrumbs />
      <div className={`${s.cartPage} dg`}>
        <CartList />
        <CartBuyBlock products={items} />
      </div>
    </div>
  )
})

export default CartPage
