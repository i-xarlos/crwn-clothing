import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './routes/homepage/homepage.component'
import ShopPage from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import CheckoutPage from './routes/checkout/checkout.component'

import {
	createUserDocumentFromAuth,
	getSignInUserFromAuth,
	onAuthStateChangedListener,
} from './config/firebase/firebase.utils'
import { setCurrentUser } from './state/user/user.actions'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribeFromAuth = onAuthStateChangedListener(async user => {
			if (user) {
				createUserDocumentFromAuth(user)
				const dataUser = await getSignInUserFromAuth(user)
				if (dataUser) user.displayName = dataUser.displayName.stringValue
			}
			dispatch(setCurrentUser(user))
		})
		return unsubscribeFromAuth
	}, [dispatch])

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
