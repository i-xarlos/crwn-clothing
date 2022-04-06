import React from 'react'
import HomeCategories from '../../components/home-categories/home-categories.component'
import { HomePageContainer } from './homepage.styles'

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomeCategories />
    </HomePageContainer>
  )
}
