import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'
import { Button } from '@/shared/ui/button'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { observer } from 'mobx-react-lite'
import { XCircle } from '@/shared/icons/XCircle'

export const FavoriteItem = observer(({ ...props }: IProduct) => {
  const isAvailable = isProductAvailable(props)

  return (
    <li className={`${s.item} dg aic`}>
      <div className={`${s.title} df aic`}>
        <img src={props.images[0]} alt={`${props.brand} Image`} />
        <h3>{props.title}</h3>
      </div>
      <div className={`${s.price} df aic`}>
        {props.oldPrice && <s>{props.oldPrice} ₽</s>} <span>{props.price} ₽</span>
      </div>
      <b className={isAvailable ? s.green : s.red}>{isAvailable ? 'В наличии' : 'Нет в наличии'}</b>
      <div className="df aic" style={{ gap: 5 }}>
        <Button disabled={!isAvailable} style={{ gap: 10 }}>
          ADD TO CARD <ShoppingCart />
        </Button>
        <button>
          <XCircle />
        </button>
      </div>
    </li>
  )
})
