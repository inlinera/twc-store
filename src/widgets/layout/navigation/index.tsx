import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { Search } from '@/shared/icons/search'
import { Link, useLocation } from 'react-router-dom'
import { MapPinLine } from '@/shared/icons/mappinline'
import { Headphones } from '@/shared/icons/headphones'
import { Info } from '@/shared/icons/info'
import { CaretDown } from '@/shared/icons/caretdown'
import type { ILinkButton } from '@/shared/interfaces/ILinkButton'

const btns: ILinkButton[] = [
  { title: 'Все категории', path: '/', icon: <CaretDown /> },
  { title: 'Отследить заказ', path: '/order', icon: <MapPinLine /> },
  { title: 'Поддержка', path: '/support', icon: <Headphones /> },
  { title: 'Нужна помощь', path: '/help', icon: <Info /> },
]

export const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <nav className={`${s.navigation} df fdc aic jcc`}>
      <Input
        className={s.input}
        placeholder="Найти на tutorial.market"
        endElement={
          <button>
            <Search />
          </button>
        }
      />
      <div className={`${s.btns} df aic`}>
        {btns.map((b, id) => {
          const isReverse = id === 0 ? s.rowRev : ''
          const isActive = pathname === b.path || (pathname.startsWith('/product') && id === 0)

          if (isActive)
            return (
              <Link to={b.path} className={`${s.active} df ${isReverse ? s.rowRev : ''}`} key={id}>
                {b.icon} {b.title}
              </Link>
            )
          return (
            <Link to={b.path} className={`df ${isReverse ? s.rowRev : ''}`} key={id}>
              {b.icon} {b.title}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
