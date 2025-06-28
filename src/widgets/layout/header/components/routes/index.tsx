import { observer } from 'mobx-react-lite'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingCart } from '@/shared/icons/ShoppingCart'
import { Heart } from '@/shared/icons/Heart'
import { User } from '@/shared/icons/User'
import { UserButton } from '../../ui/user-button'
import { cart } from '@/shared/stores/local/cart'
import { favorite } from '@/shared/stores/local/favorite'
import { useState } from 'react'
import s from './index.module.scss'
import { ChartBar } from '@/shared/icons/ChartBar'
import { Users } from '@/shared/icons/Users'
import { Gauge } from '@/shared/icons/Gauge'
import { Warehouse } from '@/shared/icons/Warehouse'
import { Files } from '@/shared/icons/Files'
import { useIsAdmin } from '@/shared/hooks/admin/isAdmin'

export const Routes = observer(() => {
  const { items: cartItems } = cart
  const { items: favoriteItems } = favorite
  const [showUserMenu, setShowUserMenu] = useState(false)
  const isAdmin = useIsAdmin()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isAdminPanel = isAdmin && pathname.startsWith('/admin')

  return (
    <div className={`${s.routes} df aic`}>
      {isAdminPanel ? (
        <>
          <Link to="/admin">
            <Gauge />
          </Link>
          <Link to="/admin/products">
            <Warehouse />
          </Link>
          <Link to="/admin/orders">
            <Files />
          </Link>
          <Link to="/admin/users">
            <Users />
          </Link>
          <Link to="/admin/analytics">
            <ChartBar />
          </Link>
        </>
      ) : (
        <>
          <Link to="/cart">
            <ShoppingCart />
            {cartItems.length > 0 && <span className={s.count}>{cartItems.length}</span>}
          </Link>
          <Link to="/favorite">
            <Heart />
            {favoriteItems.length > 0 && <span className={s.count}>{favoriteItems.length}</span>}
          </Link>
        </>
      )}
      <div style={{ position: 'relative' }}>
        <button onClick={() => (isAdmin ? navigate('/admin') : setShowUserMenu(v => !v))}>
          <User />
        </button>
        <UserButton showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      </div>
    </div>
  )
})
