import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'

export const ProductPrice = ({ oldPrice, price }: Pick<IProduct, 'oldPrice' | 'price'>) => {
  return (
    <div className={`${s.price} df aic`}>
      {oldPrice && <s>{oldPrice} ₽</s>}
      <span>{price} ₽</span>
    </div>
  )
}
