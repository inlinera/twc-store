import { MapPinArea } from '@/shared/icons/mappinarea'
import { CaretDown } from '@/shared/icons/caretdown'
import { observer } from 'mobx-react-lite'
import { useLocation, useNavigate } from 'react-router-dom'
import { useIsAdmin } from '@/shared/hooks/admin/isAdmin'

export const LocationButton = observer(() => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isAdmin = useIsAdmin()

  const isAdminPanel = isAdmin && pathname.startsWith('/admin')

  return isAdminPanel ? (
    <button className="df aic" onClick={() => navigate('/')} style={{ fontWeight: 400 }}>
      <CaretDown style={{ transform: 'rotate(90deg)' }} /> Назад к магазину
    </button>
  ) : (
    <button className="df aic">
      <MapPinArea />
      <strong>Москва</strong>
    </button>
  )
})
