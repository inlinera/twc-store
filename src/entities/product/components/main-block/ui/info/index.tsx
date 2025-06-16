import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { isProductAvailable } from '@/shared/functions/isProductAvailable'
import { calculateDiscount } from '@/shared/functions/calculateDiscount'

export const ProductInfo = ({ ...props }: IProduct) => {
  const discount = calculateDiscount(props.oldPrice || 0, props.price)

  const isAvailable = isProductAvailable(props)

  return (
    <div className={`${s.info} df fdc`}>
      <h1>{props.title}</h1>
      <div className={`${s.gridInfo} dg`}>
        <p>
          Артикул: <b>{props.article}</b>
        </p>
        <p>
          Наличие: <b className={isAvailable ? s.green : s.gray}>{isAvailable ? 'В наличии' : 'Нет в наличии'}</b>
        </p>
        <p>
          Бренд: <strong>{props.brand}</strong>
        </p>
        <p>
          Категория: <b>{props.path[props.path.length - 1]}</b>
        </p>
      </div>
      <div className={`${s.price} df aic`}>
        <b>{props.price} ₽</b> {props.oldPrice && <s>{props.oldPrice} ₽</s>}
        {props.oldPrice && discount > 0 && <span className={s.discount}>Скидка {discount}%</span>}
      </div>
    </div>
  )
}
