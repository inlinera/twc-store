import { lazy, Suspense } from 'react'
import { Header } from '@/widgets/layout/header'
import { Navigation } from '@/widgets/layout/navigation'
import { Routes, Route } from 'react-router-dom'

const BuyPage = lazy(() => import('@/pages/buy'))
const CartPage = lazy(() => import('@/pages/cart'))
const FavoritePage = lazy(() => import('@/pages/favorite'))
const HomePage = lazy(() => import('@/pages/home'))
const OrderPage = lazy(() => import('@/pages/order'))
const RegisterPage = lazy(() => import('@/pages/register'))
const TrackOrder = lazy(() => import('@/pages/order-track'))
const ProductPage = lazy(() => import('@/pages/product'))
const LoginPage = lazy(() => import('@/pages/login'))
const AdminMainPage = lazy(() => import('@/pages/admin-main'))
const AdminOrdersPage = lazy(() => import('@/pages/admin-orders'))
const AdminProductsPage = lazy(() => import('@/pages/admin-products'))
const AdminUsersPage = lazy(() => import('@/pages/admin-users'))
const AdminAnalyticsPage = lazy(() => import('@/pages/admin-analytics'))

export const App = () => {
  return (
    <>
      <Header />
      <main className="df fdc aic jcc">
        <Navigation />
        <Suspense fallback={<div>Загрузка...</div>}>
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
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}
