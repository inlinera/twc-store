import s from './index.module.scss'
import { Star } from '@/shared/icons/Star'

export const ProductRating = ({ showRating = true, color = 'var(--default)' }) => {
  return (
    <div className={`${s.rating} df aic`}>
      <div className={`${s.stars} df aic`}>
        {Array.from({ length: 5 }, (_, id) => (
          <Star key={id} />
        ))}
      </div>
      {showRating && <b>4.7</b>}
      <span style={{ color }}>(21.671 Оценок)</span>
    </div>
  )
}
