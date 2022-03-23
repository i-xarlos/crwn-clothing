import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../state/shop/shop.selector';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage({ collection }) {
	const { title, items } = collection;

	return (
		<div className="collection-page">
			<h1 className="title">{title} </h1>
			<div className="items">
				{items.map(collection => (
					<CollectionItem key={collection.id} item={collection} />
				))}
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
