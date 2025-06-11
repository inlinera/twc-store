import { useState } from 'react'
import s from './index.module.scss'
import type { ColorT, IProduct } from '@/shared/interfaces/IProduct'
import { Dropdown } from '@/shared/ui/dropdown'
import { Counter } from '@/shared/ui/counter'
import { Button } from '@/shared/ui/button'
import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Heart } from '@/shared/icons/Heart'
import { Copy } from '@/shared/icons/Copy'

export const ProductParams = ({ specifications }: Pick<IProduct, 'specifications'>) => {
  const colors = Object.keys(specifications.color) as ColorT[]
  const [choosenColor, setChoosenColor] = useState<ColorT>(colors[0])
  const sizes = Object.entries(specifications.color[choosenColor].size)
    .filter(([, quantity]) => quantity >= 1)
    .map(([size]) => size)
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [counterVal, setCounterVal] = useState(0)

  const maxQuantity = specifications.color[choosenColor].size[selectedSize]

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
        <Counter value={counterVal} maxValue={maxQuantity} onChange={setCounterVal} />
        <div className={`${s.btns} df aic jcsb`}>
          <Button className={`df aic jcc`}>
            ДОБАВИТЬ В КОРЗИНУ <ShoppingCart />
          </Button>
          <Button className={`df aic jcc`}>КУПИТЬ</Button>
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
}
