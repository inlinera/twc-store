import { MapPinArea } from '@/shared/icons/mappinarea'
import { CaretDown } from '@/shared/icons/caretdown'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export const LocationButton = observer(() => {
  const navigate = useNavigate()
  const isAdmin = true

  return isAdmin ? (
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
