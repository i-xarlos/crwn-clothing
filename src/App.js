import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'
import HomePage from './routes/homepage/homepage.component'
import ShopPage from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import CheckoutPage from './routes/checkout/checkout.component'
import { UserContext } from './context/user.context'

const App = () => {
	const { currentUser } = useContext(UserContext)

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

const mapStateToProps = createStructuredSelector({
	//currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	//doSetCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
