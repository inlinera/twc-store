import { observer } from 'mobx-react-lite'
import s from './index.module.scss'
import { states } from '@/shared/stores/states'
import { useEffect } from 'react'
import {
  ProductCarousel,
  HomeBigProduct,
  HomeProduct,
  HomeInfo,
  ProductPreview,
  SeasonalDiscounts,
} from '@/entities/home/'
import { products } from '@/shared/stores/api/products'

const HomePage = observer(() => {
  const { setPath } = states
  const { items, getProducts, loading } = products

  const maxProducts = 14
  const limitedItems = items?.slice(0, maxProducts)

  const carouselProducts = limitedItems?.slice(0, 3)
  const goodsProducts = limitedItems?.slice(3, 5)
  const bigProduct = limitedItems?.[5]
  const listProducts = limitedItems?.slice(6)

  useEffect(() => {
    if (!items) getProducts()
    setPath(null)
  }, [])

  return (
    <div className={`${s.homePage} df fdc`}>
      {loading ? (
        <div className="df fdc jcc aic">loading...</div>
      ) : (
        <>
          <div className={`${s.upperBlock} dg`}>
            <ProductCarousel products={carouselProducts ?? []} />
            <div className={`${s.goods} df fdc`}>
              {goodsProducts?.[0] && <SeasonalDiscounts {...goodsProducts[0]} />}
              {goodsProducts?.[1] && <ProductPreview {...goodsProducts[1]} />}
            </div>
          </div>
          <HomeInfo />
          <div className={`${s.products} dg aic`}>
            {bigProduct && <HomeBigProduct {...bigProduct} />}
            <div className={`${s.productsList} dg`}>
              {listProducts?.map((product, index) => (
                <HomeProduct key={product._id ?? index} {...product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
})

export default HomePage
