import { observer } from 'mobx-react-lite'
import { favorite } from '@/shared/stores/local/favorite'
import { Heart } from '@/shared/icons/Heart'
import type { IProduct } from '@/shared/interfaces/IProduct'

export const AddToFavorite = observer(({ ...product }: IProduct) => {
  const { items, addItem, removeItem } = favorite

  const isInFavorite = items.find(item => item._id === product._id)

  return (
    <button className={`df aic`} onClick={() => (isInFavorite ? removeItem(product._id) : addItem(product))}>
      {isInFavorite ? <Heart filled /> : <Heart />}
      {isInFavorite ? 'В избранном' : 'Добавить в избранное'}
    </button>
  )
})
