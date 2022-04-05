import React from 'react'
import './collection-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <header>
        <h1 className='title'>
          <Link to={title}>{title.toUpperCase()}</Link>
        </h1>

        <Link className='view-more' to={title}>
          View more
        </Link>
      </header>
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
