import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './routes/homepage/homepage.component'
import ShopPage from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import CheckoutPage from './routes/checkout/checkout.component'

import { checkUserSession } from './store/user/user.actions'
import { useDispatch } from 'react-redux'

import './App.css'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkUserSession())
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='shop/*' element={<ShopPage />} />
				<Route path='checkout' element={<CheckoutPage />} />
				<Route exact path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	)
}

export default App
