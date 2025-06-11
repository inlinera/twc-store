import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { House } from '@/shared/icons/House'
import { Link } from 'react-router-dom'

export const Breadcrumbs = observer(() => {
  const { path } = states

  return (
    <div className={`${s.breadcrumbs} df aic`}>
      {path && (
        <>
          <House /> <Link to="/">Главная</Link>
          <span>{'>'}</span>
          {path.map((p, id) => {
            const isActive = id === path.length - 1

            return (
              <div key={id} className={`${s.btn} df aic`}>
                <button className={`${isActive ? s.active : ''}`}>{p}</button>
                {!isActive && <span>{'>'}</span>}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
})
