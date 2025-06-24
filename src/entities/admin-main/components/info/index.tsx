import { InfoLine } from '@/entities/@common/info-line'
import { Package } from '@/shared/icons/Package'
import { Files } from '@/shared/icons/Files'
import { CreditCard } from '@/shared/icons/CreditCard'

const items = [
  {
    icon: <Package />,
    title: '10',
    subtitle: 'Заказов на сайте',
  },
  {
    icon: <Files />,
    title: '10',
    subtitle: 'Активных заказов',
  },
  {
    icon: <CreditCard />,
    title: '10 000 ₽',
    subtitle: 'Выручки за неделю',
  },
  {
    icon: <CreditCard />,
    title: '120 000 ₽',
    subtitle: 'Выручки за месяц',
  },
]

export const InfoAdminMain = () => {
  return <InfoLine items={items} />
}
