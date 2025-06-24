import { FavoriteList } from '@/entities/favorite/'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'

const FavoritePage = observer(() => {
  const { setPath } = states

  useEffect(() => {
    setPath(['Избранное'])
  }, [])

  return (
    <div className="df fdc" style={{ width: '100%' }}>
      <Breadcrumbs />
      <div className={`${s.favoritePage} df fdc`}>
        <h1>Избранное</h1>
        <div className={`${s.info} dg aic`}>
          <span>Продукт</span>
          <span>Цена</span>
          <span>Наличие</span>
          <span>Действие</span>
        </div>
        <FavoriteList />
      </div>
    </div>
  )
})

export default FavoritePage
