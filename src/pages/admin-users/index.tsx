import { Input } from '@/shared/ui/input'
import { Search } from '@/shared/icons/search'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'

const infoUsers = [
  {
    content: 'ФИО',
  },
  {
    content: 'Город',
  },
  {
    content: 'Заказов',
  },
]

const listUsers = [
  {
    content: 'Иван Иванов Иванович',
  },
  {
    content: 'Москва',
  },
  {
    content: '100',
  },
]

const AdminUsersPage = () => {
  return (
    <div className={`${s.adminUsersPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="ФИО" endElement={<Search />} />
        <Input placeholder="Город" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoUsers} />
        {Array.from({ length: 10 }).map((_, id) => (
          <Line items={listUsers} key={id} />
        ))}
      </div>
    </div>
  )
}

export default AdminUsersPage
