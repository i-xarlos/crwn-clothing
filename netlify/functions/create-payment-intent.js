require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async e => {
	try {
		const { amount, currency = 'usd' } = JSON.parse(e.body)
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			payment_method_types: ['card'],
		})
		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		}
	} catch (error) {
		console.error(error)
		return {
			status: 400,
			body: JSON.stringify({ error }),
		}
	}
}
