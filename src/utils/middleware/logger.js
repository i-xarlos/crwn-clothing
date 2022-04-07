const loggerMiddleware = store => next => action => {
	const { type, payload } = action

	if (!type) {
		return next(action)
	}
	//action dispatch (same for prev and next)
	console.log('%cACTION =>', 'color: gray', { type, payload })

	//previus state
	console.log(`%cPREV STATE =>`, 'color: orange', store.getState())

	//pull nthe action
	next(action)

	//next state
	console.log('%cNEXT STATE =>', 'color: #00ff00', store.getState())
}

export default loggerMiddleware
