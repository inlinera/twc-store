import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { MapPinArea } from '@/shared/icons/mappinarea'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { User } from '@/shared/icons/User'

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
        <button>
          <ShoppingCart />
        </button>
        <button>
          <Heart />
        </button>
        <button>
          <User />
        </button>
      </div>
    </header>
  )
}
