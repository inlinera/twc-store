import s from './index.module.scss'
import { OrderProgressBar, OrderTrackActivity, OrderInfo } from '@/entities/order-track/'
import { order } from '@/shared/stores/api/order'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { observer } from 'mobx-react-lite'

const TrackOrder = observer(() => {
  const { order: orderInfo } = order

  const steps = [
    orderInfo?.status['Заказ создан'] && 1,
    orderInfo?.status['Заказ успешно отправлен'] && 2,
    orderInfo?.status['Заказ у Курьера'] && 3,
    orderInfo?.status['Заказ вручен! Спасибо за покупку'] && 4,
  ].filter(Boolean)

  return (
    <div className="df fdc" style={{ width: '100%' }}>
      <Breadcrumbs />
      <div className={`${s.orderPage} df fdc`}>
        <OrderInfo />
        <p>Примерная дата поставки: 13 апреля 2025</p>
        <OrderProgressBar currentStep={steps.length} />
        <OrderTrackActivity />
      </div>
    </div>
  )
})

export default TrackOrder
