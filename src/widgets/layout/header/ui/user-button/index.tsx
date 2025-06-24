import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { auth } from '@/shared/stores/api/auth'
import { useNavigate } from 'react-router-dom'

interface UserButtonProps {
  showUserMenu: boolean
  setShowUserMenu: (showUserMenu: boolean) => void
}

export const UserButton = observer(({ showUserMenu, setShowUserMenu }: UserButtonProps) => {
  const { user } = auth

  const navigate = useNavigate()
  const userMenuRef = useRef<HTMLDivElement>(null)

  const handleLogin = () => {
    navigate('/login')
    setShowUserMenu(false)
  }

  const handleRegister = () => {
    navigate('/register')
    setShowUserMenu(false)
  }

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
  }, [showUserMenu, setShowUserMenu])

  return (
    showUserMenu && (
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
    )
  )
})
