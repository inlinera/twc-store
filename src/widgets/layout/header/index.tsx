import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { MapPinArea } from '@/shared/icons/mappinarea'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { User } from '@/shared/icons/User'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { cart } from '@/shared/stores/local/cart'
import { favorite } from '@/shared/stores/local/favorite'
import { auth } from '@/shared/stores/api/auth'
import { useState, useRef, useEffect } from 'react'

export const Header = observer(() => {
  const { setTheme } = states
  const { items: cartItems } = cart
  const { items: favoriteItems } = favorite
  const navigate = useNavigate()
  const { user } = auth
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }
    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showUserMenu])

  const handleLogin = () => navigate('/login')
  const handleRegister = () => navigate('/register')

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
        <div style={{ position: 'relative' }}>
          <button
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => setShowUserMenu(v => !v)}
          >
            <User />
          </button>
          {showUserMenu && (
            <div
              ref={userMenuRef}
              style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                background: 'var(--el-color)',
                color: '#fff',
                borderRadius: 8,
                zIndex: 100,
                minWidth: 160,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {!user ? (
                <>
                  <button
                    onClick={handleLogin}
                    style={{
                      padding: 8,
                      border: 'none',
                      background: 'var(--purple-color)',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Логин
                  </button>
                  <button
                    onClick={handleRegister}
                    style={{
                      padding: 8,
                      border: 'none',
                      background: 'var(--purple-color)',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Регистрация
                  </button>
                </>
              ) : (
                <>
                  <span style={{ padding: 8 }}>{user.email}</span>
                  <span style={{ padding: 8 }}>{user.phone}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
})
