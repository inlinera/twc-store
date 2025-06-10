import s from './index.module.scss'
import { Star } from '@/shared/icons/Star'

export const ProductRating = () => {
  return (
    <div className={`${s.rating} df aic`}>
      <div className={`${s.stars} df aic`}>
        {Array.from({ length: 5 }, () => (
          <Star />
        ))}
      </div>
      <b>4.7</b>
      <span>(21.671 Оценок)</span>
    </div>
  )
}
