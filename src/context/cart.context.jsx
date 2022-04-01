import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  setCart: () => null,
  cart: [],
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const value = { cart, setCart, isCartOpen, setIsCartOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
