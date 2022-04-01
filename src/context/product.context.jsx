import { createContext, useState, useEffect } from 'react'
//import SHOP_DATA from '../shop-data.json'

import { getCategoriesAndDocuments } from '../config/firebase/firebase.utils'

export const ProductContext = createContext({
  setProducts: () => null,
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products, setProducts }
  useEffect(() => {
    async function fetchData() {
      const collectionArray = await getCategoriesAndDocuments('collections')
      setProducts(collectionArray)
    }
    fetchData()
  }, [])

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
