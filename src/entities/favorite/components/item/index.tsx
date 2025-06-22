import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'
import { Button } from '@/shared/ui/button'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { observer } from 'mobx-react-lite'
import { XCircle } from '@/shared/icons/XCircle'
import { Link } from 'react-router-dom'
import { favorite } from '@/shared/stores/local/favorite'

export const FavoriteItem = observer(({ ...props }: IProduct) => {
  const { removeItem } = favorite

  const isAvailable = isProductAvailable(props)

  return (
    <li className={`${s.item} dg aic`}>
      <Link to={`/product/${props._id}`} className={`${s.title} df aic`}>
        <img src={props.images[0]} alt={`${props.brand} Image`} />
        <h3>{props.title}</h3>
      </Link>
      <div className={`${s.price} df aic`}>
        {props.oldPrice && <s>{props.oldPrice} ₽</s>} <span>{props.price} ₽</span>
      </div>
      <b className={isAvailable ? s.green : s.red}>{isAvailable ? 'В наличии' : 'Нет в наличии'}</b>
      <div className="df aic" style={{ gap: 5 }}>
        <Button disabled={!isAvailable} style={{ gap: 10 }}>
          ADD TO CARD <ShoppingCart />
        </Button>
        <button onClick={() => removeItem(props._id)}>
          <XCircle />
        </button>
      </div>
    </li>
  )
})
