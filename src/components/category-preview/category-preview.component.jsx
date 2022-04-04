import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../state/shop/shop.selector'

import './category-preview.styles.scss'

function CategoryPreview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ ...otherProps }, id) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}
const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})
export default connect(mapStatetoProps)(CategoryPreview)
