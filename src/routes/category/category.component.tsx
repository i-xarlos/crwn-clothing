import ProductCard from '../../components/product-card/product-card.component'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../store/product/product.selector'
import './category.styles.scss'

type CategoryRouteParams = {
  category: string
}

function CategoryPage() {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams

  const products = useSelector(selectCollection(category))

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

export default CategoryPage
