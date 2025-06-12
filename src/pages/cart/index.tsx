import { CartList } from '@/entities/cart/components/list'
import s from './index.module.scss'

export const CartPage = () => {
  return (
    <div className={`${s.cartPage} df aic`}>
      <CartList />
    </div>
  )
}
