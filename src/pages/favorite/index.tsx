import { FavoriteList } from '@/entities/favorite/'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

export const products = [
  {
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
  },
  {
    title: 'Футболка JDFLAG',
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
            XS: 0,
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0,
          },
        },
        black: {
          size: {
            XS: 0,
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0,
          },
        },
        white: {
          size: {
            XS: 0,
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0,
          },
        },
      },
    },
    images: Array.from(
      { length: 10 },
      () => 'https://goods-photos.static1-sima-land.com/items/8054308/2/1600.jpg?v=1722954783'
    ),
  },
]

export const FavoritePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(['Избранное'])
  }, [])

  return (
    <div className="df fdc">
      <Breadcrumbs />
      <div className={`${s.favoritePage} df fdc`}>
        <h1>Избранное</h1>
        <div className={`${s.info} dg aic`}>
          <span>Продукт</span>
          <span>Цена</span>
          <span>Наличие</span>
          <span>Действие</span>
        </div>
        <FavoriteList products={products} />
      </div>
    </div>
  )
})
