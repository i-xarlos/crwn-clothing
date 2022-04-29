import { ProductItem } from '../product/product.types'
import types, { CartItem } from './cart.types'
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils'

export type ToggleCartHidden = Action<types.TOGGLE_CART_HIDDEN>
export type AddItem = ActionWithPayload<types.ADD_ITEM, ProductItem>
export type RemoveItem = ActionWithPayload<types.REMOVE_ITEM, CartItem>
export type ClearItemFromCart = ActionWithPayload<
  types.CLEAR_ITEM_FROM_CART,
  CartItem
>

export const toggleCartHidden = withMatcher(
  (): ToggleCartHidden => createAction(types.TOGGLE_CART_HIDDEN)
)

export const addItem = withMatcher(
  (item: ProductItem): AddItem => createAction(types.ADD_ITEM, item)
)

export const removeItem = withMatcher(
  (item: CartItem): RemoveItem => createAction(types.REMOVE_ITEM, item)
)

export const clearItemFromCart = withMatcher(
  (item: CartItem): ClearItemFromCart =>
    createAction(types.CLEAR_ITEM_FROM_CART, item)
)
