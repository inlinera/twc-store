import { Package } from '@/shared/icons/Package'
import { Trophy } from '@/shared/icons/Trophy'
import { CreditCard } from '@/shared/icons/CreditCard'
import { Headphones } from '@/shared/icons/headphones'
import { InfoLine } from '@/entities/@common/info-line'

const items = [
  {
    title: 'БЫСТРАЯ ДОСТАВКА',
    subtitle: 'Доставка по МСК за 24 часа',
    icon: <Package />,
  },
  {
    title: '24 ЧАСА НА ВОЗВРАТ',
    subtitle: '100% возврат по гарантии',
    icon: <Trophy />,
  },
  {
    title: 'ЗАЩИЩЕННАЯ ОПЛАТА',
    subtitle: 'Твои данные защищены',
    icon: <CreditCard />,
  },
  {
    title: 'ПОДДЕРЖКА 24/7',
    subtitle: 'Помощь в любое время',
    icon: <Headphones />,
  },
]

export const HomeInfo = () => {
  return <InfoLine items={items} itemsContentAlign="center" dividerColor="var(--purple-color)" />
}
