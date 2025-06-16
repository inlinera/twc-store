import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'

export const HomeProduct = observer(({ oldPrice, ...product }: IProduct) => {
  const { theme } = states

  return (
    <div
      className={`${s.product} df fdc`}
      style={theme === 'dark' ? { border: '1px solid var(--purple-color)' } : {}}
    >
      <img src={product.images[0]} alt={product.title} />
      <div className={`${s.metaInfo} df fdc`}>
        <h3>{product.title}</h3>
        <div className="df aic">
          {oldPrice && <s>{oldPrice} ₽</s>}
          <span>{product.price} ₽</span>
        </div>
      </div>
    </div>
  )
})
