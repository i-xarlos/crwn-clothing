import { useContext } from 'react'
import { connect } from 'react-redux'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './product-card.styles'
import { CartContext } from '../../context/cart.context'
import Button, { BUTTON_TYPE_CLASES } from '../button/button.component'

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item
  const { addItemToCard } = useContext(CartContext)
  return (
    <CollectionItemContainer alt='CollectionItem'>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>${price}</PriceContainer>
      </CollectionFooterContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASES.inverted}
        onClick={() => addItemToCard(item)}
      >
        Add to cart
      </Button>
    </CollectionItemContainer>
  )
}

export default CollectionItem
