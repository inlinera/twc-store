import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { LocationButton } from './ui/location-button'
import { Routes } from './components/routes'
import { useIsAdmin } from '@/shared/hooks/admin/isAdmin'
import { useLocation } from 'react-router-dom'

export const Header = observer(() => {
  const { setTheme } = states
  const { pathname } = useLocation()
  const isAdmin = useIsAdmin()

  const isAdminPanel = isAdmin && pathname.startsWith('/admin')

  return (
    <header className={`${s.header} df aic`}>
      <div className={`${s.location} df aic`}>
        <button onClick={setTheme}>
          <Lamp />
        </button>
        <LocationButton />
      </div>
      <div className={`${s.logo} df aic`}>
        <HeaderLogo />
        {isAdminPanel && <span>ADMIN</span>}
      </div>
      <Routes />
    </header>
  )
})
