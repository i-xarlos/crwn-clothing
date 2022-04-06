import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'
import { selectCategories } from '../../state/category/category.selectors'
//hola
import './home-categories.styles.scss'

const HomeCategories = () => {
  const categories = useSelector(selectCategories)
  return (
    <div className='directory-menu'>
      {categories.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default HomeCategories
