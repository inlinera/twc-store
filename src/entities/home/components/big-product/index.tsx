import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { ProductRating } from '@/entities/product/components/main-block/ui/rates'
import { ProductPrice } from '@/shared/ui/product-price'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { Button } from '@/shared/ui/button'
import { ShoppingCart } from '@/shared/icons/ShoppingCart'
import { Heart } from '@/shared/icons/Heart'
import { Eye } from '@/shared/icons/Eye'
import { cart } from '@/shared/stores/local/cart'
import { useNavigate } from 'react-router-dom'
import { calculateDiscount } from '@/shared/functions/calculateDiscount'
import { favorite } from '@/shared/stores/local/favorite'

export const HomeBigProduct = observer(({ oldPrice, ...props }: IProduct) => {
  const { theme } = states
  const { items } = cart
  const { addItem, removeItem, items: favoriteItems } = favorite
  const navigate = useNavigate()

  const discount = calculateDiscount(oldPrice || 0, props.price)

  const isInCart = items.some(item => item._id === props._id)
  const isInFavorite = favoriteItems.some(item => item._id === props._id)

  return (
    <div
      className={`${s.bigProduct} df fdc`}
      style={theme === 'dark' ? { border: '1px solid var(--purple-color)' } : {}}
      onClick={() => navigate(`/product/${props._id}`)}
    >
      {discount > 0 && <div className={`${s.discount} df aic jcc`}>{discount}%</div>}
      <div className={`${s.hot} df aic jcc`}>hot</div>
      <img src={props.images[0]} alt={props.title} />
      <div className={`${s.metaProduct} df fdc`}>
        <ProductRating showRating={false} color={'var(--light-gray-color)'} />
        <h3>{props.title}</h3>
        <ProductPrice oldPrice={oldPrice} price={props.price} />
        <p>{props.title}. Мода и стиль.</p>
      </div>
      <div className="dg aic" onClick={e => e.stopPropagation()}>
        <Button onClick={() => (isInFavorite ? removeItem(props._id) : addItem(props))}>
          <Heart filled={isInFavorite} />
        </Button>
        <Button onClick={() => (isInCart ? navigate('/cart') : navigate(`/product/${props._id}`))}>
          <ShoppingCart /> {isInCart ? 'добавлено' : 'добавить'}
        </Button>
        <Button onClick={() => navigate(`/product/${props._id}`)}>
          <Eye />
        </Button>
      </div>
    </div>
  )
})
