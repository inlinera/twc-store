import { Search } from '@/shared/icons/search'
import { Input } from '@/shared/ui/input'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'
import { Files } from '@/shared/icons/Files'

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

const listOrders = [
  {
    content: '123456, Москва',
  },
  {
    content: '01.01.2025',
  },
  {
    content: '1000',
  },
  {
    content: 'Иван Иванов',
  },
  {
    content: 'Доставка',
    isGreen: true,
  },
  {
    content: (
      <button>
        <Files />
      </button>
    ),
  },
]

export const AdminOrdersPage = () => {
  return (
    <div className={`${s.adminOrdersPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="Город" endElement={<Search />} />
        <Input placeholder="Дата" endElement={<Search />} />
        <Input placeholder="Код" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoOrders} />
        {Array.from({ length: 10 }).map((_, id) => (
          <Line items={listOrders} key={id} />
        ))}
      </div>
    </div>
  )
}
