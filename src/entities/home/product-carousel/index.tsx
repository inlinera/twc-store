import { useState } from 'react'
import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { useSwipeable } from 'react-swipeable'

interface ProductCarouselProps {
  products: IProduct[]
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const currentProduct = products[currentIndex]

  const getNextIndex = (index: number) => (index === products.length - 1 ? 0 : index + 1)
  const getPrevIndex = (index: number) => (index === 0 ? products.length - 1 : index - 1)

  const handlePrevious = () => {
    setSwipeDirection('right')
    setTimeout(() => {
      setCurrentIndex(getPrevIndex(currentIndex))
      setSwipeDirection(null)
    }, 300)
  }

  const handleNext = () => {
    setSwipeDirection('left')
    setTimeout(() => {
      setCurrentIndex(getNextIndex(currentIndex))
      setSwipeDirection(null)
    }, 300)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    onSwiping: () => setIsSwiping(true),
    onSwiped: () => setIsSwiping(false),
    trackMouse: true,
  })

  const nextProduct = products[getNextIndex(currentIndex)]
  const prevProduct = products[getPrevIndex(currentIndex)]

  return (
    <div
      className={`${s.carousel} ${isSwiping ? s.swiping : ''} ${
        swipeDirection ? s[`swipe${swipeDirection.charAt(0).toUpperCase() + swipeDirection.slice(1)}`] : ''
      }`}
      {...swipeHandlers}
    >
      <div className={s.leftBlock}>
        <h2 className={s.title}>{currentProduct.title}</h2>
        <p className={s.subtitle}>{currentProduct.title}. Мода и стиль</p>
      </div>
      <div
        className={s.rightBlock}
        style={
          {
            backgroundImage: `url(${currentProduct.images[0]})`,
          } as React.CSSProperties
        }
      />
      {swipeDirection === 'left' && (
        <div
          className={`${s.rightBlock} ${s.nextBlock}`}
          style={
            {
              backgroundImage: `url(${nextProduct.images[0]})`,
            } as React.CSSProperties
          }
        />
      )}
      {swipeDirection === 'right' && (
        <div
          className={`${s.rightBlock} ${s.prevBlock}`}
          style={
            {
              backgroundImage: `url(${prevProduct.images[0]})`,
            } as React.CSSProperties
          }
        />
      )}
      <div className={s.navigation}>
        {products.map((_, index) => (
          <div
            key={index}
            className={`${s.dot} ${index === currentIndex ? s.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
