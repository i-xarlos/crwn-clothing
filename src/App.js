import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'
import HomePage from './routes/homepage/homepage.component'
import ShopPage from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import CheckoutPage from './routes/checkout/checkout.component'
import {
	auth,
	createUserDocumentFromAuth,
} from './config/firebase/firebase.utils'

import { setCurrentUser } from './state/user/user.actions'
import { selectCurrentUser } from './state/user/user.selectors'

const App = ({ doSetCurrentUser, currentUser }) => {
	useEffect(() => {
		let unsubscribeFromAuth = null
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//

			if (userAuth) {
				const userRef = await createUserDocumentFromAuth(userAuth)

				//userRef.onSnapshot(snapshot => {
				//doSetCurrentUser({
				//id: snapshot.id,
				//...snapshot.data(),
				//})
				//})
			}

			doSetCurrentUser(userAuth)
			return () => {
				unsubscribeFromAuth()
			}
		})
	}, [])

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='shop' element={<ShopPage />} />
				<Route path='checkout' element={<CheckoutPage />} />

				<Route exact path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	doSetCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
