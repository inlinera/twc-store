import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { Medal } from '@/shared/icons/Medal'
import { Truck } from '@/shared/icons/Truck'
import { HandShake } from '@/shared/icons/HandShake'
import { Headphones } from '@/shared/icons/Headphones'
import { CreditCard } from '@/shared/icons/CreditCard'

export const ProductDescription = ({ subtitle }: Pick<IProduct, 'subtitle'>) => {
  return (
    <div className={`${s.description} dg`}>
      <div className={`${s.description__info} df fdc`}>
        <h3>Описание</h3>
        <p dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
      <div className={`${s.info} df fdc`}>
        <h3>Особенности</h3>
        <p>
          <Medal /> 1 год гарантии
        </p>
        <p>
          <Truck /> Бесплатная доставка
        </p>
        <p>
          <HandShake /> 100% возврат средств по гарантии
        </p>
        <p>
          <Headphones /> 24/7 поддержка
        </p>
        <p>
          <CreditCard /> Защищенная оплата
        </p>
      </div>
    </div>
  )
}
