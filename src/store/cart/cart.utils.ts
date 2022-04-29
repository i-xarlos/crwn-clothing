import { ProductItem } from '../product/product.types'
import { CartItem } from './cart.types'

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: ProductItem
) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

  if (existingCartItem)
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemTo: CartItem
) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemTo.id)

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemTo.id)
  }

  return cartItems.map(item =>
    item.id === cartItemTo.id ? { ...item, quantity: item.quantity - 1 } : item
  )
}
