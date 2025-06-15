import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'

export const SeasonalDiscounts = ({ ...props }: IProduct) => {
  return (
    <div className={`${s.seasonalDiscount} df aic`}>
      <div className={`${s.leftBlock} df fdc aic`}>
        <p>Сезонные скидки</p>
        <h2>{props.title}</h2>
        <Button>
          смотреть <ArrowRight />
        </Button>
      </div>
      <div
        className={`${s.rightBlock} df`}
        style={
          {
            backgroundImage: `url(${props.images[0]})`,
          } as React.CSSProperties
        }
      />
    </div>
  )
}
