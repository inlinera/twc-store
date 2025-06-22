import { useState, useEffect } from 'react'
import s from './index.module.scss'
import type { ColorT, IProduct } from '@/shared/interfaces/IProduct'
import { Dropdown } from '@/shared/ui/dropdown'
import { Counter } from '@/shared/ui/counter'
import { Button } from '@/shared/ui/button'
import { Copy } from '@/shared/icons/Copy'
import { cart } from '@/shared/stores/local/cart'
import { observer } from 'mobx-react-lite'
import { AddToFavorite } from './buttons/add-to-favorite'
import { AddToCart } from './buttons/add-to-cart'

export const ProductParams = observer((props: IProduct) => {
  const { getAvailableQuantity } = cart

  // Проверяем, есть ли specifications
  if (!props.specifications) {
    return <div>Loading specifications...</div>
  }

  const colors: ColorT[] = Object.keys(props.specifications.color) as ColorT[]
  const [chosenColor, setChosenColor] = useState<ColorT>(colors[0])

  const sizes = Object.entries(props.specifications.color[chosenColor].size)
    .filter(([, quantity]) => quantity >= 1)
    .map(([size]) => size)

  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [counterVal, setCounterVal] = useState(0)

  const availableQuantity = getAvailableQuantity(props, chosenColor, selectedSize)

  useEffect(() => {
    if (counterVal > availableQuantity) {
      setCounterVal(availableQuantity)
    }
  }, [availableQuantity, chosenColor, selectedSize, counterVal])

  return (
    <div className={`${s.params} df fdc aic jcc`}>
      <div className={`${s.details} df aic`}>
        <div className={`${s.colors} df aic`}>
          {colors.map(color => (
            <button
              key={color}
              className={`${s.colorBtn} ${color === chosenColor ? s.active : ''} df aic jcc`}
              title={color === 'perple' ? 'Фиолетовый' : color === 'black' ? 'Черный' : 'Белый'}
              onClick={() => setChosenColor(color)}
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
          <AddToCart
            {...props}
            chosenColor={chosenColor}
            selectedSize={selectedSize}
            counterVal={counterVal}
            setCounterVal={setCounterVal}
          />
          <Button className={`df aic jcc`} disabled={availableQuantity === 0}>
            КУПИТЬ
          </Button>
        </div>
      </div>
      <div className={`${s.morebtns} df aic jcsb`}>
        <AddToFavorite {...props} />
        <button className={`df aic`}>
          Поделиться: <Copy />
        </button>
      </div>
    </div>
  )
})
