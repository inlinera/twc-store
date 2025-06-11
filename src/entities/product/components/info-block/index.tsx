import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { ProductInfoHeader } from './ui/header'
import { ProductDescription } from './ui/description'

export const ProductInfoBlock = ({ ...props }: IProduct) => {
  return (
    <div className={`${s.infoBlock} df fdc aic`}>
      <ProductInfoHeader />
      <div className={s.info}>
        <ProductDescription subtitle={props.subtitle} />
      </div>
    </div>
  )
}
