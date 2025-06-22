import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { XCircle } from '@/shared/icons/XCircle'
import { Counter } from '@/shared/ui/counter'
import { cart, type CartItem as CartItemType } from '@/shared/stores/local/cart'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'
import { Link } from 'react-router-dom'

export const CartItem = observer(({ color, size, count, ...product }: CartItemType) => {
  const { updateItemCount, removeItem, getItemMaxCount } = cart

  const maxValue = getItemMaxCount(product, color, size) ?? 0
  const isAvailable = isProductAvailable(product, color, size)

  return (
    <li className={`${s.item} dg aic`}>
      <div className={`${s.title} df aic`}>
        <button
          onClick={() => removeItem(product._id, color, size)}
          className={!isAvailable ? s.disabled : ''}
          disabled={!isAvailable}
        >
          <XCircle />
        </button>
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0]} alt={`${product.brand} Image`} />
          <h3>{product.title}</h3>
        </Link>
      </div>
      <div className={`${s.price} df aic`}>
        {product.oldPrice && <s>{product.oldPrice} ₽</s>} <span>{product.price} ₽</span>
      </div>
      <div className={s.counter}>
        <Counter
          onChange={newCount => updateItemCount(product._id, newCount)}
          value={count}
          minValue={1}
          maxValue={maxValue}
        />
      </div>
      <div>{product.price * count} ₽</div>
    </li>
  )
})
