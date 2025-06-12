import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { MapPinArea } from '@/shared/icons/mappinarea'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { User } from '@/shared/icons/User'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={`${s.header} df aic`}>
      <div className={`${s.location} df aic`}>
        <Lamp />
        <div className="df aic">
          <MapPinArea />
          <strong>Москва</strong>
        </div>
      </div>
      <HeaderLogo />
      <div className={`${s.routes} df aic`}>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
        <Link to="/favorite">
          <Heart />
        </Link>
        <Link to="/">
          <User />
        </Link>
      </div>
    </header>
  )
}
