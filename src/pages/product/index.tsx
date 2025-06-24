import { ProductInfoBlock, MainProductBlock } from '@/entities/product/'
import type { IProduct } from '@/shared/interfaces/IProduct'
import s from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { states } from '@/shared/stores/states'
import { useEffect, useState } from 'react'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { useParams } from 'react-router-dom'
import { products } from '@/shared/stores/api/products'

const ProductPage = observer(() => {
  const { productId } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)
  const { getProductById, loading } = products
  const { setPath } = states

  useEffect(() => {
    if (productId) {
      getProductById(productId).then(product => {
        if (product) {
          setProduct(product)
          setPath([...product.path, product.title])
        }
      })
    }
  }, [productId])

  return (
    <div className="df fdc">
      <Breadcrumbs />
      <div className={`${s.productPage} df fdc`}>
        {loading ? (
          <div className="df fdc jcc aic">loading...</div>
        ) : (
          <>
            {product && (
              <>
                <MainProductBlock {...product} />
                <ProductInfoBlock {...product} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
})

export default ProductPage
