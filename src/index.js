import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { store, persistor } from './state/store'

import { createRoot } from 'react-dom/client'

import { UserProvider } from './context/user.context'
import { CategoryProvider } from './context/category.context'
import { CartProvider } from './context/cart.context'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<UserProvider>
					<CategoryProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</CategoryProvider>
				</UserProvider>
			</PersistGate>
		</BrowserRouter>
	</Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
