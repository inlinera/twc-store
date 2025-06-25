import { InfoLine } from '@/entities/@common/info-line'
import { Package } from '@/shared/icons/Package'
import { Files } from '@/shared/icons/Files'
import { CreditCard } from '@/shared/icons/CreditCard'
import { order } from '@/shared/stores/api/order'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

export const InfoAdminMain = observer(() => {
  const { orders, getAllActiveOrders, activeOrders, loading } = order

  const items = [
    {
      icon: <Package />,
      title: `${orders?.length ?? 0}`,
      subtitle: 'Заказов на сайте',
    },
    {
      icon: <Files />,
      title: `${activeOrders?.length ?? 0}`,
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

  useEffect(() => {
    getAllActiveOrders()
  }, [])

  return loading ? <div className={'df jcc aic'}>Loading...</div> : <InfoLine items={items} />
})
