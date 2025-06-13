import { cart } from '@/shared/stores/cart'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { Button } from '@/shared/ui/button'
import { ArrowRight } from '@/shared/icons/ArrowRight'
import type { IProduct } from '@/shared/interfaces/IProduct'
import { Link } from 'react-router-dom'

interface CartBuyBlockProps {
  products?: IProduct[]
}

export const CartBuyBlock = observer(({ products }: CartBuyBlockProps) => {
  const totals = cart.getTotalPrice()

  return (
    <div className={`${s.block} df fdc`}>
      <h2>{products ? 'Заказ' : 'Итого'}</h2>
      {products && (
        <ul className="df fdc">
          {products.map((p, id) => (
            <li>
              <Link to="/" key={id}>
                <img src={p.images[0]} alt={p.brand} />
                <div className="df fdc">
                  <h3>{p.title}</h3> <p>numx * {p.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className={s.row}>
        <p>Продуктов на</p>
        <span>{totals.subtotal} ₽</span>
      </div>
      <div className={s.row}>
        <p>Доставка</p>
        <span>Бесплатно</span>
      </div>
      <div className={s.row}>
        <p>Скидка</p>
        <span>{totals.discount} ₽</span>
      </div>
      <div className={s.row}>
        <p>Налог</p>
        <span>{totals.tax} ₽</span>
      </div>
      <div className={`${s.row} ${s.total}`}>
        <p>Итого</p>
        <b>{totals.total} ₽</b>
      </div>
      <Button>
        {products ? 'Оформить заказ' : 'Оплатить и заказать'} <ArrowRight />
      </Button>
    </div>
  )
})
