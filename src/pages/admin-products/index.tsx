import { Search } from '@/shared/icons/search'
import s from './index.module.scss'
import { Input } from '@/shared/ui/input'
import { Line } from '@/entities/@common/line'
import { PencilSimple } from '@/shared/icons/PencilSimple'

const infoProducts = [
  {
    content: 'Название',
  },
  {
    content: 'Размер',
  },
  {
    content: 'Цена',
  },
  {
    content: 'Остаток',
  },
  {
    content: 'Статус',
  },
  {
    content: 'Действие',
  },
]

const listProducts = [
  {
    content: 'Футболка Clout',
  },
  {
    content: 'M',
  },
  {
    content: '1000',
  },
  {
    content: '10',
  },
  {
    content: 'В продаже',
    isGreen: true,
  },
  {
    content: (
      <button>
        <PencilSimple />
      </button>
    ),
  },
]

export const AdminProductsPage = () => {
  return (
    <div className={`${s.adminProductsPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="Наименование" endElement={<Search />} />
        <Input placeholder="Категория" endElement={<Search />} />
        <Input placeholder="Код" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoProducts} />
        {Array.from({ length: 10 }).map((_, id) => (
          <Line items={listProducts} key={id} />
        ))}
      </div>
    </div>
  )
}
