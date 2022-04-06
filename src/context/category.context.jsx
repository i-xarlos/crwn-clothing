import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../config/firebase/firebase.utils'

export const CategoryContext = createContext({
  categoriesMap: {},
})

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([])
  const value = { categoriesMap, setCategoriesMap }
  useEffect(() => {
    async function fetchData() {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoriesMap)
    }
    fetchData()
  }, [])

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}
