import React from 'react'
import { connect } from 'react-redux'
//import { selectCollection } from '../../state/shop/shop.selector'
import './categories.styles.scss'
import ProductCard from '../../components/product-card/product-card.component'
import { useParams } from 'react-router-dom'
import { selectDirectorySections } from '../../state/directory/directory.selectors'
import { selectCollections } from '../../state/shop/shop.selector'

function Category({ collection }) {
  const { category } = useParams()

  const { items } = collection.find(section => {
    return section.title.toLowerCase() === category
  })

  return (
    <div className='collection-page'>
      <h1 className='title'>{category.toUpperCase()} </h1>
      <div className='items'>
        {items.map(collection => (
          <ProductCard key={collection.id} item={collection} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  //collection: selectCollection(ownProps.match.params.collectionId)(state),
  collection: selectCollections(state),
})

export default connect(mapStateToProps)(Category)
