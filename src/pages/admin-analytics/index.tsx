import s from './index.module.scss'
import { InfoLine } from '@/entities/@common/info-line'
import { OrderLineChartComponent, VisitorsLineChartComponent } from '@/entities/admin-analytics/'
import { CreditCard } from '@/shared/icons/CreditCard'
import { Package } from '@/shared/icons/Package'

const moneyInfo = [
  { icon: <CreditCard />, title: '10 000 ₽', subtitle: 'Выручка за день' },
  { icon: <CreditCard />, title: '100 000 ₽', subtitle: 'Выручка за неделю' },
  { icon: <CreditCard />, title: '1 000 000 ₽', subtitle: 'Выручка за месяц' },
]

const ordersInfo = [
  { icon: <Package />, title: '100', subtitle: 'Созданных заказов за неделю' },
  { icon: <Package />, title: '20', subtitle: 'Заказов в обработке' },
  { icon: <Package />, title: '80', subtitle: 'Отправленных заказов' },
]

const AdminAnalyticsPage = () => {
  return (
    <div className={`${s.adminAnalyticsPage} df fdc`}>
      <InfoLine items={moneyInfo} />
      <InfoLine items={ordersInfo} />
      <div className={`${s.charts} df aic jcsa`}>
        <OrderLineChartComponent />
        <VisitorsLineChartComponent />
      </div>
    </div>
  )
}

export default AdminAnalyticsPage
