import { Input } from '@/shared/ui/input'
import { Search } from '@/shared/icons/search'
import s from './index.module.scss'
import { Line } from '@/entities/@common/line'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { users } from '@/shared/stores/api/auth/getAllUsers'

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

const AdminUsersPage = observer(() => {
  const { users: items, loading, getAllUsers } = users

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className={`${s.adminUsersPage} df fdc`}>
      <div className={`${s.inputs} df aic`}>
        <Input placeholder="ФИО" endElement={<Search />} />
        <Input placeholder="Город" endElement={<Search />} />
      </div>
      <div className={`${s.list} df fdc aic`}>
        <Line items={infoUsers} />
        {loading ? (
          <div>Loading...</div>
        ) : items && items.length > 0 ? (
          items.map((user, id) => {
            const userLine = [
              {
                content: `${user.firstName} ${user.lastName}`,
              },
              {
                content: `${user.city}`,
              },
              {
                content: `10`,
              },
            ]

            return <Line items={userLine} key={id} />
          })
        ) : (
          <div>Users not found</div>
        )}
      </div>
    </div>
  )
})

export default AdminUsersPage
