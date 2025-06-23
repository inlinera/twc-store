import s from './index.module.scss'
import { OrderProgressBar, OrderTrackActivity, OrderInfo } from '@/entities/order-track/'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

export const TrackOrder = () => {
  return (
    <div className="df fdc" style={{ width: '100%' }}>
      <Breadcrumbs />
      <div className={`${s.orderPage} df fdc`}>
        <OrderInfo />
        <p>Примерная дата поставки: 13 апреля 2025</p>
        <OrderProgressBar currentStep={4} />
        <OrderTrackActivity />
      </div>
    </div>
  )
}
