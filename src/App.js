import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'
import HomePage from './routes/homepage/homepage.component'
import ShopPage from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import SignInPage from './routes/sign/sign-in-out.component'
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
		<div className='container'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<HomePage />} />
					<Route path='shop' element={<ShopPage />} />
					<Route path='checkout' element={<CheckoutPage />} />

					<Route exact path='sign' element={<SignInPage />} />
				</Route>
			</Routes>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	doSetCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
