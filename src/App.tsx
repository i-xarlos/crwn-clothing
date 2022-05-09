import { useEffect, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { checkUserSession } from './store/user/user.actions'
import { useDispatch } from 'react-redux'
import Spinner from './components/spinner/spinner.component'
import './App.css'

const Navigation = lazy(
  () => import('./routes/navigation/navigation.component')
)
const HomePage = lazy(() => import('./routes/homepage/homepage.component'))
const ShopPage = lazy(() => import('./routes/shop/shop.component'))
const Authentication = lazy(
  () => import('./routes/authentication/authentication.component')
)
const CheckoutPage = lazy(() => import('./routes/checkout/checkout.component'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
