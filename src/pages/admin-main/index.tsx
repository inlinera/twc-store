import { InfoAdminMain } from '@/entities/admin-main'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'
import { DownloadSimple } from '@/shared/icons/DownloadSimple'
import { observer } from 'mobx-react-lite'
import { order } from '@/shared/stores/api/order'
import { products } from '@/shared/stores/api/products'
import { useEffect } from 'react'

const leftItems = [
  {
    content: 'Номер заказа',
  },
  {
    content: 'Заказчик',
  },
  {
    content: 'Дата',
  },
  {
    content: 'Статус оплаты',
  },
  {
    content: 'Сведения',
  },
]

const commonBottomLeftItems = [
  {
    content: 'Оплачен',
    isGreen: true,
  },
  {
    content: (
      <button>
        <DownloadSimple />
      </button>
    ),
  },
]

const rightItems = [
  {
    content: 'ID',
  },
  {
    content: 'Наименование',
  },
  {
    content: 'Стоимость',
  },
  {
    content: 'Заказов',
  },
]

const AdminMainPage = observer(() => {
  const { getAllOrders, orders, loading } = order
  const { getProducts, items, loading: productsLoading } = products

  useEffect(() => {
    getAllOrders()
    getProducts()
  }, [])

  return (
    <div className={`${s.adminMainPage} df fdc`}>
      <InfoAdminMain />
      <div className={`${s.blocks} df jcsb`}>
        <div className={`${s.block} df fdc aic`}>
          <Line items={leftItems} />
          {loading ? (
            <div>Loading...</div>
          ) : orders && orders.length > 0 ? (
            orders?.map((order, id) => {
              const item = [
                {
                  content: `№${id + 1}`,
                },
                {
                  content: order.lastName + ' ' + order.firstName,
                },
                {
                  content: `${order.status['Заказ создан']}`,
                },
                ...commonBottomLeftItems,
              ]

              return <Line items={item} key={id} />
            })
          ) : (
            <div>Заказов нет</div>
          )}
        </div>
        <div className={`${s.block} df fdc aic`}>
          <Line items={rightItems} />
          {productsLoading ? (
            <div>Loading...</div>
          ) : items && items.length > 0 ? (
            items?.map((item, id) => {
              const product = [
                {
                  content: `№${id + 1}`,
                },
                {
                  content: item.title,
                },
                {
                  content: item.price,
                },
                {
                  content: 100,
                },
              ]

              return <Line items={product} key={item._id} />
            })
          ) : (
            <div>Товаров нет</div>
          )}
        </div>
      </div>
    </div>
  )
})

export default AdminMainPage
