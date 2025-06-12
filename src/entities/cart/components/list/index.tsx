import s from './index.module.scss'
import { CartItem } from '../item'
import { observer } from 'mobx-react-lite'
import { cart } from '@/shared/stores/cart'

export const CartList = observer(() => {
  return (
    <ul className={`${s.list} df fdc`}>
      <h1>Корзина</h1>
      <div className={`${s.info} dg aic`}>
        <span>Продукт</span>
        <span>Цена</span>
        <span>Количество</span>
        <span>Стоимость</span>
      </div>
      {cart.items.length > 0 ? (
        <>
          {cart.items.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              product={item.product}
              color={item.color}
              size={item.size}
              count={item.count}
            />
          ))}
          <div className={`${s.total} df aic jcsb`}>
            <span>Итого:</span>
            <span>{cart.getTotalPrice()} ₽</span>
          </div>
        </>
      ) : (
        'Вы можете добавлять продукты в корзину'
      )}
    </ul>
  )
})
