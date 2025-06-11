import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'

export const HomePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(null)
  }, [])

  return <div>index</div>
})
