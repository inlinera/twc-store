import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { order } from '@/shared/stores/api/order'

export const OrderInfo = observer(() => {
  const { order: orderInfo } = order

  return (
    <div className={`${s.orderInfo} df aic jcsb`}>
      <div className="df fdc">
        <h2>#{orderInfo?.id}</h2>
        <div className="df aic">
          <p>{orderInfo?.products.length}</p>
          <span>•</span>
          <p>Заказ создан {orderInfo?.status['Заказ создан']}</p>
        </div>
      </div>
      <b>{orderInfo?.price} ₽</b>
    </div>
  )
})
