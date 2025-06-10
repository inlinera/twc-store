import { HomePage } from '@/pages/home'
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
        </Routes>
      </main>
    </>
  )
}
