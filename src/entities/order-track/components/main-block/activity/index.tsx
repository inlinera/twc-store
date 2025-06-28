import { Checks } from '@/shared/icons/Checks'
import { ActivityItem, type ActivityItemProps } from './activity-item-wrapper'
import s from './index.module.scss'
import { User } from '@/shared/icons/User'
import { MapPinLine } from '@/shared/icons/MapPinLine'
import { MapTrifold } from '@/shared/icons/MapTrifold'
import { CheckCircle } from '@/shared/icons/CheckCircle'
import { Notepad } from '@/shared/icons/Notepad'
import { observer } from 'mobx-react-lite'
import { order } from '@/shared/stores/api/order'

const rawActivity: Omit<ActivityItemProps, 'date'>[] = [
  {
    title: 'Заказ вручен! Спасибо за покупку',
    color: 'green',
    svg: <Checks />,
  },
  {
    title: 'Заказ у Курьера ',
    color: 'blue',
    svg: <User />,
  },
  {
    title: 'Заказ поступил в город получателя',
    color: 'blue',
    svg: <MapPinLine />,
  },
  {
    title: 'Заказ успешно отправлен',
    color: 'blue',
    svg: <MapTrifold />,
  },
  {
    title: 'Заказ оплачен и подтверждён администратором',
    color: 'green',
    svg: <CheckCircle />,
  },
  {
    title: 'Заказ создан',
    color: 'blue',
    svg: <Notepad />,
  },
]

export const OrderTrackActivity = observer(() => {
  const { order: orderInfo } = order

  const activity: ActivityItemProps[] = rawActivity
    .map(({ title, color, svg }) => {
      const date = (orderInfo?.status as Record<string, string>)[title]

      return date
        ? {
            color,
            svg,
            title,
            date,
          }
        : null
    })
    .filter(Boolean) as ActivityItemProps[]

  return (
    <div className={`${s.activity} df fdc`}>
      <h2>Активность заказа</h2>
      {activity.map((a, id) => (
        <ActivityItem {...a} key={id} />
      ))}
    </div>
  )
})
