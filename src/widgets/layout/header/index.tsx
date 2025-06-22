import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { MapPinArea } from '@/shared/icons/mappinarea'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { User } from '@/shared/icons/User'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { cart } from '@/shared/stores/local/cart'
import { favorite } from '@/shared/stores/local/favorite'

export const Header = observer(() => {
  const { setTheme } = states
  const { items: cartItems } = cart
  const { items: favoriteItems } = favorite

  return (
    <header className={`${s.header} df aic`}>
      <div className={`${s.location} df aic`}>
        <button onClick={setTheme}>
          <Lamp />
        </button>
        <button className="df aic">
          <MapPinArea />
          <strong>Москва</strong>
        </button>
      </div>
      <HeaderLogo />
      <div className={`${s.routes} df aic`}>
        <Link to="/cart">
          <ShoppingCart />
          {cartItems.length > 0 && <span className={s.count}>{cartItems.length}</span>}
        </Link>
        <Link to="/favorite">
          <Heart />
          {favoriteItems.length > 0 && <span className={s.count}>{favoriteItems.length}</span>}
        </Link>
        <Link to="/">
          <User />
        </Link>
      </div>
    </header>
  )
})
