import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../store/product/product.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './category-preview.styles.scss'

function CategoryPreview() {
  const categories = useSelector(selectCollectionsForPreview)

  return (
    <div className='collections-overview'>
      {categories.map(({ items, title }, id) => (
        <CollectionPreview key={title} items={items} title={title} />
      ))}
    </div>
  )
}
export default CategoryPreview
