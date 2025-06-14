import { OrderInfo } from '@/entities/order-track/components/main-block/info'
import s from './index.module.scss'
import { OrderProgressBar } from '@/entities/order-track/components/main-block/progress'
import { OrderTrackActivity } from '@/entities/order-track/components/main-block/activity'

export const TrackOrder = () => {
  return (
    <div className={`${s.orderPage} df fdc`}>
      <OrderInfo />
      <p>Примерная дата поставки: 13 апреля 2025</p>
      <OrderProgressBar currentStep={4} />
      <OrderTrackActivity />
    </div>
  )
}
