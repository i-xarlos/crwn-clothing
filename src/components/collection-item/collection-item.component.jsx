import React from 'react';
import './collection-item.styles.scss';

function CollectionItem({ id, name, price, imageUrl }) {
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
		</div>
	);
}

export default CollectionItem;
