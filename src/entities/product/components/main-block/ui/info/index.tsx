import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'

export const ProductInfo = ({ ...props }: IProduct) => {
  const isAvailable = true

  const calculateDiscount = (oldPrice: number, currentPrice: number): number => {
    if (!oldPrice || oldPrice <= currentPrice) return 0
    return Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
  }

  const discount = calculateDiscount(props.oldPrice || 0, props.price)

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
