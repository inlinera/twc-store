import { Checks } from '@/shared/icons/Checks'
import { ActivityItem, type ActivityItemProps } from './activity-item-wrapper'
import s from './index.module.scss'
import { User } from '@/shared/icons/User'
import { MapPinLine } from '@/shared/icons/mappinline'
import { MapTrifold } from '@/shared/icons/MapTrifold'
import { CheckCircle } from '@/shared/icons/CheckCircle'
import { Notepad } from '@/shared/icons/Notepad'

const activity: ActivityItemProps[] = [
  { color: 'green', svg: <Checks />, title: 'Заказ вручен! Спасибо за покупку', date: '13 апреля 2025 в 22:22' },
  { color: 'blue', svg: <User />, title: 'Заказ у Курьера ', date: '13 апреля 2025 в 21:00' },
  {
    color: 'blue',
    svg: <MapPinLine />,
    title: 'Заказ поступил в город получателя',
    date: '13 апреля 2025 в 19:00',
  },
  { color: 'blue', svg: <MapTrifold />, title: 'Заказ успешно отправлен', date: '12 апреля 2025 в 19:00' },
  {
    color: 'green',
    svg: <CheckCircle />,
    title: 'Заказ оплачен и подтверждён администратором',
    date: '12 апреля 2025 в 18:05',
  },
  { color: 'blue', svg: <Notepad />, title: 'Заказ создан', date: '12 апреля 2025 в 18:00' },
]

export const OrderTrackActivity = () => {
  return (
    <div className={`${s.activity} df fdc`}>
      <h2>Активность заказа</h2>
      {activity.map((a, id) => (
        <ActivityItem {...a} key={id} />
      ))}
    </div>
  )
}
