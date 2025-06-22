import s from './index.module.scss'
import { FavoriteItem } from '../item'
import { favorite } from '@/shared/stores/local/favorite'
import { observer } from 'mobx-react-lite'

export const FavoriteList = observer(() => {
  const { items } = favorite

  return (
    <ul className={`${s.list} df fdc`}>
      {items.length > 0
        ? items.map((p, id) => <FavoriteItem {...p} key={id} />)
        : 'Вы можете добавлять продукты в избранное'}
    </ul>
  )
})
