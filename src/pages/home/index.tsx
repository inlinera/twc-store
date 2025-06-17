import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import {
  ProductCarousel,
  HomeBigProduct,
  HomeProduct,
  HomeInfo,
  ProductPreview,
  SeasonalDiscounts,
} from '@/entities/home/'
import { products } from '../favorite'

export const HomePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(null)
  }, [])

  return (
    <div className={`${s.homePage} df fdc`}>
      <div className={`${s.upperBlock} dg`}>
        <ProductCarousel products={products} />
        <div className={`${s.goods} df fdc`}>
          <SeasonalDiscounts {...products[0]} />
          <ProductPreview {...products[1]} />
        </div>
      </div>
      <HomeInfo />
      <div className={`${s.products} dg aic`}>
        <HomeBigProduct {...products[0]} />
        <div className={`${s.productsList} dg`}>
          {Array.from({ length: 8 }, () => (
            <HomeProduct {...products[0]} />
          ))}
        </div>
      </div>
    </div>
  )
})
