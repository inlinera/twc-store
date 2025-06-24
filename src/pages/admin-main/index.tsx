import { useIsAdmin } from '@/shared/hooks/admin/isAdmin'
import { InfoAdminMain } from '@/entities/admin-main'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'
import { DownloadSimple } from '@/shared/icons/DownloadSimple'

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

const bottomLeftItems = [
  {
    content: '№1',
  },
  {
    content: 'Иванов Иван',
  },
  {
    content: '01.01.2025',
  },
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

const bottomRightItems = [
  {
    content: '№1',
  },
  {
    content: 'Футболка Clout',
  },
  {
    content: '1000 ₽',
  },
  {
    content: '1000',
  },
]

export const AdminMainPage = () => {
  useIsAdmin()

  return (
    <div className={`${s.adminMainPage} df fdc`}>
      <InfoAdminMain />
      <div className={`${s.blocks} df jcsb`}>
        <div className={`${s.block} df fdc`}>
          <Line items={leftItems} />
          {Array.from({ length: 10 }).map((_, id) => (
            <Line items={bottomLeftItems} key={id} />
          ))}
        </div>
        <div className={`${s.block} df fdc`}>
          <Line items={rightItems} />
          {Array.from({ length: 10 }).map((_, id) => (
            <Line items={bottomRightItems} key={id} />
          ))}
        </div>
      </div>
    </div>
  )
}
