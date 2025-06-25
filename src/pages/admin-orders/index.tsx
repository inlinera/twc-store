import { Search } from '@/shared/icons/search'
import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'
import { Files } from '@/shared/icons/Files'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { order } from '@/shared/stores/api/order'

const infoOrders = [
  {
    content: 'Код, Город',
  },
  {
    content: 'Дата',
  },
  {
    content: 'Сумма',
  },
  {
    content: 'Заказчик',
  },
  {
    content: 'Статус',
  },
  {
    content: 'Действие',
  },
]

const AdminOrdersPage = observer(() => {
  const { getAllOrders, orders, loading } = order

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <div className={`${s.adminOrdersPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="Город" endElement={<Search />} />
        <Input placeholder="Дата" endElement={<Search />} />
        <Input placeholder="Код" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoOrders} />
        {loading ? (
          <div>Loading...</div>
        ) : orders && orders.length > 0 ? (
          orders.map((order, id) => {
            const orderLine = [
              {
                content: `${order.postCode}, ${order.city}`,
              },
              {
                content: `${order.status}`,
              },
              {
                content: `${order.price} ₽`,
              },
              {
                content: `${order.firstName} ${order.lastName}`,
              },
              {
                content: `${order.status['Заказ создан']}`,
              },
              {
                content: (
                  <button>
                    <Files />
                  </button>
                ),
              },
            ]

            return <Line items={orderLine} key={id} />
          })
        ) : (
          <div>Заказов нет</div>
        )}
      </div>
    </div>
  )
})

export default AdminOrdersPage
