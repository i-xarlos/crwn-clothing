import { useContext } from 'react'
import './categories.styles.scss'
import ProductCard from '../../components/product-card/product-card.component'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/category.context'

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoryContext)

  const items = categoriesMap[category] || []

  return (
    <>
      <div className='collection-page'>
        <h1 className='title'>{category.toUpperCase()} </h1>
        <div className='items'>
          {items.map(collection => (
            <ProductCard key={collection.id} item={collection} />
          ))}
        </div>
      </div>
      {items.length < 1 && <p style={{ textAlign: 'center' }}>No data</p>}
    </>
  )
}

export default Category
