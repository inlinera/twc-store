import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { ProductImageCarousel } from './ui/image-carousel'
import { ProductRating } from './ui/rates'
import { ProductInfo } from './ui/info'
import { ProductParams } from './ui/params'

export const MainProductBlock = ({ ...props }: IProduct) => {
  return (
    <div className={`${s.mainBlock} dg`}>
      <ProductImageCarousel images={props.images} />
      <div className="df fdc">
        <ProductRating />
        <ProductInfo {...props} />
        <ProductParams {...props} />
      </div>
    </div>
  )
}
