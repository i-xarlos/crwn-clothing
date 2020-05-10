import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item, doAddItem }) {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<h3 className="name">{name}</h3>
				<span className="price">${price}</span>
			</div>
			<CustomButton onClick={() => doAddItem(item)} isInverted>
				Add to cart
			</CustomButton>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	doAddItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
