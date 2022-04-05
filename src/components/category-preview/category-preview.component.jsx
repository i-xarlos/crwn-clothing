import { useContext } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './category-preview.styles.scss'
import { CategoryContext } from '../../context/category.context'

function CategoryPreview() {
  const { categoriesMap } = useContext(CategoryContext)

  return (
    <div className='collections-overview'>
      {Object.keys(categoriesMap).map((key, id) => (
        <CollectionPreview key={id} items={categoriesMap[key]} title={key} />
      ))}
    </div>
  )
}
export default CategoryPreview
