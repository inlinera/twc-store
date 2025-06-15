import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'

export const ProductPreview = ({ ...props }: IProduct) => {
  return (
    <div className={`${s.productPreview} df aic`}>
      <div
        className={s.leftBlock}
        style={
          {
            backgroundImage: `url(${props.images[0]})`,
          } as React.CSSProperties
        }
      />
      <div className={`${s.rightBlock} df fdc aic`}>
        <h2>{props.title}</h2>
        <Button>
          смотреть <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
