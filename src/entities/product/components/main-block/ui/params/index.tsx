import { useState, useEffect } from 'react'
import s from './index.module.scss'
import type { ColorT, IProduct } from '@/shared/interfaces/IProduct'
import { Dropdown } from '@/shared/ui/dropdown'
import { Counter } from '@/shared/ui/counter'
import { Button } from '@/shared/ui/button'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { Copy } from '@/shared/icons/Copy'
import { cart } from '@/shared/stores/cart'
import { observer } from 'mobx-react-lite'

interface ProductParamsProps {
  product: IProduct
}

export const ProductParams = observer(({ product }: ProductParamsProps) => {
  const { addItem, getAvailableQuantity } = cart
  const colors = Object.keys(product.specifications.color) as ColorT[]
  const [choosenColor, setChoosenColor] = useState<ColorT>(colors[0])
  const sizes = Object.entries(product.specifications.color[choosenColor].size)
    .filter(([, quantity]) => quantity >= 1)
    .map(([size]) => size)
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [counterVal, setCounterVal] = useState(0)

  const availableQuantity = getAvailableQuantity(product, choosenColor, selectedSize)

  useEffect(() => {
    if (counterVal > availableQuantity) {
      setCounterVal(availableQuantity)
    }
  }, [availableQuantity, choosenColor, selectedSize])

  const handleAddToCart = () => {
    if (counterVal > 0) {
      addItem(product, choosenColor, selectedSize, counterVal)
      setCounterVal(0)
    }
  }

  return (
    <div className={`${s.params} df fdc aic jcc`}>
      <div className={`${s.details} df aic`}>
        <div className={`${s.colors} df aic`}>
          {colors.map(color => (
            <button
              key={color}
              className={`${s.colorBtn} ${color === choosenColor ? s.active : ''} df aic jcc`}
              title={color === 'perple' ? 'Фиолетовый' : color === 'black' ? 'Черный' : 'Белый'}
              onClick={() => setChoosenColor(color)}
            >
              <div className={`${s[color]}`} />
            </button>
          ))}
        </div>
        <Dropdown
          trigger={<span>{selectedSize}</span>}
          items={sizes.map(size => ({
            content: size,
            onClick: () => setSelectedSize(size),
          }))}
        />
      </div>
      <div className={`${s.gap} df aic jcsb`}>
        <Counter value={counterVal} maxValue={availableQuantity} onChange={setCounterVal} />
        <div className={`${s.btns} df aic jcsb`}>
          <Button className={`df aic jcc`} onClick={handleAddToCart} disabled={availableQuantity === 0}>
            ДОБАВИТЬ В КОРЗИНУ <ShoppingCart />
          </Button>
          <Button className={`df aic jcc`} disabled={availableQuantity === 0}>
            КУПИТЬ
          </Button>
        </div>
      </div>
      <div className={`${s.morebtns} df aic jcsb`}>
        <button className={`df aic`}>
          <Heart /> Добавить в избранное
        </button>
        <button className={`df aic`}>
          Поделиться: <Copy />
        </button>
      </div>
    </div>
  )
})
