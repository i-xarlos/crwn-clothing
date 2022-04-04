import React from 'react'
import './collection-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
