import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { ProductCarousel } from '@/entities/home/product-carousel'
import { products } from '../favorite'
import { SeasonalDiscounts } from '@/entities/home/seasonal-dicsounts'
import { ProductPreview } from '@/entities/home/product-preview'

export const HomePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(null)
  }, [])

  return (
    <div className={`${s.homePage}`}>
      <div className={`${s.upperBlock} dg`}>
        <ProductCarousel products={products} />
        <div className={`${s.goods} df fdc`}>
          <SeasonalDiscounts {...products[0]} />
          <ProductPreview {...products[1]} />
        </div>
      </div>
    </div>
  )
})
