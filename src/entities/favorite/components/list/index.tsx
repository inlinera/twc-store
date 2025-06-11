import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { FavoriteItem } from '../item'

interface FavoriteListProps {
  products?: IProduct[]
}

export const FavoriteList = ({ products }: FavoriteListProps) => {
  return (
    <ul className={`${s.list} df fdc`}>
      {products
        ? products.map((p, id) => <FavoriteItem {...p} key={id} />)
        : 'Вы можете добавлять продукты в избранное'}
    </ul>
  )
}
