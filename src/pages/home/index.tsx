import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { ProductCarousel } from '@/entities/home/product-carousel'
import { products } from '../favorite'

export const HomePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(null)
  }, [])

  return (
    <div className={`${s.homePage}`}>
      <ProductCarousel products={products} />
    </div>
  )
})
