import { BuyPage } from '@/pages/buy'
import { CartPage } from '@/pages/cart'
import { FavoritePage } from '@/pages/favorite'
import { HomePage } from '@/pages/home'
import { OrderPage } from '@/pages/order'
import { RegisterPage } from '@/pages/register'
import { TrackOrder } from '@/pages/order-track'
import { ProductPage } from '@/pages/product'
import { LoginPage } from '@/pages/login'
import { Header } from '@/widgets/layout/header'
import { Navigation } from '@/widgets/layout/navigation'
import { Routes, Route } from 'react-router-dom'
import { AdminMainPage } from '@/pages/admin-main'
import { AdminOrdersPage } from '@/pages/admin-orders'
import { AdminProductsPage } from '@/pages/admin-products'
import { AdminUsersPage } from '@/pages/admin-users'

export const App = () => {
  return (
    <>
      <Header />
      <main className="df fdc aic jcc">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/buy" element={<BuyPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="order/track" element={<TrackOrder />} />
          <Route path="/admin" element={<AdminMainPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Routes>
      </main>
    </>
  )
}
