import { useSelector } from 'react-redux'
import { selectCollections } from '../../state/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './category-preview.styles.scss'

function CategoryPreview() {
  const categoriesMap = useSelector(selectCollections)

  return (
    <div className='collections-overview'>
      {Object.keys(categoriesMap).map((key, id) => (
        <CollectionPreview key={id} items={categoriesMap[key]} title={key} />
      ))}
    </div>
  )
}
export default CategoryPreview
