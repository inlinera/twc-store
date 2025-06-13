import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { XCircle } from '@/shared/icons/XCircle'
import { Counter } from '@/shared/ui/counter'
import { cart } from '@/shared/stores/cart'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'

interface CartItemProps {
  id: string
  product: IProduct
  color: string
  size: string
  count: number
}

export const CartItem = observer(({ id, product, color, size, count }: CartItemProps) => {
  const handleCountChange = (newCount: number) => {
    cart.updateItemCount(id, newCount)
  }

  const handleRemove = () => {
    cart.removeItem(id)
  }

  const maxValue = cart.getItemMaxCount(product, color, size)
  const isAvailable = isProductAvailable(product, color, size)

  return (
    <li className={`${s.item} dg aic`}>
      <div className={`${s.title} df aic`}>
        <button onClick={handleRemove} className={!isAvailable ? s.disabled : ''} disabled={!isAvailable}>
          <XCircle />
        </button>
        <img src={product.images[0]} alt={`${product.brand} Image`} />
        <h3>{product.title}</h3>
      </div>
      <div className={`${s.price} df aic`}>
        {product.oldPrice && <s>{product.oldPrice} ₽</s>} <span>{product.price} ₽</span>
      </div>
      <div className={s.counter}>
        <Counter value={count} onChange={handleCountChange} maxValue={maxValue} />
      </div>

      <div className="df aic" style={{ gap: 5 }}>
        {count * product.price} ₽
      </div>
    </li>
  )
})
