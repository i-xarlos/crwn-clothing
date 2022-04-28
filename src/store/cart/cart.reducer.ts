import { addItemToCart, removeItemFromCart } from './cart.utils'
import { CartItem } from './cart.types'
import {
  addItem,
  clearItemFromCart,
  removeItem,
  toggleCartHidden,
} from './cart.actions'
import { AnyAction } from 'redux'

export type CartState = {
  readonly hidden: boolean
  readonly cartItems: CartItem[]
}

const initialState: CartState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = initialState, action: AnyAction): CartState => {
  if (toggleCartHidden.match(action)) {
    return {
      ...state,
      hidden: !state.hidden,
    }
  }
  if (addItem.match(action)) {
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    }
  }

  if (removeItem.match(action)) {
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    }
  }

  if (clearItemFromCart.match(action)) {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      ),
    }
  }
  return state
}

export default cartReducer
