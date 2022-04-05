import { useContext, useEffect, useState } from 'react'
import './categories.styles.scss'
import ProductCard from '../../components/product-card/product-card.component'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/category.context'

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoryContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const items = categoriesMap[category] || []
    setProducts(items)
  }, [category, categoriesMap])

  return (
    <>
      <div className='collection-page'>
        <h1 className='title'>{category.toUpperCase()} </h1>
        <div className='items'>
          {products.map(collection => (
            <ProductCard key={collection.id} item={collection} />
          ))}
        </div>
      </div>
      {products.length < 1 && (
        <p style={{ textAlign: 'center' }}>
          No items for this collection. Please try again latter.
        </p>
      )}
    </>
  )
}

export default Category
