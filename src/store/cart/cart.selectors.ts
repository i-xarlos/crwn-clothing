import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'
import { CartState } from './cart.reducer'
import { CartItem } from './cart.types'

const selectCart = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectHasCartItems = createSelector(
  [selectCart],
  cart => !!cart.cartItems.length
)
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) =>
    cartItems.reduce(
      (accQuantity, cartItem) =>
        accQuantity + cartItem.quantity * cartItem.price,
      0
    )
)
