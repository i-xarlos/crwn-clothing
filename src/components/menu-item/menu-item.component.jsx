import React from 'react'
import { useNavigate } from 'react-router-dom'
import './menu-item.styles.scss'

function MenuItem({ title, size, imageUrl, linkUrl }) {
  const navigate = useNavigate()
  return (
    <div
      className={`menu-item ${size ? +size : ''}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  )
}

export default MenuItem
