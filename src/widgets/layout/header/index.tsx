import { Lamp } from '@/shared/icons/lamp'
import s from './index.module.scss'
import { HeaderLogo } from '@/app/assets/images/header-logo'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { LocationButton } from './ui/location-button'
import { Routes } from './components/routes'

export const Header = observer(() => {
  const { setTheme } = states
  const isAdmin = true

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
        {isAdmin && <span>ADMIN</span>}
      </div>
      <Routes />
    </header>
  )
})
