import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  total: Number,
  price: Number,
})

const addCardItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex(item => item.id === productToAdd.id)
  if (index !== -1) {
    cartItems[index].quantity += 1
    return cartItems
  }
  cartItems.push({ ...productToAdd, quantity: 1 })
  return cartItems
}

const deleteCardItem = (cartItems, productToRemove) => {
  const index = cartItems.findIndex(item => item.id === productToRemove.id)
  if (index !== -1) {
    cartItems[index].quantity -= 1
    if (cartItems[index].quantity < 1) {
      cartItems.splice(index, 1)
    }
    return cartItems
  }
  return cartItems
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItemToCard = productToAdd => {
    setCartItems([...addCardItem(cartItems, productToAdd)])
  }

  const removeItemFromCard = productToRemove => {
    setCartItems([...deleteCardItem(cartItems, productToRemove)])
  }

  const clearCardItem = productToRemove => {
    return setCartItems([
      ...cartItems.filter(item => item.id !== productToRemove.id),
    ])
  }

  const total = cartItems.reduce((acc, current) => acc + current.quantity, 0)

  const price = cartItems.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  )

  const value = {
    cartItems,
    addItemToCard,
    removeItemFromCard,
    clearCardItem,
    total,
    price,
    isCartOpen,
    setIsCartOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
