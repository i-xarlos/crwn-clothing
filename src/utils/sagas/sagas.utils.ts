import { Action } from 'redux'
import { call } from 'typed-redux-saga/macro'

export const safe = (handler: any = null, saga: any, ...args: any) =>
  function* (action: Action) {
    try {
      yield* call(saga, ...args, action)
    } catch (err) {
      yield* call(handler, ...args, err)
    }
    return
  }
