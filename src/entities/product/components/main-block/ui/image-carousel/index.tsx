import { useState } from 'react'
import s from './index.module.scss'
import { ArrowLeft } from '@/shared/icons/ArrowLeft'
import { ArrowRight } from '@/shared/icons/ArrowRight'

interface ProductImageCarouselProps {
  images: string[]
}

export const ProductImageCarousel = ({ images }: ProductImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  const getVisibleThumbnails = () => {
    if (currentIndex === 0) {
      return [0, 1, 2]
    } else if (currentIndex === images.length - 1) {
      return [images.length - 3, images.length - 2, images.length - 1]
    }
    return [currentIndex - 1, currentIndex, currentIndex + 1]
  }

  const isFirstImage = currentIndex === 0
  const isLastImage = currentIndex === images.length - 1

  return (
    <div className={s.carousel}>
      <div className={s.mainImageContainer}>
        <img src={images[currentIndex]} alt={`Product image ${currentIndex + 1}`} className={s.mainImage} />
      </div>
      <div className={`${s.thumbnailsContainer} df aic`}>
        <button
          onClick={handlePrevious}
          className={`${s.navButton} ${isFirstImage ? s.disabled : ''}`}
          disabled={isFirstImage}
        >
          <ArrowLeft />
        </button>

        <div className={`${s.thumbnails} df aic`}>
          {getVisibleThumbnails().map(index => (
            <img
              key={index}
              src={images[index]}
              alt={`Thumbnail ${index + 1}`}
              className={`${s.thumbnail} ${index === currentIndex ? s.active : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`${s.navButton} ${isLastImage ? s.disabled : ''}`}
          disabled={isLastImage}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
