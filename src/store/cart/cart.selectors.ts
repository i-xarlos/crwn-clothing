import { createSelector } from 'reselect'
import { CartState } from './cart.reducer'
import { CartItem } from './cart.types'

const selectCart = (state: any): CartState => state.cart

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
