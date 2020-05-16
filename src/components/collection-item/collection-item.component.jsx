import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
	AddButton,
	CollectionItemContainer,
	CollectionFooterContainer,
	BackgroundImage,
	NameContainer,
	PriceContainer,
} from './collection-item.styles';

function CollectionItem({ item, doAddItem }) {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer alt="CollectionItem">
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<CollectionFooterContainer>
				<NameContainer className="name">{name}</NameContainer>
				<PriceContainer className="price">${price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => doAddItem(item)} isInverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	doAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
