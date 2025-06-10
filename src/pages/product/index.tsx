import { MainProductBlock } from '@/entities/product/components/main-block'
import type { IProduct } from '@/shared/interfaces/IProduct'

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
    Цвет: 'Фиолетовый, Черный, Белый',
    Размеры: 'XS, S, M, L, XL, XXL',
    Количество: '10 шт. каждого размера',
  },
  images: Array.from(
    { length: 10 },
    () => 'https://goods-photos.static1-sima-land.com/items/8054308/2/1600.jpg?v=1722954783'
  ),
} as IProduct

export const ProductPage = () => {
  return (
    <div>
      <MainProductBlock {...product} />
    </div>
  )
}
