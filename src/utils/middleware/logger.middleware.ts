import { Middleware } from 'redux'
import { RootState } from '../../store/root-reducer'

const loggerMiddleware: Middleware<{}, RootState> =
  store => next => (action: { type: string; payload: {} }) => {
    const { type, payload } = action

    //if not have type for redux thunk
    if (!type) {
      return next(action)
    }
    // actio#d0ff14n validation
    const message: { type: string; payload?: {} } = { type }

    if (payload) {
      message.payload = payload
    }

    //action dispatch (same for prev and next)
    console.log('%cACTION =>', 'color: gray', { ...message })

    //previus state
    console.log(`%cPREV STATE =>`, 'color: #ffa500', store.getState())

    //pull nthe action
    next(action)

    //next state
    console.log('%cNEXT STATE =>', 'color: #d0ff14', store.getState())
  }

export default loggerMiddleware
