import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { Search } from '@/shared/icons/search'
import { Button } from '@/shared/ui/button'
import { useLocation } from 'react-router-dom'
import { MapPinLine } from '@/shared/icons/mappinline'
import { Headphones } from '@/shared/icons/headphones'
import { Info } from '@/shared/icons/info'
import { CaretDown } from '@/shared/icons/caretdown'
import type { ILinkButton } from '@/shared/interfaces/ILinkButton'

const btns: ILinkButton[] = [
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
        <Button className={s.active}>
          Все категории <CaretDown />
        </Button>
        {btns.map(b => {
          const isActive = pathname === b.path

          if (isActive)
            return (
              <Button className={s.active}>
                {b.icon} {b.title}
              </Button>
            )
          return (
            <Button>
              {b.icon} {b.title}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
