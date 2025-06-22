import { ShoppingCart } from '@/shared/icons/shoppingcart'
import { Button } from '@/shared/ui/button'
import { observer } from 'mobx-react-lite'
import type { IProduct } from '@/shared/interfaces/IProduct'
import { cart } from '@/shared/stores/local/cart'
import { useNavigate } from 'react-router-dom'

interface AddToCartProps extends IProduct {
  chosenColor: string
  selectedSize: string
  counterVal: number
  setCounterVal: (value: number) => void
}

export const AddToCart = observer(
  ({ chosenColor, selectedSize, counterVal, setCounterVal, ...product }: AddToCartProps) => {
    const { addItem, getAvailableQuantity } = cart
    const navigate = useNavigate()

    const availableQuantity = getAvailableQuantity(product, chosenColor, selectedSize)

    const isInCart = cart.items.find(
      item => item._id === product._id && item.color === chosenColor && item.size === selectedSize
    )

    const handleAddToCart = () => {
      if (isInCart) return navigate('/cart')
      if (counterVal > 0) {
        addItem(product, chosenColor, selectedSize, counterVal)
        setCounterVal(0)
      }
    }

    return (
      <Button className={`df aic jcc`} onClick={handleAddToCart} disabled={availableQuantity === 0}>
        {isInCart ? 'В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ'} <ShoppingCart />
      </Button>
    )
  }
)
