import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { ProductPrice } from '@/shared/ui/product-price'
import { Link } from 'react-router-dom'

export const HomeProduct = observer(({ oldPrice, ...product }: IProduct) => {
  const { theme } = states

  const leftLittle =
    Object.values(product.specifications.color).reduce((total, color) => {
      return total + Object.values(color.size).reduce((sizeTotal, quantity) => sizeTotal + quantity, 0)
    }, 0) <= 10

  return (
    <Link
      className={`${s.product} df fdc`}
      to={`/product/${product._id}`}
      style={theme === 'dark' ? { border: '1px solid var(--purple-color)' } : {}}
    >
      {leftLittle && <div className={`${s.leftLittle} df aic`}>Осталось мало</div>}
      <img src={product.images[0]} alt={product.title} />
      <div className={`${s.metaInfo} df fdc`}>
        <h3>{product.title}</h3>
        <ProductPrice oldPrice={oldPrice} price={product.price} />
      </div>
    </Link>
  )
})
