import { createContext, useReducer } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  total: Number,
  price: Number,
})

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  total: 0,
  price: 0,
}

export const CARD_ACTIONS_TYPES = {
  ADD_ITEM_TO_CARD: 'ADD_TO_CARD',
  REMOVE_ITEM_FROM_CARD: 'REMOVE_ITEM_FROM_CARD',
  CLEAR_ITEM_FROM_CARD: 'CLEAR_ITEM_FROM_CARD',
  TOGGLE_ICON_CARD: 'TOGGLE_ICON_CARD',
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CARD_ACTIONS_TYPES.ADD_ITEM_TO_CARD:
    case CARD_ACTIONS_TYPES.REMOVE_ITEM_FROM_CARD:
    case CARD_ACTIONS_TYPES.CLEAR_ITEM_FROM_CARD:
      return {
        ...state,
        ...updateCardReducer(state.cartItems, payload, type),
      }

    case CARD_ACTIONS_TYPES.TOGGLE_ICON_CARD:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
  }
}

const updateCardReducer = (cartItems, product, type) => {
  let products = []

  switch (type) {
    case CARD_ACTIONS_TYPES.ADD_ITEM_TO_CARD:
      products = addCardItem(cartItems, product)
      break
    case CARD_ACTIONS_TYPES.REMOVE_ITEM_FROM_CARD:
      products = deleteCardItem(cartItems, product)
      break
    case CARD_ACTIONS_TYPES.CLEAR_ITEM_FROM_CARD:
      products = clearCardItem(cartItems, product)
      break

    default:
      products = cartItems
      break
  }

  const total = products.reduce((acc, current) => acc + current.quantity, 0)
  const price = products.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  )

  return {
    cartItems: [...products],
    total,
    price,
  }
}

const addCardItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex(item => item.id === productToAdd.id)
  if (index !== -1) {
    cartItems[index].quantity += 1
    return [...cartItems]
  }
  cartItems.push({ ...productToAdd, quantity: 1 })
  return [...cartItems]
}

const deleteCardItem = (cartItems, productToRemove) => {
  const index = cartItems.findIndex(item => item.id === productToRemove.id)
  if (index !== -1) {
    cartItems[index].quantity -= 1
    if (cartItems[index].quantity < 1) {
      cartItems.splice(index, 1)
    }
  }
  return [...cartItems]
}

const clearCardItem = (cartItems, productToRemove) => {
  return [...cartItems.filter(item => item.id !== productToRemove.id)]
}

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, total, price }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  )

  const toggleIconCard = () => {
    dispatch({ type: CARD_ACTIONS_TYPES.TOGGLE_ICON_CARD })
  }

  const addItemToCard = product => {
    dispatch({ type: CARD_ACTIONS_TYPES.ADD_ITEM_TO_CARD, payload: product })
  }

  const removeItemFromCard = product => {
    dispatch({
      type: CARD_ACTIONS_TYPES.REMOVE_ITEM_FROM_CARD,
      payload: product,
    })
  }

  const clearCardItem = product => {
    dispatch({
      type: CARD_ACTIONS_TYPES.CLEAR_ITEM_FROM_CARD,
      payload: product,
    })
  }
  const value = {
    cartItems,
    addItemToCard,
    removeItemFromCard,
    clearCardItem,
    total,
    price,
    isCartOpen,
    toggleIconCard,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
