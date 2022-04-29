import { ProductItem } from '../product/product.types'

const enum CartTypes {
  TOGGLE_CART_HIDDEN = 'CART/TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'CART/ADD_ITEM',
  REMOVE_ITEM = 'CART/REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART = 'CART/CLEAR_ITEM_FROM_CART',
}

export type CartItem = ProductItem & {
  quantity: number
}

export default CartTypes
