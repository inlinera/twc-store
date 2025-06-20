import { ProductInfoBlock, MainProductBlock } from '@/entities/product/'
import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

const product = {
  title: 'Футболка OnlineStore',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia odit numquam eius et ipsa expedita sunt, voluptate dolorum quis, consequuntur molestias natus recusandae! Voluptate reiciendis nostrum consequatur libero odio?<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia odit numquam eius et ipsa expedita sunt, voluptate dolorum quis, consequuntur molestias natus recusandae! Voluptate reiciendis nostrum consequatur libero odio?',
  article: 'A264671',
  brand: 'Tutorial',
  oldPrice: 1500,
  price: 750,
  path: ['Магазин', 'Мужская одежда', 'Футболки'],
  specifications: {
    color: {
      perple: {
        size: {
          XS: 10,
          S: 10,
          M: 10,
          L: 10,
          XL: 10,
          XXL: 10,
        },
      },
      black: {
        size: {
          XS: 10,
          S: 10,
          M: 10,
          L: 10,
          XL: 10,
          XXL: 10,
        },
      },
      white: {
        size: {
          XS: 10,
          S: 10,
          M: 10,
          L: 10,
          XL: 10,
          XXL: 10,
        },
      },
    },
  },
  images: Array.from(
    { length: 10 },
    () => 'https://goods-photos.static1-sima-land.com/items/8054308/2/1600.jpg?v=1722954783'
  ),
} as IProduct

export const ProductPage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath([...product.path, product.title])
  }, [])

  return (
    <div className="df fdc">
      <Breadcrumbs />
      <div className={`${s.productPage} df fdc`}>
        <MainProductBlock {...product} />
        <ProductInfoBlock {...product} />
      </div>
    </div>
  )
})
