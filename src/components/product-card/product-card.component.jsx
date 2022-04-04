import { useContext } from 'react'
import { connect } from 'react-redux'
//import { addItem } from '../../state/cart/cart.actions'

import {
  AddButton,
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './product-card.styles'
import { CartContext } from '../../context/cart.context'

//function CollectionItem({ item, doAddItem }) {
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
      <AddButton onClick={() => addItemToCard(item)} isInverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  //doAddItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
