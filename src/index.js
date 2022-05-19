import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker'
import { Elements } from '@stripe/react-stripe-js'

import { Provider } from 'react-redux'
import { store, persistor } from './store/store'

import { createRoot } from 'react-dom/client'
import { stripePromise } from './config/stripe/stripe.config'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<BrowserRouter>
				<Elements stripe={stripePromise}>
					<App />
				</Elements>
			</BrowserRouter>
		</PersistGate>
	</Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
