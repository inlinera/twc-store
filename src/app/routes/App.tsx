import { CartPage } from '@/pages/cart'
import { FavoritePage } from '@/pages/favorite'
import { HomePage } from '@/pages/home'
import { ProductPage } from '@/pages/product'
import { Header } from '@/widgets/layout/header'
import { Navigation } from '@/widgets/layout/navigation'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Header />
      <main className="df fdc aic jcc">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/" element={<ProductPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  )
}
