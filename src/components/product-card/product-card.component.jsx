import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './product-card.styles'
import Button, { BUTTON_TYPE_CLASES } from '../button/button.component'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart/cart.actions'

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()
  return (
    <CollectionItemContainer alt='CollectionItem'>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>${price}</PriceContainer>
      </CollectionFooterContainer>
      <Button
        buttonType={BUTTON_TYPE_CLASES.inverted}
        onClick={() => dispatch(addItem(item))}
      >
        Add to cart
      </Button>
    </CollectionItemContainer>
  )
}

export default CollectionItem
